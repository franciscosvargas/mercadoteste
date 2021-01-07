import React, { useEffect, useRef, useState } from 'react';

import { 
  Container, 
  ImageContainer, 
  Image,
  ArrowLeft,
  ArrowRight,
  ImageSelector

} from './styles'

const ImageCarousel = ({images}) => {
  const [image, setImage] = useState(0)

  const showNextImage = () => {
    const tamanho = images.length - 1
    setImage(image < tamanho ? image + 1 : 0 )
  }

  const showPreviousImage = () => {
    setImage(image > 0 ? image - 1 : 0 )
  }

  return (
    <>
      {images && (
        <Container>

          <ImageContainer>
            <ArrowLeft onClick={showPreviousImage} />

            <Image src={images[image]} />

            <ArrowRight onClick={showNextImage} />
          </ImageContainer>

          <ImageSelector>
            {
              images.map((image, index) => (
                <img src={image} onClick={() => {setImage(index)}}/>
              ))
            }
          </ImageSelector>
          

        </Container>
      )}
    </>
  )
}

export default ImageCarousel