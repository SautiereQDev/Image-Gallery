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
																											 thumbnailImages,
																											 thumbnailNbElements = 5,
																											 autoScroll = false,
																											 thumbnailPicturesSpacing,
																											 thumbnailPicturesSize = 150,
																											 mainPictureSize = 300,
																											 unit = 'px',
																											 buttonColor = '#FFF',
																											 buttonSize = 30,
																										 }) => {

	return (
		<GalleryProvider images={images} activeImage={activeImage} thumbnailImages={thumbnailImages}
										 thumbnailNbElements={thumbnailNbElements}>
			<Container>
				<Reset />
				<MainPicture width={mainPictureSize} height={mainPictureSize} unit={unit} buttonSize={buttonSize}
										 buttonColor={buttonColor} />
				<ThumbnailNavigator direction={'vertical'} autoScroll={autoScroll}
														thumbnailPicturesSpacing={thumbnailPicturesSpacing}
														imagesHeight={thumbnailPicturesSize}
														imagesWidth={thumbnailPicturesSize} />

			</Container>
		</GalleryProvider>
	);
};

export default ImageGallery;