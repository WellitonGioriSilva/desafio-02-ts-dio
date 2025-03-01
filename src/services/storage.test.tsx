import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
};

describe("storage", () => {
  const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");

  it("Deve retornar o objeto do localStorage com a chave diobank", () => {
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Deve criar o objeto no localstorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve alterar o valor do objeto do localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
