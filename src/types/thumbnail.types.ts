import { MouseEventHandler } from 'react';

export type ThumbnailProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	border?: number;
	borderRadius?: number;
	borderColor?: string;
	fit?: 'cover' | 'contain';
	borderStyle?: 'solid' | 'dashed' | 'dotted';
	unit?: 'px' | 'viewport_ratio' | 'rem' | '%';
	onClick?: MouseEventHandler;
}