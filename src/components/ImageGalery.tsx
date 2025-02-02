import React from 'react';

type ImageGalleryProps = {
	imgSources: string[];
	altText?: string;
};

// utiliser un provider pour gérer globalement le changement des images principales et sur les vignettes

export const ImageGallery: React.FC<ImageGalleryProps> = ({ imgSources, altText = 'Gallery image' }) => {
	return (
		<div className="image-gallery">
			{imgSources.map((src, index) => (
				<img key={index} src={src} alt={`${altText} ${index}`} className="gallery-image" />
			))}
		</div>
	);
};

export default ImageGallery;