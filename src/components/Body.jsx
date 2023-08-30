import { useEffect, useState, useCallback, useContext } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import PortContext  from "../store/portfolio-ctx";

import Nav from "./Nav";
import Footer from "./Footer";
import Homepage from "../pages/Homepage";
// import Quote from "./UI/Quote"

const transformData = (array, id) => {
  let transformedData
  if (id === "PROJECTS") { 
    let data = []
    for (const key in array) {
       data.push({
         id: key,
         title: array[key].title,
         description: array[key].description,
         live_url: array[key].live_url,
         image: array[key].image,
       });
     }
     transformedData = data;
  }
  if(id === "SKILLS") {
    let data = {
      databases: [],
      frameworks: [],
      languages: [],
      others: [],
      tools: [],
    };
    for(const key in array) {
      if(array.hasOwnProperty(key)) {
        for(const item in array[key]){
          data[key].push({
            id: item,
            name: array[key][item].name
          })
        }
      }
    }
    transformedData = data
  }
  return transformedData
}

const Body = (props) => {
  const [projectData, setProjectData] = useState([]);
  const [loadedSkills, setLoadedSkills] = useState({});
  const [loadedProjects, setLoadedProjects] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const portCtx = useContext(PortContext)

  //  FETCHING PROJECTS FROM API    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>
  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try{
      const projectsResponse = await axios.get("https://portfolio-cc474-default-rtdb.firebaseio.com/projects.json")
      const projectsData = projectsResponse.data;
      setLoadedProjects(projectsData)

      const skillsResponse = await axios.get("https://portfolio-cc474-default-rtdb.firebaseio.com/skills.json")
      const skillsData = skillsResponse.data;
      setLoadedSkills(skillsData)

      if (projectsResponse.status !== 200 || skillsResponse.status !== 200) {
        throw new Error("Something went wrong");
      }
    }
    catch(error) {
        console.log(error);
    }
    setIsLoading(false)
  }, [])
  
  const TransformData = () => {
    console.log(loadedProjects);
    const transformedProjects = transformData(loadedProjects, "PROJECTS")
    const transformedSkills = transformData(loadedSkills, "SKILLS")
    setProjectData({
      projects: transformedProjects,
      skills: transformedSkills
    })
    
    console.log("Projects:", transformedProjects);
    console.log("Skills",  transformedSkills);
    // console.log(portCtx);
    
  };

  useEffect(()=>{
    fetchData();
    // TransformData()
  }, [fetchData])

  useEffect(()=>{   //  RENDER DATA ONCE PORTCONTEXT CHANGES
    portCtx.loadItems(projectData)
  },[projectData])  
  
  return (
    <>
      <div className="container">
      <button onClick={TransformData}>display data</button>
      {isLoading && <p>Loading now!!!</p>}
        <Nav />
      </div>
      <Outlet />
      <div
        style={{
          border: "1px solid #ABB2BF",
        }}
      ></div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default Body;
