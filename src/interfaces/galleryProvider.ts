import { Dispatch, ReactNode } from 'react';
import { GalleryAction } from '../types/ImageGallery.types';
import { GalleryState } from './imageGallery';

export interface GalleryContextData extends GalleryState {
	dispatch: Dispatch<GalleryAction>;
}

export interface GalleryProviderProps extends Partial<GalleryState> {
	children: ReactNode;
}
