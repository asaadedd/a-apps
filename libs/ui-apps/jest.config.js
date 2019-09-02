module.exports = {
  name: 'ui-apps',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-apps',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
