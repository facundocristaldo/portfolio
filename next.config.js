const isDev = process.env.NODE_ENV === 'development';

let config = {
  images: {
    loader: 'akamai',
    path: '',
  },
};
if (!isDev) {
  config = {
    assetsPrefix: '/portfolio',
    basePath: '/portfolio',
  };
}
module.exports = {
  ...config,
};
