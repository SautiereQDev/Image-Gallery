import React from "react";

type ImageItemProps = {
	src: string;
	alt: string;
};

const ImageItem: React.FC<ImageItemProps> = ({ src, alt }) => (
	<img src={src} alt={alt} className="gallery-image" />
);

export default ImageItem;