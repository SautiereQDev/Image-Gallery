import Thumbnail from "../components/Thumbnail";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {within, expect} from "@storybook/test";
import images from "../mocks/images";

const meta = {
	component: Thumbnail,
} satisfies Meta<ComponentProps<typeof Thumbnail>>;

export default meta;

type Story = StoryObj<typeof Thumbnail>;

export const Primary: Story = {
	args: {
		src: images[0],
		alt: "Thumbnail image",
		width: 300,
		height: 100,
		unit: "px"
	},
	play: async ({canvasElement, step}) => {
		const canvas = within(canvasElement);
		const image = canvas.getByRole("img");
		await step("Thumbnail is rendered", () => {
			expect(image).not.toBeNull();
		});
		await step("Verification des dimensions", () => {
			expect(image).toHaveStyle({
				width: "300px",
			});
		});
	}
}