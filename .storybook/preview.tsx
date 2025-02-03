// .storybook/preview.tsx
import { Preview } from '@storybook/react';
import { Reset } from '../src/styles/reset';
import { Analytics } from '@vercel/analytics/react';

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		decorators: [
			(Story: any) => (
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