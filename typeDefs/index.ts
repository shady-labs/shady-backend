import { mergeTypeDefs } from "@graphql-tools/merge";
import artistTypeDef from "./artist.typeDef.js";
import trackTypeDef from "./track.typeDef.js";
import genreTypeDef from "./genre.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([
    artistTypeDef,
    trackTypeDef,
    genreTypeDef
]);

export default mergedTypeDefs;