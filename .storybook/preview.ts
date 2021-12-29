import React from 'react';
import {Story} from '@storybook/react';
import {withScreenshot} from 'storycap';
import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import {customViewports} from './viewports';

export const parameters = {
  backgrounds: {
    default: 'app background',
    values: [{name: 'app background', value: '#fff'}],
  },
  viewport: {
    viewports: {...customViewports, ...MINIMAL_VIEWPORTS},
  },
  screenshot: {
    delay: 300,
    viewports: {
      mobile: {width: 390, height: 844}, // iPhone 13
      tablet: {width: 820, height: 1180}, // iPad Air (4Gen)
      laptop: {width: 1440, height: 900}, // MacBook Air (Full Screen)
    },
    waitFor: () => {
      return new Promise<void>(async resolve => {
        if (document.readyState === 'complete') resolve();

        document.addEventListener('readystatechange', () => {
          if (document.readyState === 'complete') resolve();
        });
      });
    },
  },
};

export const decorators = [
  (Story: Story): React.ReactNode => React.createElement(Story),
  withScreenshot,
];
