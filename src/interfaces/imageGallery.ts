import { CommonTypes } from '../types/commons';

export interface GalleryProps {
	images: CommonTypes.Image[];
	defaultImage?: number;
}

export interface GalleryState {
	activeImage: number;
	thumbnailImages: CommonTypes.Image[];
	storedImages: CommonTypes.Image[];
	thumbnailSize: number;
}