// import { artists } from "../dummyData/data.js";
import Album from "../models/album.model.js";
import Artist from "../models/artist.model.js";
import Genre from "../models/genre.model.js";
import Track from "../models/track.model.js";

const albumResolver = {
    Query: {
        albums: async () => {
        return Album.find({});
        },
        album: async (_, { id }) => {
        return Album.findById(id);
        },
    },
    Mutation: { 
        createAlbum(_, { input }) {
            console.log("input: ", input)
            return Album.create(input);
        }
    },
    Album: {
        tracks: async (parent) => {
            try {
                // find tracks with artistID present in array artistsID
                const tracks = await Track.find({ albumId: parent._id });
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
        }
    }
};

export default albumResolver;