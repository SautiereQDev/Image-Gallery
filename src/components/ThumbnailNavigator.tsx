import React from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

export type IThumbnailNavigatorProps = {
	images: { src: string, alt: string }[] | { src: string }[];
	defaultAlt?: string;
	direction?: 'vertical' | 'horizontal';
	nbImagesVisible?: number;
	autoScroll?: boolean;
	autoScrollDelay?: number;
	activeImageScr: string;
	gap?: number;
}

const StyledThumbnailNavigator = styled.div<{ direction: 'vertical' | 'horizontal', gap?: number }>`
    display: flex;
    overflow: hidden;
    flex-direction: ${props => props.direction === 'vertical' ? 'column' : 'row'};
    gap: ${props => props.gap ?? '0'}px;
`;

const ThumbnailNavigator = ({
															images,
															direction = 'horizontal',
															nbImagesVisible = 5,
															autoScroll = false,
															autoScrollDelay = 5000,
															activeImageScr,
															defaultAlt = 'Gallery image',
														}: Readonly<IThumbnailNavigatorProps>) => {

	// on retire l'image active des images à afficher
	const filteredImagesSources = images.filter((image) => image.src !== activeImageScr).slice(0, nbImagesVisible);

	return (
		<StyledThumbnailNavigator direction={direction} gap={10}>
			<ul>
				{filteredImagesSources.map((image, index) => (
					<li key={index}>
						<Thumbnail src={image.src} alt={'alt' in image ? image.alt as string : defaultAlt as string}
											 unit={'viewport_ratio'} />
					</li>
				))}
			</ul>
		</StyledThumbnailNavigator>
	);
};

export default ThumbnailNavigator;