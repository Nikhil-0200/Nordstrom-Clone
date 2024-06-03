import { footerBanner } from "../../assets/Images";
import { footerData } from "../../Constants";
import { Link } from "react-router-dom";
import { footerIcons } from "../../Constants";
import { downloadAppIcon } from "../../assets/Icons";
import { topArrowIcon } from "../../assets/Icons";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-12 padding">
        <div>
          <img src={footerBanner} alt="Footer Banner" />
        </div>

        <div className="font-nikhil-regular flex items-center justify-end gap-3">
          <p className="font-nikhil-bold text-center leading-none mr-5">
            Get Email <br />
            Updates:
          </p>
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

      <section className="font-nikhil-regular max-sm:flex-col flex justify-between bg-[#F0F3F5] padding max-sm:text-center">
        {footerData.map((ele, index) => (
          <div
            id="footerLeftDiv"
            key={`footerData-${index}`}
            className=" flex flex-col gap-6 w-[70%] max-sm:w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3">
              {ele.mainData.map((data, mainIndex) => (
                <div
                  id="footerLeftDiv1"
                  key={`mainData-${mainIndex}`}
                  className="w-full"
                >
                  <ul>
                    <li className="font-nikhil-bold pb-4 leading-none">
                      {data.title}
                    </li>
                    {data.links.map((linkData, linkIndex) => (
                      <ul key={`linkData-${linkIndex}`}>
                        <Link to={linkData.link}>
                          <li className="pb-4 leading-none">
                            {linkData.label}
                          </li>
                        </Link>
                      </ul>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              id="footerLeftDiv2"
              key={`aboveData-${index}`}
              className="flex gap-10 text-sm max-md:flex-col"
            >
              {ele.aboveData.map((data, aboveIndex) => (
                <ul key={`aboveDataItem-${aboveIndex}`}>
                  <li>{data.label}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}

        <div className="w-[25%] max-sm:w-[100%] max-sm:mt-10">
          <div className="flex justify-between">
            <div className="flex items-start gap-2">
              <img
                src={downloadAppIcon}
                width={25}
                height={25}
                alt="downloadIcon"
              />
              <p>Download Our Apps</p>
            </div>

            <div className="bg-[#FBFCFC] px-2 py-3 text-center">
              <img src={topArrowIcon} alt="topArrowIcon" />
              <p>Top</p>
            </div>
          </div>

          <div className="flex gap-5 max-md:px-2 px-5 max-sm:justify-center">
            {footerIcons.map((ele, iconIndex) => (
              <div id="footerRightIconDiv" key={`footerIcon-${iconIndex}`}>
                <Link to={ele.link}>
                  <img src={ele.img} alt="icons" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
