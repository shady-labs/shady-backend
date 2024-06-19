import { mergeTypeDefs } from "@graphql-tools/merge";
import artistTypeDef from "./artist.typeDef.js";
import trackTypeDef from "./track.typeDef.js";
import albumTypeDef from "./album.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([
    albumTypeDef,
    artistTypeDef,
    trackTypeDef
]);

export default mergedTypeDefs;