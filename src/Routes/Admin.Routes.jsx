import { Routes, Route } from "react-router-dom";
import Dashboard from "../container/Admin/Dashboard";
import Doctors from "../container/Admin/Doctors";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="doctors" element={<Doctors />} />
    </Routes>
  );
};

export default AdminRoutes;
