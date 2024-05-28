import { footerBanner } from "../../assets/Images";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-12">
        <div>
          <img src={footerBanner} alt="Footer Banner" />
        </div>

        <div className="font-nikhil-regular flex items-center justify-end gap-3">
          <p className="font-nikhil-bold text-center leading-none mr-5">Get Email <br />Updates:</p>
          <div className="border-[1px] border-black p-5 py-2.5 w-[230px] h-10 text-sm">
            <input
              className=" focus:border-none focus:ring-0 w-[95%]"
              id="searchBar"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <button className="h-10 w-[230px] text-sm border p-5 py-2.5 text-white bg-blue-600 hover:bg-blue-800">
            Sign up
          </button>
        </div>
      </div>

      
    </div>
  );
};
