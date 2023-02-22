import { Route, Routes } from "react-router-dom";
import { CountryComponent } from "../components/CountryComponent";
import { HomePage } from "../pages/HomePage";
export const MainRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/:cntryname" element={<CountryComponent />} />
    </Routes>
  );
};
