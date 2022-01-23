const isDev = process.env.NODE_ENV === 'development';

let config = {
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
};
if (!isDev || true) {
  config = {
    assetsPrefix: '/portfolio',
    basePath: '/portfolio',
  };
}
module.exports = {
  ...config,
};
