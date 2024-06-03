import { move2BottomBanner } from "../../assets/Images"
import { SliderReal2 } from "../../Components/SliderReal2";
import { SliderData2 } from "../../Constants";


export const Slider2 = () =>{
    return(
        <div className="py-12">
          <div className= "h-[65vh] w-full">
        <SliderReal2 SliderData2 = {SliderData2}/>
        </div>  

        <div id="move2BottomSlider" className="pt-10">
        <img src={move2BottomBanner} alt="move2BottomBanner"/>
      </div>

        </div>
        
    )
}