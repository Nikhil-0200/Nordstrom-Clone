// import { sliderImage1 } from "../../assets/Images";
import { useState } from "react";
import { slider } from "../../Constants";
import { leftArrow, rightArrow } from "../../assets/Icons";

export const Slider = () => {
  const [count, setCount] = useState(1);

  function nextBtn() {
    if (count >= slider.length) {
      setCount(1);
    } else if (count < slider.length) {
      setCount(count + 1);
    }
  }

  function preBtn() {
    if (count <= 1) {
      setCount(slider.length);
    } else if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div
      className="overflow-hidden w-[100%] h-[79vh] whitespace-nowrap relative"
      id="sliderDiv"
    >
      <img
        id="Arrow"
        onClick={preBtn}
        className="z-10 absolute top-[40%] left-[2%] transform translate(-50%, -50%))"
        src={leftArrow}
        alt="Left Arrow Icon"
      />

      <img
        id="Arrow"
        onClick={nextBtn}
        className="z-10 absolute top-[40%] right-[2%] transform translate(-50%, -50%))"
        src={rightArrow}
        alt="Right Arrow Icon"
      />

<div>
    
</div>

      {slider.map(
        (ele) =>
          ele.id === count && (
            <div
              className=" relative w-[100%] h-[79vh] overflow-hidden border border-yellow flex flex-shrink-0"
              key={ele.label}
            >
              <img
                className=" absolute w-full h-full object-fit"
                src={ele.img}
                alt="sliderImages"
              />
            </div>
          )
      )}

    </div>
  );
};
