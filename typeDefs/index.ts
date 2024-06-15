import { mergeTypeDefs } from "@graphql-tools/merge";
import artistTypeDef from "./artist.typeDef.js";
import trackTypeDef from "./track.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([
    artistTypeDef,
    trackTypeDef
]);

export default mergedTypeDefs;