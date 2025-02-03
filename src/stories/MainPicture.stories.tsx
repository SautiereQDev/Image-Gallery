import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import MainPicture from '../components/MainPicture';
import images from '../mocks/images';

const meta = {
	component: MainPicture,
} satisfies Meta<ComponentProps<typeof MainPicture>>;

export default meta;

type Story = StoryObj<typeof MainPicture>;

export const Primary = {
	args: {
		src: images[0].src,
		alt: images[0].alt,
		width: 300,
		height: 300,
		unit: 'px',
	},
	play: async ({ canvasElement, step }) => {
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/X9vXoCdJoJRlKONjfCDmBS/Image-Gallery?node-id=0-1&t=HceAH1ir388vdZrm-1',
		},
	},
} satisfies Story;
