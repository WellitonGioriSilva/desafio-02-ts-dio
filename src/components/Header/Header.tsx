import "./Header.css";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IoExit } from "react-icons/io5";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({
      login: false,
    });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>DIO BANK</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {isLoggedIn && (
                <>
                  <Button onClick={() => logout()}>
                    <IoExit />
                  </Button>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
