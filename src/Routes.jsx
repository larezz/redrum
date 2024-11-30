import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Site } from "./layouts";

import * as SiteRoutes from "./pages/site";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/*" element={<Site />}>
            <Route index element={<SiteRoutes.Landingpage />} />

            <Route path="news" element={<SiteRoutes.News />} />

            <Route path="availables" element={<SiteRoutes.Availables />} />

            <Route
              path="availables/view/:realEstate"
              element={<SiteRoutes.View />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
