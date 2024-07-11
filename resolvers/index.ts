import { mergeResolvers } from "@graphql-tools/merge";
import artistResolver from "./artist.resolver.js";
import trackResolver from "./track.resolver.js";
import genreResolver from "./genre.resolver.js";

const mergedResolvers = mergeResolvers([
    artistResolver,
    trackResolver,
    genreResolver
]);

export default mergedResolvers;