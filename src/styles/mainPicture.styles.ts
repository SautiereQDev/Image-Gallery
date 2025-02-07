import styled from 'styled-components';
import { ApparenceProps } from '../types/apparence';

export const Container = styled.div<ApparenceProps>`
    position: relative;
    object-fit: contain;
    max-width: 100%;
`;

export const button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    width: 10%;
    height: auto;
`;

// TODO: ajouter un shadow sur les bouttons pour les faire ressortir

export const ButtonLeft = styled(button)`
    left: 0;
`;

export const ButtonRight = styled(button)`
    right: 0;
`;