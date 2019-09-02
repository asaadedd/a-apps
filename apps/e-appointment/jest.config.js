module.exports = {
  name: 'e-appointment',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/e-appointment',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
