module.exports = {
  name: 'a-operation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/a-operation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
