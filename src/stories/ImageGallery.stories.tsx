import {Meta, StoryObj} from "@storybook/react";
import {ImageGallery} from "../components/ImageGalery";
import {expect, within} from "@storybook/test";
import {ComponentProps} from "react";

const meta = {
	component: ImageGallery,
} satisfies Meta<ComponentProps<typeof ImageGallery>>;

export default meta;

type Story = StoryObj<typeof ImageGallery>;

export const Primary = {
	args: {
		images: [
			"https://via.placeholder.com/150",
			"https://via.placeholder.com/150",
		],
		altText: "Gallery image",
	},
	play: async ({canvasElement, step}) => {
		const canvas = within(canvasElement);
		const images = canvas.getAllByRole("img");
		await step("Image gallery is rendered", () => {
			expect(images).not.toBeNull();
			expect(images).toHaveLength(2);
		});
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/design/X9vXoCdJoJRlKONjfCDmBS/Image-Gallery?node-id=0-1&t=HceAH1ir388vdZrm-1"
		}
	}
} satisfies Story;
