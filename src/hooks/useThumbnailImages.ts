import { CommonTypes } from '../types/commons';

export const getThumbnailImages = (storedImages: CommonTypes.Image[], startIndex: number, thumbnailSize: number) => {
	const endIndex = startIndex + thumbnailSize;
	// On décale l'index de but de 1 pour ne pas inclure l'image active
	if (endIndex + 1 <= storedImages.length) {
		return storedImages.slice(startIndex + 1, endIndex + 1);
	} else {
		return [
			...storedImages.slice(startIndex + 1, storedImages.length),
			...storedImages.slice(0, endIndex - storedImages.length + 1),
		];
	}
};