import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
    likedTracksId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Track',
        required: false,
        unique: false,
    }],
    followedArtistsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: false,
        unique: false,
    }],
    queueTracksId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Track',
        required: false,
        unique: false,
    }],
    currentTrackId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Track',
        required: false,
        unique: false,
    },
    currentTrackTime: {
        default: 0,
        type: Number,
        required: false,
        unique: false,
    },
    currentTrackPaused: {
        default: true,
        type: Boolean,
        required: false,
        unique: false,
    },
    currentTrackVolume: {
        default: 100,
        type: Number,
        required: false,
        unique: false,
    },
    currentTrackRepeat: {
        default: false,
        type: Boolean,
        required: false,
        unique: false,
    },
    currentTrackShuffle: {
        default: false,
        type: Boolean,
        required: false,
        unique: false,
    },
});

const User = mongoose.model("User", userSchema);

export default User;