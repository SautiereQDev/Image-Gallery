import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import MainPicture from '../components/MainPicture';
import images from '../mocks/images';
import { expect } from '@storybook/test';
import { GalleryProvider } from '../contexts/ImageGalleryContext';

const meta = {
	component: MainPicture,
} satisfies Meta<ComponentProps<typeof MainPicture>>;

export default meta;

type Story = StoryObj<typeof MainPicture>;

export const Default = {
	render: (args) => <GalleryProvider storedImages={images}><MainPicture {...args} /></GalleryProvider>,
	args: {
		width: 300,
		height: 300,
		unit: 'px',
		buttonColor: '#FFF',
	},
	play: async ({ canvasElement, step }) => {
		const buttons = canvasElement.querySelectorAll('button');

		await step('Verification du rendu', () => {
			expect(buttons).toHaveLength(2);
			expect(buttons[0]).toHaveStyle({ color: '#000' });

		});

		await step('Click sur le premier bouton', async () => {
			await expect(canvasElement.querySelector('img')).toHaveAttribute('src', images[0].src);
			buttons[0].click();
			await new Promise(r => setTimeout(r, 1000)).then(() => {
				expect(canvasElement.querySelector('img')).toHaveAttribute('src', images[1].src);
			});
		});
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/X9vXoCdJoJRlKONjfCDmBS/Image-Gallery?node-id=0-1&t=HceAH1ir388vdZrm-1',
		},
	},
} satisfies Story;
