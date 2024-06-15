// npm install @apollo/server express graphql cors
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import mergedResolvers from './resolvers/index.js';
import mergedTypeDefs from './typeDefs/index.js';
import dotenv from 'dotenv';
import { connectDB } from './db/ connectDB.js';
import connectMongo from 'connect-mongodb-session';
import session from 'express-session';
import { config } from 'dotenv';
import passport from 'passport';
import { GraphQLLocalStrategy, buildContext } from 'graphql-passport';
import job from './cron.js';

dotenv.config();

job.start();

const app = express();

const httpServer = http.createServer(app);

const mongoDBStore  = connectMongo(session);

const store = new mongoDBStore({
  uri: process.env.MONGO_URI,
  collection: 'v2',
});

store.on('error', (error) => {
  console.log(error);
}
);

app.use(
  session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  '/',
  cors(
    {
      origin: 'http://localhost:3000',
      credentials: true,
    },
  ),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => buildContext({ req, res, passport })
  }),
);

app.use(express.static('public'));

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, () => resolve()));
await connectDB();

console.log(`🚀 Server ready at http://localhost:4000/`);

