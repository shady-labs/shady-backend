import { mergeResolvers } from "@graphql-tools/merge";
import artistResolver from "./artist.resolver.js";
import trackResolver from "./track.resolver.js";
import albumResolver from "./album.resolver.js";

const mergedResolvers = mergeResolvers([
    albumResolver,
    artistResolver,
    trackResolver
]);

export default mergedResolvers;