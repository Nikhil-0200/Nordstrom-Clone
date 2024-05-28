import { Link } from "react-router-dom";
import { SmallHeadings } from "../../Components/SmallHeadings";
import {
  move2BigImage,
  move2BigBelow1,
  move2BigBelow2,
  move2BigBelow3,
  move2BigBelow4,
  move2BigBanner,
  move2BottomBanner,
} from "../../assets/Images";

export const Move2 = () => {
  return (
    <div>
      <SmallHeadings text={"Save on Clearance Styles You Love"} />
      <div className="h-[90vh] bg-slate-300"></div>

      <div className="py-4">
        <img src={move2BigImage} alt="90 Degree Image" />
      </div>

      <div
        id="move2BigBelowDiv"
        className="flex justify-center overflow-hidden w-full font-nikhil-regular py-10"
      >
        <div className="relative font-nikhil-regular">
          <img src={move2BigBelow1} alt="move2BigBelow1" />
          <div className="absolute top-[30%] left-[10%] transform translate(-50%, -50%)">
            <p className="font-nikhil-bold text-3xl leading-none py-2">
              These, <br /> <span>Please</span>
            </p>
            <p className="w-[65%] leading-none">
              The pieces you can't stop thinking about—all in one place.
            </p>
          </div>
        </div>

        <div>
          <img src={move2BigBelow2} alt="move2BigBelow2" className="pb-2" />
          <Link to="/">Bright Shoes</Link>
        </div>

        <div>
          <img src={move2BigBelow3} alt="move2BigBelow3" className="pb-2" />
          <Link to="/">Tailored & Work Dresses</Link>
        </div>

        <div>
          <img src={move2BigBelow4} alt="move2BigBelow4" className="pb-2" />
          <Link to="/">Designer Sunglasses</Link>
        </div>
      </div>

      <div className="py-2">
        <img src={move2BigBanner} alt="move2BigBanner" />
      </div>

      <div id="move2Slider">
      </div>

      


    </div>
  );
};
