import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Site } from "./layouts";

import * as SiteRoutes from "./pages/site";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/*" element={<Site />}>
            <Route index element={<SiteRoutes.Availables />} />
            <Route path="availables" element={<SiteRoutes.Availables />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
