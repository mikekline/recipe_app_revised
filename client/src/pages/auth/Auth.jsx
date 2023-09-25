import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const CookieContext = createContext();
export const useCookieContext = () => useContext(CookieContext);

const Auth = ({ children }) => {
  const navigateTo = useNavigate();
  const [cookies, getCookies, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState("");
//!todo change axios to try 

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigateTo("/Recipe_app/login");
        return;
      }
      
      if (cookies.token){
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/Recipe_app/user`, {}, { withCredentials: true })
        .then((res) => {
          const { status, username, email } = res.data;
          setUser({ username, email });
      
          if (!status) {
            removeCookie('token', { path: '/Recipe_app' });
            navigateTo("/Recipe_app/login");
          }
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        })
      }
    };

    verifyCookie();
  }, []);





  return (
    <CookieContext.Provider value={{ user, setUser }}>
      {children}
    </CookieContext.Provider>
  );
};

export default Auth;