import React from 'react';
import MainPicture from './MainPicture';
import ThumbnailNavigator from './ThumbnailNavigator';
import { GalleryProvider } from '../contexts/ImageGalleryContext';
import Reset from '../styles/reset';
import { Container } from '../styles/imageGallery.styles';
import { GalleryProps } from '../types/ImageGallery';

export const ImageGallery: React.FC<GalleryProps> = ({
																											 images,
																											 activeImage,
																											 thumbnailNbElements = 5,
																											 autoScroll = false,
																											 thumbnailPicturesSpacing,
																											 mainPictureThumbnailGap = 10,
																											 unit = 'px', // Peut être 'px', '%', etc.
																											 buttonColor = '#FFF',
																											 buttonSize = 30,
																											 width = 1000,
																											 height = 800,
																										 }) => {


	// Si height et width sont fournis, width est prioritaire
	return (
		<GalleryProvider images={images} activeImage={activeImage} thumbnailNbElements={thumbnailNbElements}>
			<Container mainPictureThumbnailGap={mainPictureThumbnailGap ?? 30} unit={unit}
								 backgroundColor={'#AEAEAE'} height={height} width={width}>
				<Reset />
				<MainPicture
					unit={unit}
					buttonSize={buttonSize}
					buttonColor={buttonColor}
				/>
				<ThumbnailNavigator
					direction="vertical"
					autoScroll={autoScroll}
					thumbnailPicturesSpacing={thumbnailPicturesSpacing}
					unit={unit}
				/>
			</Container>
		</GalleryProvider>
	);
};

export default ImageGallery;