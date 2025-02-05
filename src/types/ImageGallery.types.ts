import { CommonTypes } from './commons';

export interface ImageGalleryState {
	images: CommonTypes.Image[];
	activeImage: CommonTypes.Image;
}

export type GalleryAction =
	| { type: 'NEXT_ACTIVE_IMAGE' }
	| { type: 'PREVIOUS_ACTIVE_IMAGE' }
	| { type: 'SET_ACTIVE_IMAGE', payload: number }