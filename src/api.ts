const conta = {
  id: "1",
  email: "gioriwelliton47@gmail.com",
  password: "123456",
  name: "Welliton Giori",
  balance: 2000.25,
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
