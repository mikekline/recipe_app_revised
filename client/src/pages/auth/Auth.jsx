import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";


const CookieContext = createContext();

export const useCookieContext = () => useContext(CookieContext);

const Auth = ({children}) => {
  const navigateTo = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState("");
 








  useEffect(() => {
        
// setCookie('token', cookies, {path:'/Recipe_app'})
    
    const verifyCookie = async () => {
      console.log(cookies.token)
      if (!cookies.token) {
        navigateTo("/Recipe_app/login");
      }
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user`,
        {},
        { withCredentials: true }
      );
      const { status, username, email } = data;
      console.log(data)
      setUser({username, email});

      return status
        ? console.log(`Hello ${username}`)
        : (removeCookie("token"), navigateTo("/Recipe_app/login"));
    };
    verifyCookie();
  }, [cookies, navigateTo, removeCookie, setCookie]);
  const Logout = () => {
    removeCookie('mycookies');
    navigateTo("/Recipe_app/login");
    console.log(cookies.token)
  };
  return (
    
    
      <CookieContext.Provider value={{ user, Logout }}>
  {children}
  

      
    </CookieContext.Provider>
      
    
  );
}

export default Auth;