import React from 'react';
import MainPicture from './MainPicture';
import ThumbnailNavigator from './ThumbnailNavigator';
import { GalleryProps } from '../interfaces/imageGallery';
import { GalleryProvider } from '../contexts/ImageGalleryContext';
import Reset from '../styles/reset';
import { Container } from '../styles/imageGallery.styles';

export const ImageGallery: React.FC<GalleryProps> = ({ images, defaultImage }: GalleryProps) => {

	return (
		<GalleryProvider storedImages={images} activeImage={defaultImage}>
			<Container>
				<Reset />
				<MainPicture width={20} height={20} unit={'viewport_ratio'} />
				<ThumbnailNavigator direction={'vertical'} />
			</Container>
		</GalleryProvider>
	);
};

export default ImageGallery;