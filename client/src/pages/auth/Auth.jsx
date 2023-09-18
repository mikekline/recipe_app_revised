import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

//!todo change axios to try
//!todo BUG: still removes cookie on page reload as well as log out, should be log out only, but  cookie still exists

const CookieContext = createContext();

export const useCookieContext = () => useContext(CookieContext);

const Auth = ({children}) => {
  const navigateTo = useNavigate();
  const [cookies, getCookies, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState("");
 


  useEffect(() => {
    
    const verifyCookie = async () => {
      console.log(cookies.token)
      if (!JSON.stringify(cookies) === '{}') {
        navigateTo("/Recipe_app/login");
        return;
      }


      await axios
      .post(`${process.env.REACT_APP_BASE_URL}/user`,
        {},
        { withCredentials: true })
      .then((res) => {
        const { status, username, email } = res.data;
        console.log(res.data)
        setUser({username, email});

        return status
          ? console.log('logged in')
          : (removeCookie('token', {path:'/Recipe_app'}), navigateTo("/Recipe_app/login"));
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
    };

    verifyCookie();
  }, [cookies, navigateTo, removeCookie]);


  const Logout = () => {
    //!todo still not removing token, in some way
    //!todo set user to null
    //scratch that it works if  path is correct
    const {username, email} = '';
    removeCookie('token', {path:'/Recipe_app'});
    setUser({username, email});
    navigateTo("/Recipe_app/login");
    console.log(cookies.token)
  };


  return (
    <CookieContext.Provider value={{ user, setUser, Logout }}>
        {children}
    </CookieContext.Provider>    
  );
}

export default Auth;