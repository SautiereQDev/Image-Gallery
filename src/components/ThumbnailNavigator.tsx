import React from 'react';
import Thumbnail from './Thumbnail';
import { useGallery } from '../hooks/useGallery';
import { IThumbnailNavigatorProps } from '../types/thumbnailNavgiator.types';
import { StyledElement, StyledList } from '../styles/thumbnailNavigator.styles';

const ThumbnailNavigator = ({
															direction = 'horizontal',
															nbImagesVisible = 5,
															autoScroll = false,
															autoScrollDelay = 5000,
															pictureSpacing = 10,
														}: Readonly<IThumbnailNavigatorProps>) => {

	const { thumbnailImages, activeImage, dispatch } = useGallery();

	return (
		<StyledList direction={direction} gap={pictureSpacing}>
			{thumbnailImages.map((image, index) => (
				<StyledElement key={index}>
					<Thumbnail src={thumbnailImages[index].src} alt={thumbnailImages[index].alt}
										 unit={'viewport_ratio'} onClick={() => dispatch({
						type: 'SET_ACTIVE_IMAGE',
						payload: activeImage + index,
					})} />
				</StyledElement>
			))}
		</StyledList>
	);
};

export default ThumbnailNavigator;