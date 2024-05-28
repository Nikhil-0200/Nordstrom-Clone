import { SmallHeadings } from "../../Components/SmallHeadings";
import { sandalBigImage } from "../../assets/Images";

export const Trending = () => {
  return (
    <div className="my-4">
      <SmallHeadings text={"Trending Now"} />

      <div className="h-[60vh] bg-slate-300 my-4"></div>

      <div className="my-20">
        <div className="font-nikhil-regular text-center">
          <p className="font-nikhil-bold text-2xl">Score!</p>
          <p className="text-sm">
            See something you love? Click the photo to shop our Instagram. Plus,
            tag us @nordstromrack to share your finds.
          </p>
        </div>

        <div className="h-[60vh] bg-slate-300 my-14"></div>
      </div>
    </div>
  );
};
