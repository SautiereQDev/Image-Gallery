import React from 'react';
import Thumbnail from './Thumbnail';
import { useGallery } from '../hooks/useGallery';
import { ThumbnailNavigatorProps } from '../types/thumbnailNavgiator';
import { StyledElement, StyledList } from '../styles/thumbnailNavigator.styles';

const ThumbnailNavigator: React.FC<Readonly<ThumbnailNavigatorProps>> = ({
																																					 direction = 'horizontal',
																																					 autoScroll = false,
																																					 autoScrollDelay = 5000,
																																					 thumbnailPicturesSpacing = 10,
																																				 }) => {

	const { thumbnailImages, activeImage, dispatch } = useGallery();

	return (
		<StyledList direction={direction} gap={thumbnailPicturesSpacing}>
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