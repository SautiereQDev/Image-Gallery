import styled from 'styled-components';

export const Container = styled.div<{ gap?: number, unit?: string }>`
    display: flex;
    flex-direction: row;
    gap: ${props => props.gap}${props => props.unit};
`;