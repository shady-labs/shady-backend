// import { artists } from "../dummyData/data.js";
import Artist from "../models/artist.model.js";
import Genre from "../models/genre.model.js";
import Track from "../models/track.model.js";

const genreResolver = {
    Query: {
        genres: async () => {
        return Genre.find({});
        },
        genre: async (_, { id }) => {
        return Genre.findById(id);
        },
    },
    Mutation: {
        createGenre(_, { input }) {
            return Genre.create(input);
        }
    },
    Genre: {
        tracks: async (parent) => {
            try {
                // find tracks with artistID present in array artistsID
                const tracks = await Track.find({ genres: parent.name });
				return tracks;
			} catch (err) {
				console.log("Error in user.tracks resolver: ", err);
				throw new Error(err.message || "Internal server error");
			}
        }
    }
};

export default genreResolver;