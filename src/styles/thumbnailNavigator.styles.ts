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
    align-items: center;
    overflow-y: auto; // Ajout de la barre de défilement verticale
`;

export const StyledElement = styled.li<{ isActive: boolean }>`
    cursor: pointer;
    border: ${props => props.isActive ? '2px solid blue' : 'none'};
    transition: border 0.3s ease;
`;

export const ThumbnailImage = styled.img`
    object-fit: cover;
    width: 100px;
    height: 100px;
    border: 2px solid transparent;
`;