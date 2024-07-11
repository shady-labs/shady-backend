import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    artistsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true,
        unique: false,
    }],
    genres: [{
        type: String,
        required: false,
        unique: false,
    }],
    albumId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: true,
        unique: false,
    },
    likes: {
        default: 0,
        type: Number,
        required: false,
        unique: false,
    },
});

const Track = mongoose.model("Track", trackSchema);

export default Track;