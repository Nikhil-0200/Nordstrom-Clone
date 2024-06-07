import { useParams } from "react-router-dom";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import axios from "axios";
import { useEffect, useState } from "react";
import {LeftSection} from "../Components/LeftSection";
import {RightSection} from "../Components/RightSection";

export const ItemsDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  async function fetchData(id) {
    try {
      setLoading(true);
      let res = await axios({
        method: "get",
        url: `https://script.google.com/macros/s/AKfycbw1CfVgiDL_x8Fk7hJCbMYfbV0dKifXuuQkR0caLb7_eHsXplwQLPveHyH78iWZa4Cq/exec?productName=${id}`,
      });
      console.log(res.data.data);
        setData(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <section className="flex px-5 py-10 justify-between max-sm:flex-col max-container">
      <div className="w-[40%] max-sm:w-full">
        {data.map((ele)=>(
            <LeftSection 
            {...ele}
            key={ele.id}
            />
        ))}
      </div>

      <div className="lg:w-[55%]">
      {data.map((ele)=>(
             <RightSection
            data={ele}
            key={ele.id}
            />
        ))}
      </div>
    </section>
  )
};
