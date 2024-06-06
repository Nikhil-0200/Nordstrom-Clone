import { Container, Grid, GridItem  } from "@chakra-ui/react";
import { navBarPopup } from "../Constants";
import React from "react";
import { Link } from "react-router-dom";

export const PopoverDiv = () => {

  return (
    <Container className="font-nikhil-regular"  maxWidth="full">
        <Grid className="border-2 border-black" templateColumns="repeat(5, 1fr)" gap={0}>
            {navBarPopup.map((ele, index)=>(
                <React.Fragment key={index}>
                    {ele.Row1.map((data, rowIndex)=>(
                        <GridItem className="font-nikhil-bold  p-5 mx-1" key={`row1-${rowIndex}`}>
                            <h2 className="border-black border-b-[1px] pb-2">{data.title}</h2>
                            <div className="pt-3">
                                {data.links.map((link, linkIndex)=>(
                                    <ul key={`link-${linkIndex}`}>
                                        <li className="py-1.5">{link.label}</li>
                                    </ul>
                                ))}
                            </div>
                        </GridItem>
                    ))}

                    {ele.Row2.map((data, rowIndex)=>(
                        <GridItem className="font-nikhil-bold  p-5 mx-1" key={`row2-${rowIndex}`}>
                            <h1>{data.title}</h1>
                            <div className="font-nikhil-regular pt-2">
                                {data.links.map((link, linkIndex)=>(
                                    <ul key={`row2LinkIndex - ${linkIndex}`}>
                                        <Link to="#">
                                        <li className="py-1.5">{link.label}</li>
                                        </Link>
                                    </ul>
                                ))}
                            </div>
                        </GridItem> 
                    ))}

                    <GridItem className="p-5 mx-1">
                        <div>
                            <img src="https://n.nordstrommedia.com/id/ae2a2275-69a2-4897-965d-1d4af677aff5.png" alt="Img" />
                        </div>
                    </GridItem>

                </React.Fragment>
            ))}
        </Grid>
    </Container>
  );
};
