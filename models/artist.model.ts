import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
    albumsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: false,
        unique: false,
    }],
});

const Artist = mongoose.model("Artist", ArtistSchema);

export default Artist;