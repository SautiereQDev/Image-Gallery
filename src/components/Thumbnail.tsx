import styled from 'styled-components';

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
	unit?: 'px' | 'viewport_ratio' | 'rem'
}

type StyledButtonProps = {
	border?: number;
	borderRadius?: number;
	borderColor?: string;
	borderStyle?: 'solid' | 'dashed' | 'dotted';
}

type StyledImageProps = {
	width?: number;
	height?: number;
	unit?: 'px' | 'viewport_ratio' | 'rem'
	fit?: 'cover' | 'contain';
}

export const getUnitWidth = (unit?: 'px' | 'viewport_ratio' | 'rem') => {
	switch (unit) {
		case 'viewport_ratio':
			return 'vw';
		case 'rem':
			return 'rem';
		default:
			return 'px';
	}
};

export const getUnitHeight = (unit?: 'px' | 'viewport_ratio' | 'rem') => {
	switch (unit) {
		case 'viewport_ratio':
			return 'vh';
		case 'rem':
			return 'rem';
		default:
			return 'px';
	}
};

const StyledButton = styled.button<StyledButtonProps>`

    border: ${props => props.border || 1}px ${props => props.borderStyle || 'solid'} ${props => props.borderColor || 'black'};
    border-radius: ${props => props.borderRadius || 5}px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
`;

const StyledImage = styled.img <StyledImageProps>`
    width: ${props => props.width ? `${props.width}${getUnitWidth(props.unit)}` : '10vw'};
    height: ${props => props.height ? `${props.height}${getUnitHeight(props.unit)}` : '10vh'};
    object-fit: ${props => props.fit || 'cover'};
`;

export function Thumbnail(args: IThumbnailProps) {
	return (
		// lors du click:  changer l'image principale
		<StyledButton {...args}>
			<StyledImage {...args} />
		</StyledButton>
	);
}

export default Thumbnail;