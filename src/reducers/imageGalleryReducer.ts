import { GalleryAction, GalleryState } from '../types/ImageGallery';
import { ImageGalleryTypes } from '../types/commons';

export const getThumbnailImages = (storedImages: ImageGalleryTypes.Image[], startIndex: number, thumbnailSize: number) => {
	const endIndex = startIndex + thumbnailSize;
	if (endIndex <= storedImages.length) {
		return storedImages.slice(startIndex, endIndex);
	} else {
		return [
			...storedImages.slice(startIndex, storedImages.length),
			...storedImages.slice(0, endIndex - storedImages.length),
		];
	}
};

const adjustIndex = (index: number, length: number) => {
	return (index + length) % length;
};

export const galleryReducer = (
	state: GalleryState,
	action: GalleryAction,
): GalleryState => {

	switch (action.type) {
		case 'NEXT_ACTIVE_IMAGE':
			const nextIndex = adjustIndex(state.activeImage + 1, state.images.length);
			return {
				...state,
				activeImage: nextIndex,
				thumbnailImages: getThumbnailImages(state.images, nextIndex, state.thumbnailNbElements),
			};
		case 'PREVIOUS_ACTIVE_IMAGE':
			const prevIndex = adjustIndex(state.activeImage - 1, state.images.length);
			return {
				...state,
				activeImage: prevIndex,
				thumbnailImages: getThumbnailImages(state.images, prevIndex, state.thumbnailNbElements),
			};
		case 'SET_ACTIVE_IMAGE':
			const setIndex = adjustIndex(action.payload, state.images.length);
			return {
				...state,
				activeImage: setIndex,
				thumbnailImages: getThumbnailImages(state.images, setIndex, state.thumbnailNbElements),
			};
		default:
			return state;
	}
};