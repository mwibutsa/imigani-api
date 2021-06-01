import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import db from '../../db/models';

const { User } = db;

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_AUTH_CALLBACK_URL,
    },
    async (_1, _2, profile, done) => {
      try {
        let user = await User.getUserByProviderId(profile.id, profile.provider);
        if (!user) {
          user = await User.createUser({
            firstName: profile.name.familyName || profile.displayName,
            lastName: profile.name.givenName || profile.displayName,
            email: profile.emails[0].value,
            pictureURL: profile.photos[0].value,
            provider: profile.provider,
            providerId: profile.id,
            username: profile.name.givenName || profile.name.familyName,
          });
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.getUserByProviderId(id, 'google');
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
