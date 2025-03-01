import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../CardInfos";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { AppContext } from "../AppContext";

interface UserData {
  id: string;
  email: string;
  password: string;
  name: string;
  balance: number;
}

const Conta = () => {
  const { isLoggedIn } = useContext(AppContext);

  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();
  const actualData = new Date();

  //!isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <Center>
      {userData === null || userData === undefined ? (
        <Center>
          <Spinner color="white.500" size="xl" marginTop={16} />
        </Center>
      ) : (
        <>
          <SimpleGrid columns={2} spacing={10} paddingTop={16}>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={`${userData?.email}`}
              /*content={`${
                actualData.getDate() > 9
                  ? actualData.getDate()
                  : "0" + actualData.getDate()
              }/${
                actualData.getMonth() > 9
                  ? actualData.getMonth()
                  : "0" + actualData.getMonth()
              }/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}*/
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
          </SimpleGrid>
        </>
      )}
    </Center>
  );
};

export default Conta;
