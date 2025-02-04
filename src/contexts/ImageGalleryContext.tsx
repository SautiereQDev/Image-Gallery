import React, { createContext, useMemo, useReducer } from 'react';
import { GalleryContextData, GalleryProviderProps } from '../interfaces/galleryProvider';
import { galleryReducer } from '../reducers/imageGalleryReducer';

const GalleryContext = createContext<GalleryContextData | undefined>(undefined);

const GalleryProvider: React.FC<GalleryProviderProps> = ({
																													 initialImages,
																													 activeImage = initialImages[0],
																													 children,
																												 }) => {
	const [state, dispatch] = useReducer(galleryReducer, {
		activeImage,
		thumbnailImages: initialImages.slice(0, 5), // par exemple, les 5 premières images
		storedImages: initialImages,
	});

	// On peut utiliser useMemo pour stabiliser la valeur du contexte
	const value = useMemo(() => ({ ...state, dispatch }), [state]);

	return (
		<GalleryContext.Provider value={value}>
			{children}
		</GalleryContext.Provider>
	);
};

export { GalleryProvider, GalleryContext };
