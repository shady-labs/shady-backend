import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Genre = mongoose.model("Genre", GenreSchema);

export default Genre;