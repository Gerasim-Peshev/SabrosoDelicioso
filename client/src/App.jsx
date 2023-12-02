import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import AllRecepies from "./components/allRecepies/AllRecepies";
import Create from "./components/create/Create";
import MyRecepies from "./components/myRecepies/MyRecepies";


function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<AllRecepies />} />
        <Route path="/create" element={<Create />} />
        <Route path="/my-recepies" element={<MyRecepies />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App
