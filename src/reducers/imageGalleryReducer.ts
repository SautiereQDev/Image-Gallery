import { GalleryState } from '../interfaces/imageGallery';
import { GalleryAction } from '../types/ImageGallery.types';
import { CommonTypes } from '../types/commons';

export const getThumbnailImages = (storedImages: CommonTypes.Image[], startIndex: number, thumbnailSize: number) => {
	const endIndex = startIndex + thumbnailSize;
	// On décale l'index de but de 1 pour ne pas inclure l'image active
	if (endIndex + 1 <= storedImages.length) {
		return storedImages.slice(startIndex + 1, endIndex + 1);
	} else {
		return [
			...storedImages.slice(startIndex + 1, storedImages.length),
			...storedImages.slice(0, endIndex - storedImages.length + 1),
		];
	}
};

const adjustIndex = (index: number, length: number) => {
	return (index + 1 + length) % length;
};

export const galleryReducer = (
	state: GalleryState,
	action: GalleryAction,
): GalleryState => {

	switch (action.type) {
		case 'NEXT_ACTIVE_IMAGE':
			const nextIndex = adjustIndex(state.activeImage + 1, state.storedImages.length);
			return {
				...state,
				activeImage: nextIndex,
				thumbnailImages: getThumbnailImages(state.storedImages, nextIndex, state.thumbnailSize),
			};
		case 'PREVIOUS_ACTIVE_IMAGE':
			const prevIndex = adjustIndex(state.activeImage - 1, state.storedImages.length);
			return {
				...state,
				activeImage: prevIndex,
				thumbnailImages: getThumbnailImages(state.storedImages, prevIndex, state.thumbnailSize),
			};
		case 'SET_ACTIVE_IMAGE':
			const setIndex = adjustIndex(action.payload, state.storedImages.length);
			return {
				...state,
				activeImage: setIndex,
				thumbnailImages: getThumbnailImages(state.storedImages, setIndex, state.thumbnailSize),
			};
		default:
			return state;
	}
};