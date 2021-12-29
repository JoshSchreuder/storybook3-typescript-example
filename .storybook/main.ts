import path from 'path';

const APP_ROOT = path.resolve(__dirname, '../');

export const stories = [path.join(APP_ROOT, 'stories/**/*.tsx')];

export const addons = [
  '@storybook/addon-actions',
  '@storybook/addon-docs',
  '@storybook/addon-viewport',
  '@storybook/addon-backgrounds',
  '@storybook/addon-a11y',
  'storybook-addon-next-router',
  'storybook-addon-performance/register',
  'storycap',
  {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  },
];
