basePath = '..';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'components/lodash/dist/lodash.legacy.js',
  'components/angular/angular.js',
  'components/angular-mocks/angular-mocks.js',
  'tests/libraries/mocker.js',
  'tests/*.js',
  '*.js'
];

autoWatch = false;

browsers = ['PhantomJS'];

singleRun = true;
