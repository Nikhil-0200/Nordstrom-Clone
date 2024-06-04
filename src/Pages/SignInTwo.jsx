import { Footer } from "../Sections/FooterSections/Footer";
import { Container, Text, Box, Input, Flex, Button } from "@chakra-ui/react";
import { cardIcon, cabIcon, nIcon } from "../assets/Icons";

export const SignInTwo = () => {
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
              <Input rounded="0" type="email" />
            </Box>
            <Box>
              <label className="font-nikhil-bold text-sm">
                First name <span>*</span>
              </label>
              <Input rounded="0" type="text" />
            </Box>
            <Box>
              <label className="font-nikhil-bold text-sm">
                Last name <span>*</span>
              </label>
              <Input rounded="0" type="text" />
            </Box>
            <Box>
              <label className="font-nikhil-bold text-sm">
                Create password
                <span>*</span>
              </label>
              <Input rounded="0" type="text" />
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
        >
          Create Account
        </Button>
      </Container>
      <Footer />
    </div>
  );
};
