
module.exports = {
  branches: [
    { name: 'develop', prerelease: 'beta' },
    { name: 'improvement-comment-add', prerelease: 'alpha' },
    { name: 'feat-docker-multicloud-deployment', prerelease: 'docker' }
  ],
  tagFormat: 'v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
};
