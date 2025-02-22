import { Meta, StoryObj } from '@storybook/react';
import  React, { ComponentProps } from 'react';
import { expect, within } from '@storybook/test';
import ThumbnailNavigator from '../components/ThumbnailNavigator';
import { images } from '../mocks/images';
import { GalleryProvider } from '../contexts/ImageGalleryContext';
import Reset from '../styles/reset';

const meta = {
  component: ThumbnailNavigator,
  title: 'Thumbnail navigator',
} satisfies Meta<ComponentProps<typeof ThumbnailNavigator>>;

export default meta;

type Story = StoryObj<typeof ThumbnailNavigator>;

export const Default: Story = {
  render: (args) => <GalleryProvider images={images}><Reset /><ThumbnailNavigator {...args} /></GalleryProvider>,
  args: {
    direction: 'vertical',
    height: 1000,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const images = canvas.getAllByRole('img') as HTMLImageElement[];

    await step('Thumbnail navigator is rendered', () => {
      expect(images).toHaveLength(5);
    });

    await step('The active image is not rendered', () => {
      const activeImageElement = canvas.queryByAltText('Image 1');
      expect(activeImageElement).not.toBeInTheDocument();
    });
  },
};