import { Footer } from "../Sections/FooterSections/Footer";
import { Container, Text, Box, Input, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SignInTwo } from "./SignInTwo";

export const SignIn = () => {
    const navigate = useNavigate();
    
  return (
    <div>
      <Container
        maxW="md"
        className="font-nikhil-regular"
        my={10}
      >
        <Box>
          <Flex flexDirection="column" gap={5}>
            <Text className="font-nikhil-bold text-2xl">
              Sign In | Create Account
            </Text>
            <Text>Enter your email to get started.</Text>
            <Box>
              <label className="font-nikhil-bold text-sm">Email</label>
              <Input rounded="0" type="email" />
            </Box>
            <Text className="text-sm w-[95%]">
              By tapping Next, you agree to our{" "}
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
        <Button onClick={()=> navigate("/signInTwo")} className="w-[100%] mt-5 p-5" rounded={0} color="white" backgroundColor="#2563eb" fontSize="12px">Next</Button>
      </Container>
      <Footer />
    </div>
  );
};
