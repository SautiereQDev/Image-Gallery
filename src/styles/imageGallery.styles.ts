import styled from 'styled-components';
import { ApparenceProps } from '../types/apparence';

export const Container = styled.div<ApparenceProps>`
    display: flex;
    flex-direction: row;
    gap: ${props => props.mainPictureThumbnailGap}${props => props.unit};
    background-color: ${props => props.backgroundColor};
    //	Si height et width sont fournis, width est prioritaire
    width: ${props => props.width}${props => props.unit};
    height: ${props => props.width ? 'auto' : props.height}${props => props.unit};
`;