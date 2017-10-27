module.exports = {
  // public token ids our applciation to google servers
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  // PRIVATE - info we do not want shared with others outside env
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mLabURI: process.env.MLAB_URI,
  cookieKey: process.env.COOKIE_KEY
};
