import styled from 'styled-components';
import { getUnitWidth } from '../components/Thumbnail';

export const Container = styled.div<{ width: number, height: number, unit: 'px' | 'viewport_ratio' | 'rem' | '%' }>`
    display: flex;
    position: relative;
    width: ${props => props.width}${props => getUnitWidth(props.unit)};
    height: ${props => props.height}${props => getUnitWidth(props.unit)};
`;

export const button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    width: 10%; /* Ajustez la largeur pour qu'elle soit proportionnelle à l'image */
    height: auto; /* Laissez la hauteur s'ajuster automatiquement */
`;

// TODO: ajouter un shadow sur les bouttons pour les faire ressortir

export const ButtonLeft = styled(button)`
    left: 0; /* Positionnez le bouton à gauche */
`;

export const ButtonRight = styled(button)`
    right: 0; /* Positionnez le bouton à droite */
`;