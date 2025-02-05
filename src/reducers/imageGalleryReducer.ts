import { GalleryState } from '../interfaces/imageGallery';
import { GalleryAction } from '../types/ImageGallery.types';
import { getThumbnailImages } from '../hooks/useThumbnailImages';

export const galleryReducer = (
	state: GalleryState,
	action: GalleryAction,
): GalleryState => {

	switch (action.type) {
		case 'NEXT_ACTIVE_IMAGE':
			const nextIndex = (state.activeImage + 1) % state.storedImages.length;
			return {
				...state,
				activeImage: nextIndex,
				thumbnailImages: getThumbnailImages(state.storedImages, nextIndex, state.thumbnailSize),
			};
		case 'PREVIOUS_ACTIVE_IMAGE':
			const prevIndex = (state.activeImage - 1 + state.storedImages.length) % state.storedImages.length;
			return {
				...state,
				activeImage: prevIndex,
				thumbnailImages: getThumbnailImages(state.storedImages, prevIndex, state.thumbnailSize),
			};
		case 'SET_ACTIVE_IMAGE':
			return {
				...state,
				activeImage: action.payload,
				thumbnailImages: getThumbnailImages(state.storedImages, action.payload, state.thumbnailSize),
			};
		default:
			return state;
	}
};