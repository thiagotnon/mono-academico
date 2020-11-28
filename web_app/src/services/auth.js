export const getToken = () => localStorage.getItem("academico-token");
export const login = (token) => localStorage.setItem("academico-token", token);
export const logout = () => localStorage.removeItem("academico-token");
export const isAuthenticated = () =>
  localStorage.getItem("academico-token") !== null;
