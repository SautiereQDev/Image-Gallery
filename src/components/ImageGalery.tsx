import React from 'react';

type ImageGalleryProps = {
	imgSources: string[];
	altText?: string;
};

// utiliser un context pour gérer les images principales et les vignettes

export const ImageGallery: React.FC<ImageGalleryProps> = ({ imgSources, altText = 'Gallery image' }) => {
	return (
		<></>
	);
};

export default ImageGallery;