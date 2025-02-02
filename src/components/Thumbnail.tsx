import React from 'react'
import styled from "styled-components";

export type IThumbnailProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	border?: number;
	borderRadius?: number;
	borderColor?: string;
	fit?: 'cover' | 'contain';
	borderStyle?: 'solid' | 'dashed' | 'dotted';
	unit: 'px' | 'viewport_ratio' | 'rem'
}

const getUnitWidth = (unit?: 'px' | 'viewport_ratio' | 'rem') => {
	switch (unit) {
		case 'viewport_ratio':
			return 'vw'
		case 'rem':
			return 'rem'
		default:
			return 'px'
	}
}

const getUnitHeight = (unit?: 'px' | 'viewport_ratio' | 'rem') => {
	switch (unit) {
		case 'viewport_ratio':
			return 'vh'
		case 'rem':
			return 'rem'
		default:
			return 'px'
	}
}

const StyledImage = styled.img<IThumbnailProps>`
    width: ${props => props.width ? `${props.width}${getUnitWidth(props.unit)}` : (!props.height ? `12.5${getUnitWidth(props.unit)}` : 'auto')};
    height: ${props => !props.width ? (props.height ? `${props.height}${getUnitHeight(props.unit)}` : `15${getUnitHeight(props.unit)}`) : 'auto'};
    border: ${props => props.border || 1}px ${props => props.borderStyle || 'solid'} ${props => props.borderColor || 'black'};
    object-fit: ${props => props.fit || 'cover'};
    border-radius: ${props => props.borderRadius || 5}px;
`;

export function Thumbnail(args: IThumbnailProps) {
	return (
		<StyledImage {...args}/>
	)
}

export default Thumbnail