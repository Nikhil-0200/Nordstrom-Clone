import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";
import { PopoverDiv } from "./PopoverDiv";
import {
  bagIcon,
  normsLogo,
  purchaseIcon,
  searchIcon,
  storeIcon,
  menuIcon,
} from "../assets/Icons";
import { NavLinks } from "../Constants";
import { DrawerExample } from "./menu";
import { Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow , PopoverHeader, PopoverCloseButton , PopoverBody, Button, PopoverFooter, Container } from "@chakra-ui/react";

export function NavBar() {
  const { isAuth, Logout } = useContext(AuthContext);
  const [popDiv, setPopDiv] = useState(false);
  const popoverRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setPopDiv(false);
    }
  };

  useEffect(() => {
    if (popDiv) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popDiv]);

  const handleLogout = ()=>{
    Logout()
  }





  return (
    <nav>
      <div className="bg-black text-white text-center text-[16px] py-1.5 font-nikhil-regular">
        <h3>
          <span className="font-nikhil-bold">
            Nordy Club: Be First to Shop Clear the Rack!
          </span>
          <Link to="#"> Sign in,</Link>{" "}
          <span>
            shop clearance and get an extra 25% off. ALL SALES FINAL.
            Restrictions apply.{" "}
          </span>
        </h3>
      </div>

      <div
        id="navSecRow"
        className="flex justify-between mx-4 py-8 border-b-[1.5px] border-gray align-middle font-nikhil-regular text-[17px] flex-wrap relative max-lg:px-5"
      >
        <div className="flex items-center gap-5 ">
          <div className="lg:hidden">
            <DrawerExample />
          </div>

          <Link to="/">
            <img src={normsLogo} alt="Norms-Logo" width={120} height={100} />
          </Link>
        </div>

        <div className="border-[1px] border-black p-5 py-2.5 flex gap-5 w-[45%] max-lg:w-full m-auto max-lg:my-5 max-lg:mx-5">
          <img src={searchIcon} alt="" />
          <input
            className=" focus:border-none focus:ring-0 w-[95%]"
            id="searchBar"
            type="text"
            placeholder="Search for Products or brands"
          />
        </div>

        <div className="flex align-middle items-center gap-7 ">
          <div className="flex align-middle items-center gap-7 max-lg:hidden">
            {isAuth.loggedInStatus ? (
              <Popover>
                <PopoverTrigger>
                  <Link>
                    Hi, {isAuth.token}
                  </Link>
                </PopoverTrigger>
                <Portal > 
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader className="font-nikhil-bold text-xl">Logout</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button  onClick={handleLogout} colorScheme="blue">Logout</Button>
                    </PopoverBody>
                    <PopoverFooter>Click to Logout</PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
            ) : (
              <Link to="signIn">Sign In</Link>
            )}

            <Link to="#" className="flex gap-2">
              <img src={storeIcon} alt="storeIcon" />
              Stores
            </Link>
            <Link to="#" className="flex gap-2">
              <img src={purchaseIcon} alt="purchaseIcon" />
              Purchases
            </Link>
          </div>

          <Link to="#" className="max-lg:absolute top-10 right-5">
            <img src={bagIcon} alt="bagIcon" />
          </Link>
        </div>
      </div>

      <div className="font-nikhil-regular text-md py-4 flex justify-evenly max-lg:hidden">
        {NavLinks.map((ele) => (
          <Link
            style={{
              color:
                ele.label === "Clearance"
                  ? "red"
                  : ele.label === "Flash Events" || ele.label === "New"
                  ? "#186ADC"
                  : "",
            }}
            key={ele.to}
            // to={ele.to}
            onClick={()=> setPopDiv(true)}
          >
            {ele.label}
          </Link>
        ))}
      </div>
      <div ref={popoverRef}>
      {popDiv ? <PopoverDiv/> : ""}
      </div>
      
    </nav>
  );
}
