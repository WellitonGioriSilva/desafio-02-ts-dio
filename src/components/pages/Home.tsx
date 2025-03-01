import { Card } from "../Card";
import { Center, Input, Box } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MyButton } from "../Button/MyButton";
import { Login } from "../../services/Login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { changeLocalStorage } from "../../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validationUser = async (email: string, password: string) => {
    const loggedIn = await Login(email, password);

    if (!loggedIn) {
      return alert("Email ou Senha inválidos!");
    } else {
      setIsLoggedIn(true);
      changeLocalStorage({
        login: true,
      });
      navigate(`conta/1`);
    }
  };

  return (
    <Card>
      <Box borderRadius="25px" padding="15px">
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input
          placeholder="Email"
          marginTop={"10px"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Senha"
          marginTop={"10px"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Center>
          <MyButton
            label="Entrar"
            onClick={() => validationUser(email, password)}
          ></MyButton>
        </Center>
      </Box>
      {/* {userData === null ||
          (userData === undefined && (
            <Box
              pos="absolute"
              inset="0"
              bg="bg/80"
              backgroundColor={"rgba(0,0,0,0.8)"}
            >
              <Center h="full">
                <Spinner color="teal.500" />
              </Center>
            </Box>
          ))} */}
    </Card>
  );
};

export default Home;
