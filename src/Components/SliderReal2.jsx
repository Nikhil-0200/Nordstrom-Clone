import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const SliderReal2 = ({ SliderData2 }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
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
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        className=" h-[65vh]"
      >
        {SliderData2.map((ele, index) => (
          <div
            key={index}
            className="border-3 border-red-700 px-3 font-nikhil-regular"
          >
            <div>
              <img src={ele.img} alt="Slider2 Images" />
            </div>

            <div className="my-3">
              <p className="font-nikhil-bold text-md leading-none">
                {ele.title}
              </p>
              <p className="text-md">{ele.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
