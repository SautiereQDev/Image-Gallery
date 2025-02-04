import { CommonTypes } from './commons';

export interface ImageGalleryState {
	images: CommonTypes.Image[];
	selectedImage: CommonTypes.Image;
}

export type GalleryAction =
	| { type: 'SET_ACTIVE_IMAGE'; payload: CommonTypes.Image }
	| { type: 'SET_THUMBNAIL_IMAGES'; payload: CommonTypes.Image[] }
	| { type: 'ADD_IMAGE'; payload: CommonTypes.Image }
	| { type: 'REMOVE_IMAGE'; payload: CommonTypes.Image }
	| { type: 'SET_STORED_IMAGES'; payload: CommonTypes.Image[] };