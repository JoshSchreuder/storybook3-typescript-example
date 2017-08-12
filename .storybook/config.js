/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';

const req = require.context('../stories', true, /\.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);