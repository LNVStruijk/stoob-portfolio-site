/**
 * @type {import('next').NextConfig}
 */
const path = require('path')

const SRC = path.resolve(__dirname, 'node_modules')

module.exports = {
  reactStrictMode: true,
}

const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
}

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
      {
        test: /.mp3$/,
        include: SRC,
        loader: 'file-loader',
      },
    ],
  },
}
