import React from 'react';
import MainPicture from './MainPicture';
import ThumbnailNavigator from './ThumbnailNavigator';
import { GalleryProps } from '../interfaces/imageGallery';
import { GalleryProvider } from '../contexts/ImageGalleryContext';

export const ImageGallery: React.FC<GalleryProps> = ({ images, defaultImage = images[0] }: GalleryProps) => {

	return (
		<GalleryProvider initialImages={images} activeImage={defaultImage}>
			<MainPicture />
			<ThumbnailNavigator />
		</GalleryProvider>
	);
};

export default ImageGallery;