import React from "react"

import {Link} from "react-router-dom"
import { bagIcon, normsLogo, purchaseIcon, searchIcon, storeIcon } from "../assets/Icons"

export function NavBar(){
    return(
        <nav>
            <div className="bg-black text-white text-center text-[16px] py-1.5 font-nikhil-regular">
                <h3><span className="font-nikhil-bold">Nordy Club: Be First to Shop Clear the Rack!</span><Link to="#"> Sign in,</Link> <span>shop clearance and get an extra 25% off. ALL SALES FINAL. Restrictions apply. </span></h3>
            </div>

            <div id="navSecRow" className="flex justify-between mx-4 py-8 border-b-[1.5px] border-gray   align-middle font-nikhil-regular text-[17px]">
                <div>
                    <img src={normsLogo} alt="Norms-Logo" width={120} height={100}/>
                </div>

                <div className="border-[1px] border-black p-5 py-2.5 flex gap-5 w-[45%]">
                    <img src={searchIcon} alt="" />
                    <input className=" focus:border-none focus:ring-0 w-[95%]" id="searchBar" type="text" placeholder="Search for Products or brands"/>
                </div>

                <div className="flex align-middle items-center gap-7">
                    <Link to="#">Sign In</Link>
                    <Link to="#" className="flex gap-2"><img src={storeIcon} alt="storeIcon" />Stores</Link>
                    <Link to="#" className="flex gap-2"><img src={purchaseIcon} alt="purchaseIcon" />Purchases</Link>
                    <Link to="#"><img src={bagIcon} alt="bagIcon" /></Link>
                </div>
            </div>
            
        </nav>
    )
}