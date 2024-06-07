import { Container, Box, Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import { Link, useNavigate } from "react-router-dom";

export const ItemsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      setLoading(true);
      let res = await axios({
        method: "get",
        url: "https://script.google.com/macros/s/AKfycbw1CfVgiDL_x8Fk7hJCbMYfbV0dKifXuuQkR0caLb7_eHsXplwQLPveHyH78iWZa4Cq/exec",
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
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  function handleClick(id){
    console.log(id);
    navigate(`/items/details/${id}`)
  }

  return (
    <Container className="font-nikhil-regular" maxW="full">
      <Box className="font-nikhil-bold text-xl py-4">
        Clearance Women's Clothing
      </Box>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.map((ele, index) => (
          <GridItem key={index} onClick={()=> handleClick(ele.productName)}>
            <Box className="flex flex-col gap-4">
              <div className=" h-[350px] object-cover relative">
                <div className=" bg-[#191a1b] bg-opacity-[0.03] absolute h-[350px] w-[100%] z-[1]"></div>
                <img
                  src={ele.image1}
                  alt="Product Image"
                  className="w-[100%] h-[100%] z-0"
                />
              </div>
              <Box>
                <Text className="font-nikhil-bold">{ele.topHeading}</Text>
                <Text>{ele.productName}</Text>
              </Box>

              <Box>
                <Text className="font-nikhil-bold text-red-600">
                  {ele.price}
                </Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
