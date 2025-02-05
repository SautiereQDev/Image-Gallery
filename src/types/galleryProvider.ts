import { Dispatch, ReactNode } from 'react';
import { GalleryAction, GalleryState } from './ImageGallery';
import { ImageGalleryTypes } from './commons';

export interface GalleryContextData extends GalleryState {
	dispatch: Dispatch<GalleryAction>;
}

export interface GalleryProviderProps {
	children: ReactNode;
	activeImage?: number;
	thumbnailImages?: ImageGalleryTypes.Image[];
	images: ImageGalleryTypes.Image[];
	thumbnailNbElements?: number;
}
