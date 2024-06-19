const albumTypeDef = `#graphql
    type Album {
        _id: ID!
        name: String!
        artists: [Artist!]!
        tracks: [Track]!
    }

    type Query {
        albums: [Album!]
        album(albumId: ID!): Album
    }

    type Mutation {
        createAlbum(input: CreateAlbumInput): Album!
    }

    input CreateAlbumInput {
        name: String!
        artistId: [ID!]!
    }
`;

export default albumTypeDef;