const artistTypeDef = `#graphql
    type Artist {
        _id: ID!
        name: String!
        walletAddress: String!
        tracks: [Track]
        genres: [Genre]
        albums: [Album]
    }

    type Query {
        artists: [Artist!]
        artist(artistId: ID!): Artist
    }

    type Mutation {
        createArtist(input: CreateArtistInput): Artist!
    }

    input CreateArtistInput {
        name: String!
        walletAddress: String!
        genres: [ID]
    }
`;

export default artistTypeDef;