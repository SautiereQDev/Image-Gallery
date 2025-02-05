import { ThumbnailProps } from '../types/thumbnail';
import { StyledImage } from '../styles/thumbnail.styles';
import React from 'react';

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


export const Thumbnail: React.FC<Readonly<ThumbnailProps>> = (args) => {
	return <StyledImage {...args} />;
};

export default Thumbnail;