// import { artists } from "../dummyData/data.js";
import Artist from "../models/artist.model.js";
import Track from "../models/track.model.js";
import Album from "../models/album.model.js";

const albumResolver = {
    Query: {
        async albums() {
            return Album.find({});
        },
        async album(_, { albumId }) {
            try {
                return Album.findById(albumId);
            } 
            catch (error) {
                console.log("Error getting Album: ", error);
                throw new error("Error getting Album: ");
            }        
        }
    },
    Mutation: {
        async createAlbum(_, { input }) {
            try {
                console.log("function called")
                const album = await Album.create(input);
                console.log("album: ", album)
                return album;
            } 
            catch (error) {
                console.log("Error creating Album: ", error);
                throw new error("Error creating Album: ");
            }        
        }
    },
    Album: {
        async artists(parent) {
            try {
                const artists = await Artist.find({ _id: { $in: parent.artistId } });
                return artists;
            } 
            catch (error) {
                console.log("Error getting Artist: ", error);
                throw new error("Error getting Artist: ");
            }        
        },
        async tracks(parent) {
            try {
                const tracks = await Track.find({ _id: { $in: parent.tracksId } });
                return tracks;
            } 
            catch (error) {
                console.log("Error getting Track: ", error);
                throw new error("Error getting Track: ");
            }        
        }
    }
};

export default albumResolver;