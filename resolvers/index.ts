import { mergeResolvers } from "@graphql-tools/merge";
import artistResolver from "./artist.resolver.js";
import trackResolver from "./track.resolver.js";

const mergedResolvers = mergeResolvers([
    artistResolver,
    trackResolver
]);

export default mergedResolvers;