import { Routes, Route } from "react-router-dom";
import { Private } from "./Private";
import {
  Home,
  New,
  Clearance,
  Women,
  Mens,
  Kids,
  Shoes,
  Accessories,
  Home2,
  Beauty,
  Gift,
  Flash,
  SignIn,
  SignInTwo
} from "../Pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={
      <Private>
        <New />
      </Private>
      } />
      
      {/* <Route path="/clearance" element={<Clearance />} />
      <Route path="/women" element={<Women />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/Gift" element={<Gift />} />
      <Route path="/Flash" element={<Flash />} />
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/signInTwo" element={<SignInTwo/>}></Route> */}
    </Routes>
  );
};
