import { CommonTypes } from '../types/commons';

export interface GalleryProps {
	images: CommonTypes.Image[];
	defaultImage?: CommonTypes.Image;
}

export interface GalleryState {
	activeImage: CommonTypes.Image;
	thumbnailImages: CommonTypes.Image[];
	storedImages: CommonTypes.Image[];
}