import { useEffect, useCallback, useStatesd } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Body from './components/Body'

import axios from 'axios'

const Dummy_data = {
  projects: [
    {
      id: 1,
      title: "First Project",
      tools: ["HTML", "CSS"],
      description: "This is the first React Project",
      image: "",
      live_url: ""
    },
    {
      id: 2,
      title: "Second Project",
      tools: ["HTML", "CSS", "JS"],
      description: "The second project",
      image: "",
      live_url: ""
    },
    {
      id: 3,
      title: "The Third Project ",
      tools: ["HTML", "CSS", "JS", "React", "Tailwind" ],
      description: "My first react project",
      image: "",
      live_url: ""
    },
    {
      id: 4,
      title: "The Fourth Project ",
      tools: ["HTML", "CSS", "JS", "React Native", "Redux" ],
      description: "My first react-native project",
      image: "",
      live_url: ""
    }
  ],
  skills: {
    databases: [
      {id : 1, name: "MongoDB"},
      {id : 2, name: "Firebase"}
    ],
    languages: [
      {id: 1, name: "Javascript"},
      {id: 2, name: "TypeScript"},
      {id: 3, name: "Python"}
    ],
    frameworks: [
      {id: 1, name: "React"},
      {id: 2, name: "ReactNative"},
      {id: 3, name: "TailwindCSS"}
    ],
    tools: [
      {id: 1, name: "VSCode"},
      {id: 2, name: "Github"},
      {id: 3, name: "Font Awesome"},
      {id: 4, name: "Netlify"},
    ],
    others: [
      {id: 1, name: "HTML"},
      {id: 2, name: "CSS"},
      {id: 3, name: "Rest API"},
      {id: 4, name: "Redux"},

    ]
  }
}



import Homepage from './pages/Homepage'
import PortfolioProvider from './store/PortfolioProvider'

function App() {

  const componentRouter = createRoutesFromElements(
    <Route path="/" element={<Body />}>
      <Route path="/" element={<Homepage data={Dummy_data}/>}  />
    </Route>
  )
  
  const router = createBrowserRouter (componentRouter)

  // const router = createBrowserRouter([
  //   {path: "/", element: <Body />, children: [
  //     {path: "/", element: <Homepage data={Dummy_data}/>},
  //     // {path: "/projects", elrement: <Projects />},
  //     // {path: "/about-me", element: <About />},
  //     // {path: "/contacts", element: <Contacts />}
  //   ]}
  // ])

  return ( 
      <RouterProvider router={router} />
    // <div>
    //   <Body data={Dummy_data} />
    // </div>
  )
}

export default App