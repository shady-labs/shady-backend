// import { artists } from "../dummyData/data.js";
import Artist from "../models/artist.model.js";
import Track from "../models/track.model.js";
import Album from "../models/album.model.js";

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
        albums: async (parent) => {
            try {
                // find albums with artistID present in array artistsID
                const albums = await Album.find({ artistId: parent._id });
                return albums;
            } catch (err) {
                console.log("Error in user.albums resolver: ", err);
                throw new Error(err.message || "Internal server error");
            }
        }
    }
};

export default artistResolver;