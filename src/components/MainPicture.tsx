import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Thumbnail } from './Thumbnail';
import { MainPictureProps } from '../types/mainPicture';
import { useGallery } from '../hooks/useGallery';
import { ButtonLeft, ButtonRight, Container } from '../styles/mainPicture.styles';

export const MainPicture: React.FC<Readonly<MainPictureProps>> = ({
																																		buttonColor = '#FFF',
																																		buttonSize = 30,
																																		height,
																																		width,
																																		unit,
																																		...args
																																	}) => {
	const { activeImage, images, dispatch } = useGallery();

	const setPreviousPicture = () => {
		dispatch({ type: 'PREVIOUS_ACTIVE_IMAGE' });
	};
	const setNextPicture = () => {
		dispatch({ type: 'NEXT_ACTIVE_IMAGE' });
	};

	return (
		<Container width={width ?? 100} height={height ?? 100} unit={unit ?? 'viewport_ratio'}>
			<ButtonLeft onClick={setPreviousPicture} aria-label={'Previous image'}>
				<FaChevronLeft size={buttonSize} color={buttonColor} />
			</ButtonLeft>
			<Thumbnail src={images[activeImage].src} alt={images[activeImage].alt} {...args} width={100}
								 height={100} unit={'%'} />
			<ButtonRight onClick={setNextPicture} aria-label={'Next image'}>
				<FaChevronRight size={buttonSize} color={buttonColor} />
			</ButtonRight>
		</Container>
	);
};

export default MainPicture;