import passport from 'passport';
import { Strategy } from 'passport-facebook';
import db from '../../db/models';

const { User } = db;

passport.use(
  new Strategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.getUserByProviderId(profile.id, profile.provider);
      if (!user) {
        user = await User.createUser({
          firstName:
            profile.name.familyName ||
            profile.displayName ||
            profile.displayName.split(' ')[0],
          lastName:
            profile.name.givenName || profile.displayName.split(' ').length > 1
              ? profile.displayName.split(' ')[1]
              : profile.displayName.split(' ')[0],
          provider: profile.provider,
          providerId: profile.id,
          username:
            profile.username ||
            profile.name.givenName ||
            profile.name.familyName ||
            profile.displayName.replaceAll(' ', '_'),
        });
      }
      done(null, user);
    }
  )
);
