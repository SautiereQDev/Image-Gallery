import React, { useEffect, useRef, useState } from 'react';
import MainPicture from './MainPicture';
import ThumbnailNavigator from './ThumbnailNavigator';
import { GalleryProvider } from '../contexts/ImageGalleryContext';
import Reset from '../styles/reset';
import { Container } from '../styles/imageGallery.styles';
import { GalleryProps } from '../types/ImageGallery';

export const ImageGallery: React.FC<GalleryProps> = ({
  images,
  activeImage,
  autoScroll = false,
  thumbnailPicturesSpacing,
  mainPictureThumbnailGap = 10,
  unit = 'px', // Peut être 'px', '%', etc.
  buttonColor = '#FFF',
  buttonSize = 30,
  width,
  height = 800,
  direction = 'vertical',
}) => {
  const mainPictureRef = useRef<HTMLDivElement>(null);
  const [mainPictureWidth, setMainPictureWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (mainPictureRef.current) {
        setMainPictureWidth(mainPictureRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (mainPictureRef.current) {
      resizeObserver.observe(mainPictureRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeImage, images, width, height, direction, mainPictureThumbnailGap, unit]);

  // Si height et width sont fournis, width est prioritaire
  return (
    <GalleryProvider images={images} activeImage={activeImage}>
      <Container
        mainPictureThumbnailGap={mainPictureThumbnailGap ?? 30}
        unit={unit}
        backgroundColor={'#AEAEAE'}
        height={height}
        mainPictureWidth={mainPictureWidth}
      >
        <Reset />
        <MainPicture unit={unit} buttonSize={buttonSize} buttonColor={buttonColor} ref={mainPictureRef} />
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
