import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    genres: [{
        type: String,
        required: false,
        unique: false,
    }],
    artistsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true,
        unique: false,
    }],
    tracksId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Track',
        required: false,
        unique: false,
    }],
});

const Album = mongoose.model("Album", AlbumSchema);

export default Album;