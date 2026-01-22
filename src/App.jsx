import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Adminroutes from "./Routes/Admin.Routes";
import UserRoutes from "./Routes/User.Routes";
import PrivateRoutes from "./Routes/Private.Routes";
import Login from "./Login";
import Home from "./container/Users/Home";
import Adminapt from "./container/Admin/Adminapt";


function App() {
  return (
    <>
      <Header />
      <Adminapt/>
{/* 
       <Routes>
         PUBLIC ROUTES 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

         USER PROTECTED ROUTES 
        <Route
          path="/user/*"
          element={
            <PrivateRoutes role="user">
              <UserRoutes />
            </PrivateRoutes>
          }
        />

         ADMIN PROTECTED ROUTES 
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoutes role="admin">
              <Adminroutes />
            </PrivateRoutes>
          }
        />
      </Routes> */}

      <Footer />
    </>
  );
}

export default App;
