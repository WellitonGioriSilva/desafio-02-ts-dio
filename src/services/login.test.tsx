import { Login } from "./Login";

/*const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn,
  }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));*/

describe("Login", () => {
  const mockEmail = "gioriwelliton47@gmail.com";
  const mockSenha = "123456";
  const mockAlert = jest.fn();

  window.alert = mockAlert;

  it("Deve exibir um alert com boas vindas caso o email seja válido!", async () => {
    const response = await Login(mockEmail, mockSenha);
    expect(response).toBeTruthy();
  });
  it("Deve exibir um erro caso o email ou senha sejam inválidos", async () => {
    const response = await Login("gioriwelliton47@gmail.com", "123");
    expect(response).toBeFalsy();
  });
});
