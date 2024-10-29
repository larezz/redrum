import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as CarouselLib } from "react-responsive-carousel";

import { Container, Image } from "./styled";

const Carousel = ({ images }) => {
  return (
    <Container>
      <CarouselLib
        swipeable={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
      >
        {images?.map((image, key) => (
          <Image key={key} src={image} />
        ))}
      </CarouselLib>
    </Container>
  );
};

export default Carousel;
