import styled from 'styled-components';

export const StyledList = styled.ul<{
	direction: 'vertical' | 'horizontal',
	gap?: number,
	width?: number,
	height?: number
}>`
    display: flex;
    overflow: hidden;
    flex-direction: ${props => props.direction === 'vertical' ? 'column' : 'row'};
    gap: ${props => props.gap ?? '0'}px;
    width: ${props => props.width ?? '100'}%;
    height: ${props => props.height ?? '100'}%;
`;

export const StyledElement = styled.li`
    cursor: pointer;
`;