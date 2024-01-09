import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const WorkDetail = React.lazy(() => import("pages/WorkDetail"));
const Blog = React.lazy(() => import("pages/Blog"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/workdetail" element={<WorkDetail />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
