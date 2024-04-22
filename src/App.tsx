import React, { ReactNode, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { SpaceTourism } from "./components/spaceTouristLayout/spaceTouristLayout";
import { DestinationPages } from "./pages/destinationPages";
import { CrewPages } from "./pages/crewPages";
import { TechnologyPages } from "./pages/technologyPages";


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
            <Route element={<DestinationPages />} path="/destination" />
            <Route element={<CrewPages />} path="/crew" />
            <Route element={<TechnologyPages />} path="/technology" />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};