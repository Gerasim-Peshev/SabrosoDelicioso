import { Route, Routes, useNavigate} from "react-router-dom"
import Header from "./components/header/Header"
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import AllRecepies from "./components/allRecepies/AllRecepies";
import Create from "./components/create/Create";
import MyRecepies from "./components/myRecepies/MyRecepies";
import Details from "./components/details/Details";
import { useState } from "react";
import AuthContext from "./contexts/authContext";
import * as authService from './services/authService';
import Logout from "./components/logout/Logout";

function App() {

  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });


  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate('/');
  }


  const registerSubmitHandler = async (values) => {

    try{
      if(values['password'] !== values['confirm-password']){
          throw new Error('Passwords does not match');
      }
      const result = await authService.register(values.username, values.email, values.password);

      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      navigate('/')

    } catch (err) {
      alert(err.message);
    }

  }

  const logoutHandler = async () => {
    setAuth({});

    localStorage.removeItem("accessToken");

    navigate('/');
  }

  return (
    <AuthContext.Provider value={{
        loginSubmitHandler, 
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        username: auth.username,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
      }}>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<AllRecepies />} />
          <Route path="/create" element={<Create />} />
          <Route path="/my-recepies" element={<MyRecepies />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/recepie/:recepieId" element={<Details />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App
