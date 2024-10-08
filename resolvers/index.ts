import { mergeResolvers } from "@graphql-tools/merge";
import artistResolver from "./artist.resolver.js";
import trackResolver from "./track.resolver.js";
import genreResolver from "./genre.resolver.js";
import albumResolver from "./album.resolver.js";
import userResolver from "./user.resolver.js";

const mergedResolvers = mergeResolvers([
    artistResolver,
    trackResolver,
    genreResolver,
    albumResolver,
    userResolver
]);

export default mergedResolvers;