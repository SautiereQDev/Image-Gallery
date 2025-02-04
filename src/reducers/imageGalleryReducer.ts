import { GalleryState } from '../interfaces/imageGallery';
import { GalleryAction } from '../types/ImageGallery.types';

export const galleryReducer = (
	state: GalleryState,
	action: GalleryAction,
): GalleryState => {
	switch (action.type) {
		case 'SET_ACTIVE_IMAGE':
			// Met à jour l'image active
			return { ...state, activeImage: action.payload };

		case 'SET_THUMBNAIL_IMAGES':
			// Met à jour la liste des images affichées dans la thumbnail gallery
			return { ...state, thumbnailImages: action.payload };

		case 'ADD_IMAGE':
			// Ajoute une image à la collection stockée
			return {
				...state,
				storedImages: [...state.storedImages, action.payload],
			};

		case 'REMOVE_IMAGE':
			// Supprime une image de la collection stockée
			// Vous pourrez aussi recalculer asideImages et activeImage si besoin
			return {
				...state,
				storedImages: state.storedImages.filter(img => img !== action.payload),
			};

		case 'SET_STORED_IMAGES':
			// Définit l'ensemble des images stockées, et par exemple,
			// met l'image active à la première image si elle n'est pas encore définie
			return {
				...state,
				storedImages: action.payload,
				activeImage: action.payload[0] ?? '',
			};

		default:
			return state;
	}
};
