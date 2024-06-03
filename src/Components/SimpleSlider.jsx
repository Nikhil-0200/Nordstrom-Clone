import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const SimpleSlider = ({ Score }) => {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={1000}
      responsive={responsive}
    >
      {Score.map((ele, index) => (
        <div
          key={index}
          className="w-[255px] h-[250px]  overflow-hidden gap-4 pr-6"
        >
          <img
            src={ele.img}
            alt="Score Images"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};
