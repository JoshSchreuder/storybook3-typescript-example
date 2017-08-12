import * as React from 'react';

import { RenderFunction } from '@storybook/react';

export const CenterDecorator = (story: RenderFunction) => (
  <div style={{textAlign: 'center'}}>
    {story()}
  </div>
);