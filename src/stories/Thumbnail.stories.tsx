import Thumbnail from '../components/Thumbnail';
import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import images from '../mocks/images';

const meta = {
	component: Thumbnail,
	title: 'Thumbnail',
} satisfies Meta<ComponentProps<typeof Thumbnail>>;

export default meta;

type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
	args: {
		src: images[0].src,
		alt: images[0].alt,
		width: 300,
		height: 300,
		unit: 'px',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const image = canvas.getByRole('img');
		await step('Thumbnail is rendered', () => {
			expect(image).not.toBeNull();
		});
		await step('Verification des dimensions', () => {
			expect(image).toHaveStyle({
				width: '300px',
			});
		});
	},
};