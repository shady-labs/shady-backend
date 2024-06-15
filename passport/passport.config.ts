import passport from "passport";
import bcrypt from "bcryptjs";

import Artist from "../models/artist.model.js";
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = async () => {
    passport.serializeUser((user, done) => {
        console.log('serializeUser');
        done(null, user.id);
    }
    );
    
    passport.deserializeUser(async (id, done) => {
        console.log('deserializeUser');
        try {
            const user = await Artist.findById(id);
            done(null, user);
        }
        catch (err) {
            console.log(err);
        }
    }
    );

    passport.use(
        new GraphQLLocalStrategy(async (walletAddress, key, done) => {
            try {
                const user = await Artist.findOne({ walletAddress });
                if (!user) {
                    return done(null, false, { info: false, message: 'Invalid credentials' });
                }
                return done(null, user);
            }
            catch (err) {
                return done(err);
            }
        })
    );

};