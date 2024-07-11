const userTypeDef = `#graphql
    type User {
        _id: ID!
        userName: String!
        walletAddress: String!
        likedTracks: [Track!]
        followedArtists: [Artist!]
        trackQueue: [Track!]
        currentTrack: Track
        currentTrackTime: Int
        currentTrackPaused: Boolean
        currentTrackVolume: Int
        currentTrackRepeat: Boolean
        currentTrackShuffle: Boolean
    }

    type Query {
        users: [User!]
        user(userId: ID!): User
    }

    type Mutation {
        createUser(input: CreateAUserInput): User!
        updateUser(input: UpdateUserInput): User!
        #user actions
        likeTrack(userId: ID!, trackId: ID!): User!
        unlikeTrack(userId: ID!, trackId: ID!): User!
        followArtist(userId: ID!, artistId: ID!): User!
        unfollowArtist(userId: ID!, artistId: ID!): User!
        addToQueue(userId: ID!, trackId: ID!): User!
        removeFromQueue(userId: ID!, trackId: ID!): User!
        setCurrentTrack(userId: ID!, trackId: ID!): User!
        setCurrentTrackTime(userId: ID!, time: Int!): User!
        setCurrentTrackPaused(userId: ID!, paused: Boolean!): User!
        setCurrentTrackVolume(userId: ID!, volume: Int!): User!
        setCurrentTrackRepeat(userId: ID!, repeat: Boolean!): User!
        setCurrentTrackShuffle(userId: ID!, shuffle: Boolean!): User!
    }

    input CreateAUserInput {
        userName: String!
        walletAddress: String!
    }

    input UpdateUserInput {
        userId: ID!
        userName: String
        walletAddress: String
        likedTracksId: [ID]
        followedArtistsId: [ID]
        trackQueue: [ID]
        currentTrack: ID
        currentTrackTime: Int
        currentTrackPaused: Boolean
        currentTrackVolume: Int
        currentTrackRepeat: Boolean
        currentTrackShuffle: Boolean
    }
`;

export default userTypeDef;