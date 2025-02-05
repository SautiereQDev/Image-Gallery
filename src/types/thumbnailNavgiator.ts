import { ApparenceProps } from './apparence';
import { ImageGalleryTypes } from './commons';

export interface ThumbnailNavigatorProps extends ImageGalleryTypes.OmitBasicApparence<ApparenceProps> {
	direction?: 'vertical' | 'horizontal',
	autoScroll?: boolean,
	autoScrollDelay?: number,
	imagesHeight?: number,
	imagesWidth?: number,
}