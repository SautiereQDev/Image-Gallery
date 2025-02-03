import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getUnitWidth, IThumbnailProps, Thumbnail } from './Thumbnail';

export interface IMainPictureProps extends IThumbnailProps {
}

const Container = styled.div<{ width: number, height: number, unit: 'px' | 'viewport_ratio' | 'rem' }>`
    position: relative;
    display: flex;
    width: ${props => props.width}${props => getUnitWidth(props.unit)};
    height: ${props => props.height}${props => getUnitWidth(props.unit)};
`;

const ButtonLeft = styled.button`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
`;

const ButtonRight = styled.button`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
`;

export const MainPicture = (args: IMainPictureProps) => {
	return (
		<Container width={args.width ?? 100} height={args.height ?? 100} unit={args.unit ?? 'viewport_ratio'}>
			<ButtonLeft>
				<FaChevronLeft size={30} color="orange" />
			</ButtonLeft>
			<Thumbnail {...args} />
			<ButtonRight>
				<FaChevronRight size={30} color="orange" />
			</ButtonRight>
		</Container>
	);
};

export default MainPicture;