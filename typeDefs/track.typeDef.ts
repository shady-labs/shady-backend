const trackTypeDef = `#graphql
    type Track {
        _id: ID!
        artistsId: [ID!]!
        name: String!
        artists: [Artist!]!
    }

    type Query {
        tracks: [Track!]
        track(trackId: ID!): Track
    }

    type Mutation {
        createTrack(input: CreateTrackInput): Track!
        updateTrack(trackId: ID!, input: UpdateTrackInput): Track!
        deleteTrack(trackId: ID!): Track!
    }

    input CreateTrackInput {
        name: String!
        artistsId: [ID!]!
    }
    
    input UpdateTrackInput {
        name: String!
        trackId: String!
    }

    input DeleteTrackInput {
        trackId: ID!
    }
`;

export default trackTypeDef;