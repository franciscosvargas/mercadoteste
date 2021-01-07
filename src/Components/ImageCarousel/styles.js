import styled from 'styled-components';

import ArrowSVG from '../../assets/up-arrow.png';

export const Container = styled.div`
	height: 100% !important;
	width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  max-width: 200px;

  @media (max-width: 950px) {
    max-width: 150px;
  }

  @media (max-width: 550px) {
    max-width: 150px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const ArrowLeft = styled.img.attrs({
  src: ArrowSVG
})`
  width: 64px;
  height: 64px;
  transform: rotate(-90deg);
  cursor: pointer;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  @media (max-width: 950px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 550px) {
    width: 40px;
    height: 40px;
  }
`

export const ArrowRight = styled(ArrowLeft).attrs({
  src: ArrowSVG
})`
  transform: rotate(90deg);
`

export const ImageSelector = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 50px;
  
  img {
    width: 120px;
    height: 120px;
    border: 2px solid #0466B9;
    border-radius: 10px;
    cursor: pointer;

    opacity: 0.8;

    :hover {
      opacity: 1;
    }

    @media (max-width: 950px) {
      width: 90px;
      height: 90px;
    }

    @media (max-width: 550px) {
      width: 70px;
      height: 70px;
    }
  }
`