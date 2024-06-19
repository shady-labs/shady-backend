const artistTypeDef = `#graphql
    type Artist {
        _id: ID!
        name: String!
        walletAddress: String!
        tracks: [Track!]
        albums: [Album!]
        albumsId: [ID!]
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
        albumsId: [ID]!
    }
`;

export default artistTypeDef;