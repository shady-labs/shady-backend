// import { artists } from "../dummyData/data.js";
import Album from "../models/album.model.js";
import Artist from "../models/artist.model.js";
import Genre from "../models/genre.model.js";
import Track from "../models/track.model.js";

const artistResolver = {
    Query: {
        artists: async () => {
        return Artist.find({});
        },
        artist: async (_, { id }) => {
        return Artist.findById(id);
        },
    },
    Mutation: {
        createArtist(_, { input }) {
            console.log("input: ", input)
            return Artist.create(input);
        }
    },
    Artist: {
        tracks: async (parent) => {
            try {
                // find tracks with artistID present in array artistsID
                const tracks = await Track.find({ artistsId: parent._id });
				return tracks;
			} catch (err) {
				console.log("Error in user.tracks resolver: ", err);
				throw new Error(err.message || "Internal server error");
			}
        },
        genres: async (parent) => {
            try {
                // find genres with artistID present in array artistsID
                const genres = await Genre.find({ name: parent.genres });
                return genres;
            } catch (err) {
                console.log("Error in user.genres resolver: ", err);
                throw new Error(err.message || "Internal server error");
            }
        },
        albums: async (parent) => {
            try {
                // find albums with artistID present in array artistsID
                const albums = await Album.find({ artistsId: parent._id });
                return albums;
            } catch (err) {
                console.log("Error in user.albums resolver: ", err);
                throw new Error(err.message || "Internal server error");
            }
        }
    }
};

export default artistResolver;