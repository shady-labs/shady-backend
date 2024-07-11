import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
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
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
});

const Artist = mongoose.model("Artist", ArtistSchema);

export default Artist;