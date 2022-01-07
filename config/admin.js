module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '16dd047f1c6c43a60707506394cc6284'),
  },
});
