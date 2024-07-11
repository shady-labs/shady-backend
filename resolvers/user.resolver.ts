// import { artists } from "../dummyData/data.js";
import Album from "../models/album.model.js";
import Artist from "../models/artist.model.js";
import Genre from "../models/genre.model.js";
import Track from "../models/track.model.js";
import User from "../models/user.model.js";

const userResolver = {
    Query: {
        users: async () => {
        return User.find({});
        },
        user: async (_, { id }) => {
        return User.findById(id);
        },
    },
    Mutation: {
        createUser(_, { input }) {
            console.log("input: ", input)
            return User.create(input);
        },
        updateUser(_, { id, input }) {
            return User.findByIdAndUpdate(id, input, { new: true });
        },
        async likeTrack(_, { userId, trackId }) {
            const track = await Track.findById(trackId);
            if (!track) {
                throw new Error("Track not found");
            }
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            console.log("liked Track:", user.likedTracksId);
            if(user.likedTracksId.includes(trackId)) {
                console.log("Track already liked")
                return user;
            }
            track.likes += 1;
            console.log("track: after like", track.likes);
            user.likedTracksId.push(trackId);
            user.save();
            track.save();
            return user;
        },
        async unlikeTrack(_, { userId, trackId }) {
            const track = await Track.findById(trackId);
            if (!track) {
                throw new Error("Track not found");
            }
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            if(!user.likedTracksId.includes(trackId)) {
                console.log("Track not liked")
                return user;
            }
            track.likes -= 1;
            track.save();
            user.save();
            return user;
        },
        async followArtist(_, { userId, artistId }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            const artist = await Artist.findById(artistId);
            if(!artist) {
                console.log("Artist not found")
                throw new Error("Artist not found");
            }
            if(user.followedArtistsId.includes(artistId)) {
                console.log("Artist already followed")
                return user;
            }
            artist.followerCount += 1;
            user.followedArtistsId.push(artistId);
            artist.save();
            user.save();
            return user;

        },
        async unfollowArtist(_, { userId, artistId }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            const artist = await Artist.findById(artistId);
            if(!artist) {
                console.log("Artist not found")
                throw new Error("Artist not found");
            }
            if(!user.followedArtistsId.includes(artistId)) {
                console.log("Artist not followed")
                return user;
            }
            artist.followerCount -= 1;
            user.followedArtistsId = user.followedArtistsId.filter(id => id !== artistId);
            artist.save();
            user.save();
            return user;
        },
        async addToQueue(_, { userId, trackId }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            const track = await Track.findById(trackId);
            if(!track) {
                console.log("Track not found")
                throw new Error("Track not found");
            }
            if(user.queueTracksId.includes(trackId)) {
                console.log("Track already in queue")
                return user;
            }
            user.queueTracksId.push(trackId);
            user.save();
            return user;
        },
        async removeFromQueue(_, { userId, trackId }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            const track = await Track.findById(trackId);
            if(!track) {
                console.log("Track not found")
                throw new Error("Track not found");
            }
            if(!user.queueTracksId.includes(trackId)) {
                console.log("Track not in queue")
                return user;
            }
            user.queueTracksId = user.queueTracksId.filter(id => id !== trackId);

            return user;
        },
        async setCurrentTrack(_, { userId, trackId }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            const track = await Track.findById(trackId);
            if(!track) {
                console.log("Track not found")
                throw new Error("Track not found");
            }
            user.currentTrackId = trackId;
            console.log("trackId: ", user)
            user.save();
            return user;
        },
        async setCurrentTrackTime(_, { userId, time }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            user.currentTrackTime = time;
            user.save();
            return user;
        },
        async setCurrentTrackPaused(_, { userId, paused }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            user.currentTrackPaused = paused;
            user.save();
            return user;
        },
        async setCurrentTrackVolume(_, { userId, volume }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            user.currentTrackVolume = volume;
            user.save();
            return user;
        },
        async setCurrentTrackRepeat(_, { userId, repeat }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            user.currentTrackRepeat = repeat;
            user.save();
            return user;
        },
        async setCurrentTrackShuffle(_, { userId, shuffle }) {
            const user = await User.findById(userId);
            if(!user) {
                console.log("User not found")
                throw new Error("User not found");
            }
            user.currentTrackShuffle = shuffle;
            user.save();
            return user;
        },

    },
    User: {
        likedTracks: async (parent) => {
            try {
                // find tracks with artistID present in array artistsID
                const tracks = await Track.findById(parent.likedTracksId);
                return tracks;
            } catch (err) {
                console.log("Error in user.tracks resolver: ", err);
                throw new Error(err.message || "Internal server error");
            }
        },
        followedArtists: async (parent) => {
            try {
                // find artists with artistID present in array artistsID
                const artists = await Artist.findById(parent.followedArtistsId);
                return artists;
            } catch (err) {
                console.log("Error in user.artists resolver: ", err);
                throw new Error(err.message || "Internal server error");
            }
        },
        trackQueue: async (parent) => {
            try {
                // find albums with artistID present in array artistsID
                const Tracks = await Track.findById(parent.queueTracksId);
                return Tracks;
            } catch (err) {
                console.log("Error in user.albums resolver: ", err);
                throw new Error(err.message || "Internal server error");
            }
        },
        currentTrack: async (parent) => {
            try {
                // find albums with artistID present in array artistsID
                if(!parent.currentTrackId) {
                    console.log("No current track")
                    return null;
                }
                    const track = await Track.findById(parent.currentTrackId);
                    return track;
            } catch (err) {
                console.log("Error in user.albums resolver: ", err);
                throw new Error(err.message || "Internal server error");
            }
        }
    }
};

export default userResolver;