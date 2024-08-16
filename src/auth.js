export const setToken = (token) => {
  localStorage.setItem("xtoken", token);
};
export const getToken = () => {
  return localStorage.getItem("xtoken");
};

export const isLoggedIn = () => {
  return Boolean(localStorage.getItem("xtoken"));
};

export const deleteToken = () => {
  return localStorage.removeItem("xtoken");
};
