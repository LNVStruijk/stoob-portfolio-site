module.exports = {
  reactStrictMode: true,
}

const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  }
};