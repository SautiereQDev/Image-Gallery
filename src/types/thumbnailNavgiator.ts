import { ApparenceProps } from './apparence';

export interface ThumbnailNavigatorProps extends ApparenceProps {
	direction?: 'vertical' | 'horizontal',
	autoScroll?: boolean,
	autoScrollDelay?: number,
	imagesHeight?: number,
	imagesWidth?: number,
}