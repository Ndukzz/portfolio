import React, { useState, useReducer, useEffect, useCallback } from "react";
import axios from "axios";

import PortContext from "./portfolio-ctx";

const defaultPortState = {
  isLoading: false,
  error: null,
  projects: [],
  skills: {},
};

const portReducer = (state, action) => {
  if (action.type === "ADD_SKILLS") {
    const projects = [action.items.projects];
    const skills = action.items.skills;
    
    return {
      ...state,
      projects: projects,
      skills: skills
    }

  }
 
  if (action.type === "SET_ERROR"){
    const error = action.payload
    return {
      ...state ,
      error: error
    }
  }
  return state;
};

const PortfolioProvider = (props) => {

  const [transformedProjects, setTransformedProjects ] = useState([])
  const [transformedSkills, setTransformedSkills ] = useState([])
  const [projectData, setProjectData] = useState({});
  const [loadedSkills, setLoadedSkills] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState([]);

  const [portState, dispatchPortState] = useReducer(
    portReducer,
    defaultPortState
  );

  const loadItems = (items) => {
    dispatchPortState({ type: "ADD_SKILLS", items: items });
  };

  const portContext = {
    projects: portState.projects,
    skills: portState.skills,
    isLoading: isLoading,
    error: portState.error,
    loadItems,
  };

  // <--------------------------------------------------------------------------------->
  // <-------caution------->

  const transformData = async (array, id) => {
    if (id === "PROJECTS") { 
      let data = []
      for (const key in array) {
         data.push({
           id: key,
           title: array[key].title,
           description: array[key].description,
           live_url: array[key].live_url,
           image: array[key].image,
           tools: Object.values(array[key].tools)   //  THIS TRANSFORMS THE TOOLS OBJ TO AN ARRAY
         });
       }
       setTransformedProjects(data)
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
      setTransformedSkills(data)
    }
    // console.log("transformed Data", transformedSkills);
    // console.log("transformed Data", transformedProjects);
    // return transformedData
  }

    // <--------------------------------------------------------------------------------->

    const fetchData = useCallback(async () => {
      setIsLoading(true)
      try{
        const projectsResponse = await axios.get("https://portfolio-cc474-default-rtdb.firebaseio.com/projects.json")
        const projectsData = await projectsResponse.data;
        setLoadedProjects(projectsData)
  
        const skillsResponse = await axios.get("https://portfolio-cc474-default-rtdb.firebaseio.com/skills.json")
        const skillsData = await skillsResponse.data;
        setLoadedSkills(skillsData)
        
        if (projectsResponse.status !== 200 || skillsResponse.status !== 200) {
          throw new Error("Something went wrong");
        }
      }
      catch(error) {
        setIsLoading(false)
        console.log(error);
        dispatchPortState({type: "SET_ERROR", payload: error.message})
      }
      setIsLoading(false)
    }, [])

    const transformer = useCallback(async() => {
      await transformData(loadedSkills, "SKILLS")
      await transformData(loadedProjects, "PROJECTS")
      loadItems({
        projects: transformedProjects,
        skills: transformedSkills,
      });
    }, [loadedSkills, loadedProjects])
  
    useEffect(()=>{
      fetchData();
    }, [fetchData])
  
    useEffect(()=>{   //  RENDER DATA ONCE PORTCONTEXT CHANGES
      transformer()
      loadItems(projectData)
    },[ loadedSkills, transformer ]) 
    

  return (
    <PortContext.Provider value={portContext}>
      {props.children}
    </PortContext.Provider>
  );
};   

export default PortfolioProvider;
