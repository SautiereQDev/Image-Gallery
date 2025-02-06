// src/styles/thumbnailNavigator.styles.ts
import styled from 'styled-components';

export const StyledList = styled.ul<{
	direction: 'vertical' | 'horizontal',
	gap?: number,
	width?: number,
	height?: number
}>`
    display: flex;
    flex-direction: ${props => props.direction === 'vertical' ? 'column' : 'row'};
    gap: ${props => props.gap ?? '0'}px;
    width: ${props => props.width ?? '100'}%;
    height: ${props => props.height ?? '100'}%;
    align-items: center; // Alignement des miniatures
`;

export const StyledElement = styled.li<{ isActive: boolean }>`
    cursor: pointer;
    border: ${props => props.isActive ? '2px solid blue' : 'none'};
    transition: border 0.3s ease; // Transition pour une animation fluide
`;

export const ThumbnailImage = styled.img`
    object-fit: cover;
    width: 100px; // Largeur fixe
    height: 100px; // Hauteur fixe
    border: 2px solid transparent; // Bordure dynamique
`;