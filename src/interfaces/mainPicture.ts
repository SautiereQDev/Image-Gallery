import { ThumbnailProps } from '../types/thumbnail.types';

export interface IMainPictureProps extends Omit<ThumbnailProps, 'src' | 'alt'> {
	buttonSize?: number;
	buttonColor?: string;
}