import { Dispatch, ReactNode } from 'react';
import { GalleryAction, GalleryState } from './ImageGallery';
import { Image } from './commons';

export interface GalleryContextData extends GalleryState {
	dispatch: Dispatch<GalleryAction>;
}

export interface GalleryProviderProps {
	children: ReactNode;
	activeImage?: number;
	images: Image[];
	thumbnailNbElements?: number;
}
