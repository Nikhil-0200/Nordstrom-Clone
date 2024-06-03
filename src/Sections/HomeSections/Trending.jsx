import { SmallHeadings } from "../../Components/SmallHeadings";
import { sandalBigImage } from "../../assets/Images";
import { TrendingNow } from "../../Constants";
import { SliderReal } from "../../Components/SliderReal";
import { SimpleSlider } from "../../Components/SimpleSlider";
import { Score } from "../../Constants";

export const Trending = () => {
  return (
    <div className="my-4">
      <SmallHeadings text={"Trending Now"} />

      <div>
        <SliderReal sliderConstant={TrendingNow} />
      </div>

      <div className="my-20">
        <div className="font-nikhil-regular text-center">
          <p className="font-nikhil-bold text-2xl">Score!</p>
          <p className="text-sm">
            See something you love? Click the photo to shop our Instagram. Plus,
            tag us @nordstromrack to share your finds.
          </p>
        </div>

        <div className=" my-14">
          <SimpleSlider Score={Score}/>
        </div>
      </div>
    </div>
  );
};
