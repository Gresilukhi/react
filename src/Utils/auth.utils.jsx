export const gettoken =() => localStorage.getItem("token")
export const getrole =() => localStorage.getItem("role")
export const logout = () => {
  localStorage.clear();
};