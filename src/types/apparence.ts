export interface ApparenceProps {
	width?: number;
	height?: number;
	border?: number;
	borderRadius?: number;
	borderColor?: string;
	fit?: 'cover' | 'contain';
	borderStyle?: 'solid' | 'dashed' | 'dotted';
	unit?: 'px' | 'viewport_ratio' | 'rem' | '%';
	mainPictureThumbnailGap?: number,
	thumbnailPicturesSpacing?: number
	backgroundColor?: string;
}