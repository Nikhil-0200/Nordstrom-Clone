// import { sliderImage1 } from "../../assets/Images";
import { slider } from "../../Constants";

export const Slider = () =>{
        return(
            <div className="overflow-hidden w-[100%] h-[79vh] whitespace-nowrap">
                {slider.map((ele)=>(
                    <div className=" relative w-[100%] h-[79vh] overflow-hidden border border-yellow " key={ele.label}>
                    <img className=" absolute w-full h-full object-fit" src={ele.img} alt="sliderImages"/>
                    </div>
                ))}
            </div>
        )
}