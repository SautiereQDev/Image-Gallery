import React from "react";

type ImageGalleryProps = {
	images: string[];
	altText?: string;
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, altText = "Gallery image" }) => {
	return (
		<div className="image-gallery">
			{images.map((src, index) => (
				<img key={index} src={src} alt={`${altText} ${index}`} className="gallery-image" />
			))}
		</div>
	);
};

export default ImageGallery;