import { mergeTypeDefs } from "@graphql-tools/merge";
import artistTypeDef from "./artist.typeDef.js";
import trackTypeDef from "./track.typeDef.js";
import genreTypeDef from "./genre.typeDef.js";
import albumTypeDef from "./album.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([
    artistTypeDef,
    trackTypeDef,
    genreTypeDef,
    albumTypeDef,
]);

export default mergedTypeDefs;