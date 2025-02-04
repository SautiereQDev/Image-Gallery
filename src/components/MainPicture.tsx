import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getUnitWidth, Thumbnail } from './Thumbnail';
import { IMainPictureProps } from '../interfaces/mainPicture';
import { useGallery } from '../hooks/useGallery';

const Container = styled.div<{ width: number, height: number, unit: 'px' | 'viewport_ratio' | 'rem' }>`
    position: relative;
    display: flex;
    width: ${props => props.width}${props => getUnitWidth(props.unit)};
    height: ${props => props.height}${props => getUnitWidth(props.unit)};
`;

const button = styled.button`
    position: absolute;
    top: 50%;
    background: transparent;
    border: none;
    cursor: pointer;
`;

const ButtonLeft = styled(button)`
    left: 10px;
`;

const ButtonRight = styled(button)`
    right: 10px;
`;


export const MainPicture = ({ buttonColor = '#FFF', buttonSize = 30, ...args }: IMainPictureProps) => {
	const { activeImage } = useGallery();
	return (
		<Container width={args.width ?? 100} height={args.height ?? 100} unit={args.unit ?? 'viewport_ratio'}>
			<ButtonLeft>
				<FaChevronLeft size={buttonSize} color={buttonColor} />
			</ButtonLeft>
			<Thumbnail src={activeImage.src} alt={activeImage.src} {...args} />
			<ButtonRight>
				<FaChevronRight size={buttonSize} color={buttonColor} />
			</ButtonRight>
		</Container>
	);
};

export default MainPicture;