import mongoose from "mongoose";
import { artists } from "../dummyData/data.js";

const AlbumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    trackId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Track',
        required: false,
        unique: false,
    }],
    artistId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true,
        unique: false,
    }],

});

const Album = mongoose.model("Album", AlbumSchema);

export default Album;