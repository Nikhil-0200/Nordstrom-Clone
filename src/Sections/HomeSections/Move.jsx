import { moveFirstImage } from "../../assets/Images";
import { Link } from "react-router-dom";

export const Move = () => {
  return (
    <div className="text-center font-nikhil-regular">
      <div>
        <h1 className="text-3xl font-nikhil-bold mb-2">
          More to Rack, easier and faster.
        </h1>
        <button className="text-sm border border-blue-500 px-6 py-2.5 hover:bg-[#F0F3F5]">
          Sign In or Create an Account
        </button>
      </div>

      <div className="py-14 relative max-md:hidden">
        <img src={moveFirstImage} alt="ImageBanner" />

        <div className="absolute top-[35%] left-[60%] transform translate(-50%, -50%) text-start">
          <p className="font-nikhil-bold text-[22px] max-lg:text-sm">Shop & get rewarded!</p>
          <p className="text-[15px] max-lg:text-sm">
            <span className="font-nikhil-bold">Ends May 27.</span> Online and in
            stores at Nordstrom Rack.
          </p>
          <p className="text-[15px] flex gap-3 max-lg:text-sm">
            {" "}
            <span className="font-nikhil-bold">New Arrivals: </span>
            <Link>Women</Link> <Link>Men</Link> <Link>All</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
    