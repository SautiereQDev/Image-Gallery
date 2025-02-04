import { IThumbnailProps } from './thumbnail';

export interface IMainPictureProps extends Omit<IThumbnailProps, 'src' | 'alt'> {
	buttonSize?: number;
	buttonColor?: string;
}