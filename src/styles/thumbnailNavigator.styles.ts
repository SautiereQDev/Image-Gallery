import styled from 'styled-components';

export const StyledList = styled.ul<{
  direction: 'vertical' | 'horizontal';
  gap?: number;
  width?: number;
  height?: number;
}>`
  display: flex;
  flex-direction: ${(props) => (props.direction === 'vertical' ? 'column' : 'row')};
  gap: ${(props) => props.gap ?? '0'}px;
  align-items: center;
  overflow-y: auto; // Ajout de la barre de défilement verticale
`;

export const StyledElement = styled.li<{ isActive: boolean }>`
  cursor: pointer;
`;

export const ThumbnailImage = styled.img<{ borderRadius: number }>`
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: ${(props) => props.borderRadius | 10}px solid transparent;
`;
