import { useEffect, useCallback, useContext } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Body from "./components/Body";

import Homepage, { loader as skillsLoader } from "./pages/Homepage";
import ProjectsPage, {loader as projectsLoader} from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const componentRouter = createRoutesFromElements(
    <Route path="/" element={<Body />}>
      <Route path="/" element={<Homepage />} loader={skillsLoader} />
      <Route path="/projects/:miniPage" element={<ProjectsPage />} loader={projectsLoader} />
      <Route path="/projects/:fullPage" element={<ProjectsPage />} loader={projectsLoader} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  );

  const router = createBrowserRouter(componentRouter);

  return <RouterProvider router={router} />;
}

export default App;
