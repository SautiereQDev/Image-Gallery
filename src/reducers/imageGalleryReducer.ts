import { GalleryAction, GalleryState } from '../types/ImageGallery';

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
			};
		case 'PREVIOUS_ACTIVE_IMAGE':
			const prevIndex = adjustIndex(state.activeImage - 1, state.images.length);
			return {
				...state,
				activeImage: prevIndex,
			};
		case 'SET_ACTIVE_IMAGE':
			const setIndex = adjustIndex(action.payload, state.images.length);
			return {
				...state,
				activeImage: setIndex,
			};
		default:
			return state;
	}
};