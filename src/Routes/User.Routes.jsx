import { Routes, Route } from "react-router-dom";
import Aboutus from "../container/Users/Aboutus";
import News from "../container/Users/News";
import Contact from "../container/Users/Contact";
import Makeapooinment from "../container/Users/Makeapooinment";
import UserDoctor from "../container/Users/UserDoctor";


const UserRoutes = () => {
  return (
    <Routes>
      <Route path="about" element={<Abou tus />} />
      <Route path="news" element={<News/>} />
      <Route path="contact" element={<Contact />} />
      <Route path="appointment" element={<Makeapooinment />} />
      <Route path="doctors" element={<UserDoctor />} />
    </Routes>
  );
};

export default UserRoutes;
