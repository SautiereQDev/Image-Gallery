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
	// Détermine si l'on travaille en pixels
	const isPx = unit === 'px';

	// 85% de la largeur totale pour l'image principale, 15% pour la barre de miniatures
	const mainPictureWidthPercentage = 100;
	const thumbnailWidthPercentage = 10;

	const computedMainPictureWidth = isPx ? (width * mainPictureWidthPercentage) / 100 : mainPictureWidthPercentage;
	const computedThumbnailWidth = isPx ? (width * thumbnailWidthPercentage) / 100 : thumbnailWidthPercentage;

	// Calculer la hauteur et la largeur des miniatures
	const thumbnailHeight = height / thumbnailNbElements;
	const thumbnailWidth = computedThumbnailWidth;

	return (
		<GalleryProvider images={images} activeImage={activeImage} thumbnailNbElements={thumbnailNbElements}>
			<Container gap={mainPictureThumbnailGap ?? 30} unit={unit} style={{ width, height }}>
				<Reset />
				<MainPicture
					width={computedMainPictureWidth}
					height={height}
					unit={unit}
					buttonSize={buttonSize}
					buttonColor={buttonColor}
				/>
				<ThumbnailNavigator
					direction="vertical"
					autoScroll={autoScroll}
					thumbnailPicturesSpacing={thumbnailPicturesSpacing}
					width={thumbnailWidth} // fixe à 15% de la largeur totale
					height={height} // hauteur identique à l'image principale
					imagesHeight={thumbnailHeight} // hauteur des miniatures calculée
					imagesWidth={thumbnailWidth} // largeur des miniatures calculée
					unit={unit}
				/>
			</Container>
		</GalleryProvider>
	);
};

export default ImageGallery;