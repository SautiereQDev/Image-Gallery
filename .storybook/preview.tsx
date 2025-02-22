import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Reset from '../src/styles/reset';
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      (Story: React.FC) => (
        <>
          <Analytics />
          <Reset />
          <Story />
        </>
      ),
    ],
  },

  tags: ['autodocs'],
};

export default preview;