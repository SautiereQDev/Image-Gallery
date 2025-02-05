import React, { createContext, useMemo, useReducer } from 'react';
import { GalleryContextData, GalleryProviderProps } from '../interfaces/galleryProvider';
import { galleryReducer, getThumbnailImages } from '../reducers/imageGalleryReducer';

const GalleryContext = createContext<GalleryContextData | undefined>(undefined);

const GalleryProvider: React.FC<GalleryProviderProps> = ({
																													 storedImages = [],
																													 activeImage = 0,
																													 thumbnailSize = 5,
																													 children,
																												 }) => {
	const initialState = {
		activeImage,
		thumbnailImages: getThumbnailImages(storedImages, activeImage, thumbnailSize),
		storedImages,
		thumbnailSize,
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