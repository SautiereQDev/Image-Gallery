import React, { useEffect, useRef, useState } from 'react';
import { useGallery } from '../hooks/useGallery';
import { ThumbnailNavigatorProps } from '../types/thumbnailNavgiator';
import { StyledElement, StyledList, ThumbnailImage } from '../styles/thumbnailNavigator.styles';
import { ImageGalleryTypes } from '../types/commons';

const ThumbnailNavigator: React.FC<Readonly<ThumbnailNavigatorProps>> = ({
                                                                           direction = 'vertical',
                                                                           autoScroll = false,
                                                                           autoScrollDelay = 5000,
                                                                           thumbnailPicturesSpacing = 10,
                                                                           width,
                                                                           height,
                                                                         }) => {
  const { images, activeImage, dispatch } = useGallery();
  const [visibleThumbnails, setVisibleThumbnails] = useState<ImageGalleryTypes.Image[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const thumbnailHeight = 100; // Hauteur fixe des miniatures
    const containerHeight = height ?? containerRef.current?.clientHeight ?? 0;
    const calculatedVisibleThumbnails = Math.floor(containerHeight / (thumbnailHeight + thumbnailPicturesSpacing));
    if (calculatedVisibleThumbnails === 0) throw new Error('The container is too small to display any thumbnail');

    if (activeImage + 1 + calculatedVisibleThumbnails < images.length) {
      setVisibleThumbnails(images.slice(activeImage + 1, calculatedVisibleThumbnails + activeImage + 1));
    } else {
      setVisibleThumbnails([...images.slice(activeImage + 1, images.length), ...images.slice(0, calculatedVisibleThumbnails + 1 - (images.length - activeImage))]);
    }

  }, [height, thumbnailPicturesSpacing, activeImage]);

  return (
    <StyledList ref={containerRef} direction={direction} gap={thumbnailPicturesSpacing} width={width} height={height}>
      {visibleThumbnails.map((image, index) => (
        <StyledElement key={index} isActive={activeImage === index}>
          <ThumbnailImage
            src={image.src}
            alt={image.alt}
            onClick={() => dispatch({
              type: 'SET_ACTIVE_IMAGE',
              payload: index,
            })}
          />
        </StyledElement>
      ))}
    </StyledList>
  );
};

export default ThumbnailNavigator;