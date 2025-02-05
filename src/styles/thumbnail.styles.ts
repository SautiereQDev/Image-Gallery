import styled from 'styled-components';
import { ThumbnailProps } from '../types/thumbnail.types';
import { getUnitHeight, getUnitWidth } from '../components/Thumbnail';

export const StyledImage = styled.img <Omit<ThumbnailProps, 'onClick'>>`
    width: ${props => props.width ? `${props.width}${getUnitWidth(props.unit)}` : '10vw'};
    height: ${props => props.height ? `${props.height}${getUnitHeight(props.unit)}` : '10vh'};
    object-fit: ${props => props.fit || 'cover'};
    border: ${props => props.border || 1}px ${props => props.borderStyle || 'solid'} ${props => props.borderColor || 'black'};
    border-radius: ${props => props.borderRadius || 5}px;
    border: none;
    background-color: transparent;
    padding: 0;
`;