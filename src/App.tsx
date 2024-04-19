import React, { ReactNode, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { SpaceTourism } from "./components/spaceTouristLayout/spaceTouristLayout";
import { DestinationPages } from "./pages/destinationPages";
import { CrewPages } from "./pages/crewPages";
import { TechnologyPages } from "./pages/technologyPages";
import { MoonPages } from "./pages/moonPages";
import { MarsPages } from "./pages/marsPages";
import { EuropaPages } from "./pages/europaPages";
import { TitanPages } from "./pages/titanPages";

interface AppProps {
  children: ReactNode;
}

export const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<SpaceTourism>{<Outlet />}</SpaceTourism>}>
            <Route element={<HomePage />} path="/" />
            {/* destination path */}
            <Route element={<DestinationPages />} path="/destination">
              <Route index element={<MoonPages />} /> {/* Removed /destination from the path */}
              <Route element={<MoonPages />} path="moon" />
              <Route element={<MarsPages />} path="mars" /> {/* Removed /destination from the path */}
              <Route element={<EuropaPages />} path="europa" /> {/* Removed /destination from the path */}
              <Route element={<TitanPages />} path="titan" /> {/* Removed /destination from the path */}
            </Route>
            <Route element={<CrewPages />} path="/crew" />
            <Route element={<TechnologyPages />} path="/technology" />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};