import React from 'react';
import { GalleryAction } from '../types/ImageGallery.types';
import { GalleryState } from './imageGallery';
import { CommonTypes } from '../types/commons';

export interface GalleryContextData extends GalleryState {
	dispatch: React.Dispatch<GalleryAction>;
}

export interface GalleryProviderProps {
	initialImages: CommonTypes.Image[];
	children: React.ReactNode;
	activeImage?: CommonTypes.Image;
}
