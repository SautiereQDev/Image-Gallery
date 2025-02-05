import React from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {Thumbnail} from './Thumbnail';
import {IMainPictureProps} from '../interfaces/mainPicture';
import {useGallery} from '../hooks/useGallery';
import {ButtonLeft, ButtonRight, Container} from '../styles/mainPicture.styles';

export const MainPicture = ({
															buttonColor = '#FFF',
															buttonSize = 30,
															height,
															width,
															unit,
															...args
														}: IMainPictureProps) => {
	const {activeImage, storedImages, dispatch} = useGallery();

	const setPreviusPicture = () => {
		dispatch({type: 'PREVIOUS_ACTIVE_IMAGE'});
	};
	const setNextPicture = () => {
		dispatch({type: 'NEXT_ACTIVE_IMAGE'});
	};

	return (
		<Container width={width ?? 100} height={height ?? 100} unit={unit ?? 'viewport_ratio'}>
			<ButtonLeft onClick={setPreviusPicture}>
				<FaChevronLeft size={buttonSize} color={buttonColor}/>
			</ButtonLeft>
			<Thumbnail src={storedImages[activeImage].src} alt={storedImages[activeImage].alt} {...args} width={100}
								 height={100} unit={'%'}/>
			<ButtonRight onClick={setNextPicture}>
				<FaChevronRight size={buttonSize} color={buttonColor}/>
			</ButtonRight>
		</Container>
	);
};

export default MainPicture;