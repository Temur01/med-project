import { Route, Routes } from "react-router";
import Header from "../header/header";
import HomePage from "../../pages/dashboard/home/home";
import HealthPage from "../../pages/dashboard/health/health";
import ServicePage from "../../pages/dashboard/services/service";
import ImportPage from "../../pages/dashboard/import/import";
import StaffPage from "../../pages/dashboard/staff/staff";
import AdminPage from "../../pages/dashboard/admin/admin";

const Main = () => (
    <main className="flex-1">
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/import" element={<ImportPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </main>
  );

  export default Main;