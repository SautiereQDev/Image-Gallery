import styled from 'styled-components';

export const StyledList = styled.ul<{ direction: 'vertical' | 'horizontal', gap?: number }>`
    display: flex;
    overflow: hidden;
    flex-direction: ${props => props.direction === 'vertical' ? 'column' : 'row'};
    gap: ${props => props.gap ?? '0'}px;
`;

export const StyledElement = styled.li`
    cursor: pointer;
`;