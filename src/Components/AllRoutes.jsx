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
  SignInTwo,
  ItemsPage,
  ItemsDetails,
  Cart,
  Payment
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
      
      <Route path="/signIn" element={<SignIn/>}/> 
      <Route path="/signInTwo" element={<SignInTwo/>}></Route> 

      <Route path="/items" element={
        <Private>
        <ItemsPage/>
        </Private>
        }/>

      <Route path="/items/details/:id" element={
        <Private>
        <ItemsDetails/>
        </Private>
        }/>
        

      <Route path="/cart" element={
        <Private>
        <Cart/>
        </Private>
        } />

      <Route path="/payment" element={
        <Private>
        <Payment/>
        </Private>
        } />
    </Routes>
  );
};
