import { Footer } from "../Sections/FooterSections/Footer";
import { useLocation } from "react-router-dom";
import { Container, Text, Box, Input, Flex, Button } from "@chakra-ui/react";
import { cardIcon, cabIcon, nIcon } from "../assets/Icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignInTwo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  useEffect(() => {
    if (location.state && location.state.email) {
      setFormState((preValue) => ({
        ...preValue,
        email: location.state.email,
      }));
    }
  }, [location.state]);

  function handleChange(e) {
    const { name, value } = e.target;
    const newData = { ...formState, [name]: value };
    setFormState(newData);
  }

  function handleSubmit() {
    let storedData = JSON.parse(localStorage.getItem("data")) || [];

    const storedNewData = [...storedData, formState];

    localStorage.setItem("data", JSON.stringify(storedNewData));

    navigate("/")

  }

  return (
    <div>
      <Container maxW="md" className="font-nikhil-regular" my={10}>
        <Box>
          <Flex flexDirection="column" gap={6}>
            <Text className="font-nikhil-bold text-2xl">Create Account</Text>

            <Box className="flex flex-col gap-3">
              <Text className="flex gap-3 items-center">
                <span>
                  <img src={cardIcon} alt="cardIcon" />
                </span>
                Check out faster
              </Text>
              <Text className="flex gap-3 items-center">
                <span>
                  <img src={cabIcon} alt="cabIcon" />
                </span>
                Track orders easily
              </Text>
              <Text className="flex gap-3 items-center">
                <span>
                  <img src={nIcon} alt="nIcon" />
                </span>
                Use one sign-in across our brands
              </Text>
            </Box>

            <Text>
              <span>*</span>Required
            </Text>
            <Box>
              <label className="font-nikhil-bold text-sm">Email</label>
              <Input
                rounded="0"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <label className="font-nikhil-bold text-sm">
                First name <span>*</span>
              </label>
              <Input
                rounded="0"
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <label className="font-nikhil-bold text-sm">
                Last name <span>*</span>
              </label>
              <Input
                rounded="0"
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <label className="font-nikhil-bold text-sm">
                Create password
                <span>*</span>
              </label>
              <Input
                rounded="0"
                type="text"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
            </Box>
            <Text className="text-sm w-[95%]">
              By creating an account, you agree to our{" "}
              <span className="text-[#6275c9] underline">Privacy Policy</span>{" "}
              and{" "}
              <span className="text-[#6275c9] underline">
                {" "}
                Terms & Conditions
              </span>
              .
            </Text>
          </Flex>
        </Box>
        <Button
          className="w-[100%] mt-5 p-5"
          rounded={0}
          color="white"
          backgroundColor="#2563eb"
          fontSize="12px"
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </Container>
      <Footer />
    </div>
  );
};
