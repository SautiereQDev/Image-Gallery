export interface IThumbnailNavigatorProps {
	direction?: 'vertical' | 'horizontal',
	nbImagesVisible?: number,
	autoScroll?: boolean,
	autoScrollDelay?: number,
	gap?: number,
	onClick?: unknown,
	pictureSpacing?: number
}