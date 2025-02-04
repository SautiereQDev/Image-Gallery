import React from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';
import { useGallery } from '../hooks/useGallery';
import { IThumbnailNavigatorProps } from '../interfaces/thumbnailNavgiator';


const StyledThumbnailNavigator = styled.div<{ direction: 'vertical' | 'horizontal', gap?: number }>`
    display: flex;
    overflow: hidden;
    flex-direction: ${props => props.direction === 'vertical' ? 'column' : 'row'};
    gap: ${props => props.gap ?? '0'}px;
`;

const ThumbnailNavigator = ({
															direction = 'horizontal',
															nbImagesVisible = 5,
															autoScroll = false,
															autoScrollDelay = 5000,
														}: Readonly<IThumbnailNavigatorProps>) => {

	const { thumbnailImages, activeImage } = useGallery();

	// on retire l'image active des images à afficher
	const filteredImagesSources = thumbnailImages.filter((image) => image.src !== activeImage.src).slice(0, nbImagesVisible);

	return (
		<StyledThumbnailNavigator direction={direction} gap={10}>
			<ul>
				{filteredImagesSources.map((image, index) => (
					<li key={index}>
						<Thumbnail src={thumbnailImages[index].src} alt={thumbnailImages[index].src}
											 unit={'viewport_ratio'} />
					</li>
				))}
			</ul>
		</StyledThumbnailNavigator>
	);
};

export default ThumbnailNavigator;