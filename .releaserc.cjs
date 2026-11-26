module.exports = {
  branches: [
    'main',
    {
      name: 'develop',
      prerelease: 'beta'
    }
  ],

  tagFormat: 'v${version}',

  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { breaking: true, release: 'major' }
        ]
      }
    ],

    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits'
      }
    ],

    '@semantic-release/github'
  ]
};
