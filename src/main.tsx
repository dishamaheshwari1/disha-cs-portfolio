import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import { RootLayout } from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import ProjectLogPage from "./pages/ProjectLogPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import MissionProgressPage from "./pages/MissionProgressPage";
import ResearchPage from "./pages/ResearchPage";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/project-log" element={<ProjectLogPage />} />
          <Route path="/project-log/:slug" element={<ProjectDetailPage />} />
          <Route path="/mission-progress" element={<MissionProgressPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:slug" element={<ResearchDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
