import { useEffect, useCallback, useContext } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Body from './components/Body'

import Homepage from './pages/Homepage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from "./pages/ContactsPage"

function App() {

  const componentRouter = createRoutesFromElements(
    <Route path="/" element={<Body />}>
      <Route path="/" element={<Homepage />}  />
      <Route path="/projects/:miniPage" element={<ProjectsPage />}  />
      <Route path="/projects/:fullPage" element={<ProjectsPage />}  />
      <Route path="/about" element={<AboutPage />}  />
      <Route path="/contacts" element={<ContactsPage />}  />
    </Route>
  )
  
  const router = createBrowserRouter (componentRouter)

  return ( 
      <RouterProvider router={router} />
  )
}

export default App