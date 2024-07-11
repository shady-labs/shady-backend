// import { tracks } from '../dummyData/data';
import Album from "../models/album.model.js";
import Artist from "../models/artist.model.js";
import Genre from "../models/genre.model.js";
import Track from "../models/track.model.js";

const trackResolver = {
    Query: {
        async tracks() {
        return Track.find({});
        },
        async track(_, { trackId }) {
            try {
                return Track.findById(trackId);   
            } 
            catch (error) {
                console.log("Error getting Track: ", error);
                throw new error("Error getting Track: ");
            }        
        }
    },
    Mutation: {
        async createTrack(_, { input }) {
            try {
                console.log("input: ", input);
                return Track.create(input);
            } 
            catch (error) {
                console.log("Error creating Track: ", error);
                throw new error("Error creating Track: ");
            }        
        },
        async updateTrack(_, { trackId, input }) {
            try {
                return Track.findByIdAndUpdate(trackId, input, { new: true });
            } 
            catch (error) {
                console.log("Error updating Track: ", error);
                throw new error("Error updating Track: ");
            }        
        },
        async deleteTrack(_, { trackId }) {
            try {
                return Track.findByIdAndDelete(trackId);
            } 
            catch (error) {
                console.log("Error deleting Track: ", error);
                throw new error("Error deleting Track: ");
            }        
        },
    },
    Track: {
        async artists(parent) {
            try {
                const artists = await Artist.find({ _id: { $in: parent.artistsId } });
                return artists;
            } 
            catch (error) {
                console.log("Error getting Artist: ", error);
                throw new error("Error getting Artist: ");
            }        
        },
        async genres(parent) {
            try {
                // find genres with genrename present in array genres
                const genres = await Genre.find({ name: { $in: parent.genres }});
                return genres;
            } 
            catch (error) {
                console.log("Error getting Genre: ", error);
                throw new error("Error getting Genre: ");
            }        
        },
        async album(parent) {
            try {
                const album = await Album.findById(parent.albumId);
                return album;
            } 
            catch (error) {
                console.log("Error getting Album: ", error);
                throw new error("Error getting Album: ");
            }
        }
    }
};

export default trackResolver;
