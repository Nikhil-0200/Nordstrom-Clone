import { Move } from "../Sections/HomeSections/Move";
import { Slider } from "../Sections/HomeSections/Slider";
import { Slider2 } from "../Sections/HomeSections/Slider2";
import { Video } from "../Sections/HomeSections/Video";
import {Move2} from "../Sections/HomeSections/Move2";
import {Casual} from "../Sections/HomeSections/Casual"
import { Trending } from "../Sections/HomeSections/Trending";
import {Footer} from "../Sections/FooterSections/Footer";
import { footerData } from "../Constants";
import { footerIcons } from "../Constants";


export const Home = () => {
  footerIcons.map((ele)=>{
    })
    
  return (
    <div>
      <div className="padding">
      <section>
        <Move />
        <Slider/>
        <Video />
        <Move2/>
        <Slider2/>
        <Casual/>
        <Trending/>
      </section>
    </div>
    <Footer/>
    </div>
    
  );
};
