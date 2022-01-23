const isDev = process.env.NODE_ENV === 'development';

let config = {};
if (!isDev) {
  config = {
    assetsPrefix: '/portfolio',
    basePath: '/portfolio',
  };
}
module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  ...config,
};
