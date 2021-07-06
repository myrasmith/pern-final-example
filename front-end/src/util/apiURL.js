export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://secret-sierra-94998.herokuapp.com";
};
