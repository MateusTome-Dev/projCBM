import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "../src/components/Pages/Card/Card.jsx";
import Register from "../src/components/Pages/Register/Form.jsx";
import Editar from "../src/components/Pages/Editar/Editar.jsx";
import Listar from "../src/components/Pages/List/List.jsx";
import SignIn from "../src/components/Pages/Sign/SignIn/SignIn.jsx";
import Header from "../src/components/layout/Header/Header.jsx";
import Navbar from "../src/components/layout/Navbar/Nav.jsx";
import HeaderHome from "../src/components/layout/HeaderHome/Header.jsx";
import SignUp from "../src/components/Pages/Sign/SignUp/SignUp.jsx";
import PrivateRoute from '../src/components/PrivateRoute.jsx'; 

const Router = () => {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/instrucoes" element={<PrivateRoute element={<Card />} />} />
        <Route path="/registrar" element={<PrivateRoute element={<Register />} />} />
        <Route path="/editar/:id" element={<PrivateRoute element={<Editar />} />} />
        <Route path="/listar" element={<PrivateRoute element={<Listar />} />} />
      </Routes>


    </BrowserRouter>
  );
};

export default Router;
