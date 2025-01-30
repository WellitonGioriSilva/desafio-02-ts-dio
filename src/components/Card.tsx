import { Center, Input, Box } from "@chakra-ui/react";
import { login } from "./../services/login";
import { MyButton } from "./Button/MyButton";

export const Card = () => {
  return (
    <>
      <Box minHeight="100vh" padding="25px">
        <Box borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="Email" marginTop={"10px"} />
          <Input placeholder="Senha" marginTop={"10px"} />
          <Center>
            <MyButton label="Entrar" onClick={login}></MyButton>
          </Center>
        </Box>
      </Box>
    </>
  );
};
