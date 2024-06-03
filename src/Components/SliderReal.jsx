import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderData } from "../Constants";
import { Link } from "react-router-dom";

export const SliderReal = ({ sliderConstant }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
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
        className=" h-[80vh]"
      >
        {sliderConstant.map((ele, index) => (
          <div
            key={index}
            className=" p-5 w-[280px] font-nikhil-regular"
          >
            <div className=" h-[350px] object-cover relative">
              <div className=" bg-[#191a1b] bg-opacity-[0.03] absolute h-[350px] w-[100%] z-[1]"></div>
              <img src={ele.img} alt="img" className="w-[100%] h-[100%] z-0" />
            </div>

            <div className="pt-4">
              <Link to={ele.link}>
              <p className="font-nikhil-regular text-lg">{ele.title}</p>
              </Link>
              <div>
              {ele.Currentprice &&  <p className="font-nikhil-bold">             
                  ${ele.Currentprice}{"  "}
                  <span className="font-nikhil-regular px-2">
                    ({ele.off} off)
                  </span>
                </p>}
               
              </div>
              {ele.RealPrice && <p className="font-nikhil-regular line-through">
                ${ele.RealPrice}
              </p>}
              
            </div>
          </div>
        ))}
      </Carousel>

    </div>
  );
};
