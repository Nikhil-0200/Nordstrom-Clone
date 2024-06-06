import { moveFirstImage } from "../../assets/Images";
import { Link, json } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";

import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  useDisclosure,
  Box,
  Input,
} from "@chakra-ui/react";

import React, { useState } from "react";

export const Move = () => {
  const { isAuth, Login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(5px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);

  async function fetchData() {
    try {
      let res = await axios({
        method: "get",
        url: JSON.parse(localStorage.getItem("data")),
      });
      setUser(res.config.url);
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleSubmit() {
    let obj = {
      emailID: email,
      password: password,
    };

    const loginName = JSON.parse(
        localStorage.getItem("userName")) || [];

    let setLoginName;

    user.forEach((ele) => {
      if (ele.email === obj.emailID && ele.password === obj.password) {
        setLoginName = [...loginName, ele.firstName];
      } else {
        console.log("No User Avaliable");
      }

      if (setLoginName) {
        setLoginName = [...new Set(setLoginName)]
        localStorage.setItem("userName", JSON.stringify(setLoginName));
      }

    });

  const localStorageUserName = JSON.parse(localStorage.getItem("userName"));

  if(localStorageUserName){
    Login(localStorageUserName)
  }

  onClose()

  }


  return (
    <div className="text-center font-nikhil-regular">
      <div>
        <h1 className="text-3xl font-nikhil-bold mb-2">
          More to Rack, easier and faster.
        </h1>
        {!isAuth.loggedInStatus && 
        <button
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
          className="text-sm border border-blue-500 px-6 py-2.5 hover:bg-[#F0F3F5]"
        >
          Sign In or Create an Account
        </button>
         }

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent
            className="font-nikhil-regular"
            rounded={0}
            py={10}
            px={4}
          >
            <ModalHeader className="font-nikhil-bold" fontSize="2xl">
              Sign in
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody className="flex flex-col gap-6">
              <Text>
                New to Nordstrom Rack?{" "}
                <Link to="/SignIn">
                  <span className="text-[#6275c9] underline">
                    Create an account
                  </span>
                </Link>
                .
              </Text>

              <Box>
                <label className="font-nikhil-bold text-sm">Email</label>
                <Input
                  rounded={0}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
              </Box>

              <Box position="relative">
                <label className="font-nikhil-bold text-sm">Password</label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  rounded={0}
                  type={showPassword ? "text" : "password"}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "40%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                  className="underline text-[#6275c9]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  Show
                </span>
                <Text className="underline text-[#6275c9] pt-5">
                  Forgot password?
                </Text>
              </Box>

              <Text className="text-sm w-[95%]">
                By signing in to your account, you agree to our{" "}
                <span className="text-[#6275c9] underline">Privacy Policy</span>{" "}
                and{" "}
                <span className="text-[#6275c9] underline">
                  {" "}
                  Terms & Conditions
                </span>
                .
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                className="w-full"
                rounded={0}
                color="white"
                backgroundColor="#2563eb"
                fontSize="12px"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      <div className="py-14 relative max-md:hidden">
        <img src={moveFirstImage} alt="ImageBanner" />

        <div className="absolute top-[35%] left-[60%] transform translate(-50%, -50%) text-start">
          <p className="font-nikhil-bold text-[22px] max-lg:text-sm">
            Shop & get rewarded!
          </p>
          <p className="text-[15px] max-lg:text-sm">
            <span className="font-nikhil-bold">Ends May 27.</span> Online and in
            stores at Nordstrom Rack.
          </p>
          <p className="text-[15px] flex gap-3 max-lg:text-sm">
            {" "}
            <span className="font-nikhil-bold">New Arrivals: </span>
            <Link>Women</Link> <Link>Men</Link> <Link>All</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
