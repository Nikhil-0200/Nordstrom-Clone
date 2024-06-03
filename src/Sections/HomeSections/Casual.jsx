import { SmallHeadings } from "../../Components/SmallHeadings";
import {
  sandalBigImage,
} from "../../assets/Images";
import { SliderReal } from "../../Components/SliderReal";
import { SliderData3 } from "../../Constants";

export const Casual = () => {
  return (
    <div>
      <SmallHeadings text={"Casual Summer Styles from $25"} />

      <div>
      <SliderReal sliderConstant = {SliderData3}/>
      </div>

      <div className="py-10">
        <img src={sandalBigImage} alt="Sandal Image" />
      </div>
    </div>
  );
};
