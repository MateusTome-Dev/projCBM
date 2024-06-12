import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Pages/Card/Card.jsx";
import Register from "./components/Pages/Register/Form.jsx";
import Editar from "./components/Pages/Editar/Editar.jsx";
import Listar from "./components/Pages/List/List.jsx";
import SignIn from "./components/Pages/Sign/SignIn/SignIn.jsx";
import Header from "./components/layout/Header/Header.jsx";
import Navbar from "./components/layout/Navbar/Nav.jsx";
import HeaderHome from "./components/layout/HeaderHome/Header.jsx";
import SignUp from "./components/Pages/Sign/SignUp/SignUp.jsx";
import PrivateRoute from './components/PrivateRoute'; 

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
