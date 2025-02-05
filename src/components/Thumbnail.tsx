import { ThumbnailProps } from '../types/thumbnail.types';
import { StyledImage } from '../styles/thumbnail.styles';

export const getUnitWidth = (unit?: 'px' | 'viewport_ratio' | 'rem' | '%') => {
	switch (unit) {
		case 'viewport_ratio':
			return 'vw';
		case 'rem':
			return 'rem';
		case '%':
			return '%';
		default:
			return 'px';
	}
};

export const getUnitHeight = (unit?: 'px' | 'viewport_ratio' | 'rem' | '%') => {
	switch (unit) {
		case 'viewport_ratio':
			return 'vh';
		case 'rem':
			return 'rem';
		case '%':
			return '%';
		default:
			return 'px';
	}
};


export function Thumbnail(args: ThumbnailProps) {
	return <StyledImage {...args} />;
}

export default Thumbnail;