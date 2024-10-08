const genreTypeDef = `#graphql
    type Genre {
        _id: ID!
        name: String!
        tracks: [Track!]
        artists: [Artist!]
        albums: [Album!]
    }

    type Query {
        genres: [Genre!]
        genre(genreId: ID!): Genre
    }

    type Mutation {
        createGenre(input: CreateGenreInput): Genre!
    }

    input CreateGenreInput {
        name: String!
    }
`;

export default genreTypeDef;