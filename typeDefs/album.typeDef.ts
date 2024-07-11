const albumTypeDef = `#graphql
    type Album {
        _id: ID!
        name: String!
        walletAddress: String!
        tracks: [Track!]
        genres: [Genre]
        artists: [Artist!]!
    }

    type Query {
        albums: [Album!]
        album(albumId: ID!): Album
    }

    type Mutation {
        createAlbum(input: CreateAlbumInput): Album!
        addTrackToAlbum(albumId: ID!, trackId: ID!): Album!
    }

    input CreateAlbumInput {
        name: String!
        genres: [ID]
        artistsId: [ID!]!
    }
`;

export default albumTypeDef;