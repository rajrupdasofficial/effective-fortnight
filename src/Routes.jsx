import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppIntroLandingLTR = React.lazy(() => import("pages/AppIntroLandingLTR"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<AppIntroLandingLTR />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
