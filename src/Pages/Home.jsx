import { Move } from "../Sections/HomeSections/Move";
import { Slider } from "../Sections/HomeSections/Slider";

export const Home = () => {
  return (
    <div className="padding">
      <section>
          <Move/>
          <Slider/>
      </section>
    </div>
  );
};
