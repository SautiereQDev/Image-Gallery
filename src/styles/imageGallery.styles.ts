import styled from 'styled-components';
import { ApparenceProps } from '../types/apparence';

export const Container = styled.div<ApparenceProps & { mainPictureWidth: number }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.mainPictureThumbnailGap}${(props) => props.unit};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height}${(props) => props.unit};
  width: ${(props) =>
    props.mainPictureWidth
      ? Number(props.mainPictureWidth) + Number(props.mainPictureThumbnailGap) + Number(104) + (props.unit || '')
      : 'auto'};
  padding: 1% 1%;
`;
