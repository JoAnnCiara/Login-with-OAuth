const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "420948017016-me87l58r4s0hn0o3kj4848b6dt6taof1.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "e744145afbf4816ca712";
const GITHUB_CLIENT_SECRET = "dad2b221eee92d56c6ae0600531a1b325bbe050e";

FACEBOOK_APP_ID = "536907838007897";
FACEBOOK_APP_SECRET = "5e8f8a572bc2dfef11dc2e96c5e6f9cc";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },

    // No database is used in this example.

    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// if using sessions, this is the serializeUser method

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});