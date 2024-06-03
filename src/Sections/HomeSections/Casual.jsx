import { SmallHeadings } from "../../Components/SmallHeadings";
import {
  sandalBigImage,
} from "../../assets/Images";

export const Casual = () => {
  return (
    <div>
      <SmallHeadings text={"Casual Summer Styles from $25"} />

      <div className="h-[60vh] bg-slate-300 my-14">
      </div>

      <div className="py-10">
        <img src={sandalBigImage} alt="Sandal Image" />
      </div>
    </div>
  );
};
