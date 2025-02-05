import { MouseEventHandler } from 'react';
import { ApparenceProps } from './apparence';

export interface ThumbnailProps extends ApparenceProps {
	src: string;
	alt: string;
	onClick?: MouseEventHandler;
}