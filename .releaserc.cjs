
module.exports = {
  branches: [
    'develop',

    {
      name: 'improvenment-comment-add',
      prerelease: 'alpha'
    }
  ],

  tagFormat: 'v${version}',

  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
};
