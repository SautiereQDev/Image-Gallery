import React, { createContext, useMemo, useReducer } from 'react';
import { GalleryContextData, GalleryProviderProps } from '../types/galleryProvider';
import { galleryReducer, getThumbnailImages } from '../reducers/imageGalleryReducer';

const GalleryContext = createContext<GalleryContextData | undefined>(undefined);

const GalleryProvider: React.FC<GalleryProviderProps> = ({
																													 images = [],
																													 activeImage = 0,
																													 thumbnailNbElements = 5,
																													 children,
																												 }: GalleryProviderProps) => {
	const initialState = {
		activeImage,
		thumbnailImages: getThumbnailImages(images, activeImage, thumbnailNbElements),
		images: images,
		thumbnailNbElements,
	};

	const [state, dispatch] = useReducer(galleryReducer, initialState);

	const value = useMemo(() => ({ ...state, dispatch }), [state]);

	return (
		<GalleryContext.Provider value={value}>
			{children}
		</GalleryContext.Provider>
	);
};

export { GalleryProvider, GalleryContext };