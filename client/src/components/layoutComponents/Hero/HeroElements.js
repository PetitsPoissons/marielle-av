import styled from 'styled-components';
import ImgBg from '../../../assets/assiette2.jpeg';

export const HeroContainer = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.1)
    ),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
