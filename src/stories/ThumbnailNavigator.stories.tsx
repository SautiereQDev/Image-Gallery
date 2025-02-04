import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { expect, within } from '@storybook/test';
import ThumbnailNavigator from '../components/ThumbnailNavigator';
import imagesSources from '../mocks/images';
import { GalleryProvider } from '../contexts/ImageGalleryContext';
import Reset from '../styles/reset';

const meta = {
	component: ThumbnailNavigator,
} satisfies Meta<ComponentProps<typeof ThumbnailNavigator>>;

export default meta;

type Story = StoryObj<typeof ThumbnailNavigator>;

export const Default: Story = {
	render: (args) => <GalleryProvider initialImages={imagesSources}
																		 activeImage={imagesSources[0]}><Reset /><ThumbnailNavigator {...args} /></GalleryProvider>,
	args: {
		direction: 'horizontal',
		nbImagesVisible: 5,
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const images = canvas.getAllByRole('img');
		await step('Thumbnail navigator is rendered', () => {
			expect(images).toHaveLength(5);
		});
		await step('The active image is not rendered', () => {
			const activeImage = canvas.queryByAltText('Image 1');
			expect(activeImage).not.toBeInTheDocument();
		});
	},
};