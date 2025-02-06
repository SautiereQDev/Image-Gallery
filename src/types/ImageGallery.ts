import { MainPictureProps } from './mainPicture';
import { ThumbnailNavigatorProps } from './thumbnailNavgiator';
import { ImageGalleryTypes } from './commons';
import { GalleryProviderProps } from './galleryProvider';

export type GalleryAction =
	| { type: 'NEXT_ACTIVE_IMAGE' }
	| { type: 'PREVIOUS_ACTIVE_IMAGE' }
	| { type: 'SET_ACTIVE_IMAGE', payload: number }


export interface GalleryProps extends MainPictureProps, ThumbnailNavigatorProps, GalleryProviderProps {
	mainPictureSize: number;
	mainPictureThumbnailGap: number;
	thumbnailPicturesSize: number;
}

export interface GalleryState {
	activeImage: number;
	images: ImageGalleryTypes.Image[];
}