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
  //  ADDING SKILLS TO THE CONTEXT
  if (action.type === "ADD_SKILLS") {
    const skills = { ...action.skills };

    return {
      ...state,
      // projects: state.projects,
      skills: skills,
    };
  }
  // ADD THE LOGIC FOR PUSHING THE PFOJECTS

  // ...CODE ^
  if (action.type === "ADD_PROJECTS") {
    const projects = [action.projects];

    return {
      ...state,
      projects: projects,
      // skills: state.skills,
    };
  }

  if (action.type === "SET_ERROR") {
    const error = action.payload;
    return {
      ...state,
      error: error,
    };
  }
  return state;
};

const PortfolioProvider = (props) => {
  const [projectData, setProjectData] = useState({});
  const [loadedSkills, setLoadedSkills] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState([]);

  const [portState, dispatchPortState] = useReducer(
    portReducer,
    defaultPortState
  );
  // MAKE THE LOAD PFOJECTS SEPERATE FROM THE FUNCTION IF IT DOESN'T FUNCTION PROPERLY
  // LOADS BOTH THE SKILLS AND PROJECTS TO THE CONTEXT
  const loadSkills = (skills) => {
    dispatchPortState({ type: "ADD_SKILLS", skills: skills });
  };

  const loadProjects = (projects) => {
    dispatchPortState({ type: "ADD_PROJECTS", projects: projects });
  };

  const portContext = {
    projects: portState.projects,
    skills: portState.skills,
    isLoading: isLoading,
    error: portState.error,
    loadSkills,
    loadProjects,
  };

  // <-------------------------------------------------------------------------------->
  // <-------  LOGIC TO TRANSFORM THE PULLED DATA ------->

  const transformData = async (array, id) => {
    if (id === "PROJECTS") {
      let data = [];
      for (const key in array) {
        data.push({
          id: key,
          title: array[key].title,
          description: array[key].description,
          live_url: array[key].live_url,
          image: array[key].image,
          tools: Object.values(array[key].tools), //  THIS TRANSFORMS THE TOOLS OBJ TO AN ARRAY
        });
      }
      // loadProjects(data);
      // console.log("transformedProjects : ", data );

    }
    if (id === "SKILLS") {
      let data = {
        databases: [],
        frameworks: [],
        languages: [],
        others: [],
        tools: [],
      };
      for (const key in array) {
        if (array.hasOwnProperty(key)) {
          for (const item in array[key]) {
            data[key].push({
              id: item,
              name: array[key][item].name,
            });
          }
        }
      }
      loadSkills(data);
      // console.log("transformedSkills: ", data );
    }
  };

  // <-------------------------------------- 1 fetch the data ------------------------------------------->

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const projectsResponse = await axios.get(
        "https://portfolio-cc474-default-rtdb.firebaseio.com/projects.json"
      );
      const projectsData = await projectsResponse.data;
      setLoadedProjects(projectsData);
      // console.log(projectsResponse.status);

      const skillsResponse = await axios.get(
        "https://portfolio-cc474-default-rtdb.firebaseio.com/skills.json"
      );
      const skillsData = await skillsResponse.data;
      setLoadedSkills(skillsData);

      if (projectsResponse.status !== 200 || skillsResponse.status !== 200) {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      co({ type: "SET_ERROR", payload: error.message });
    }
    setIsLoading(false);
  }, []);

  // <---------------  3 TRANSFORMS THE LOADED SKILLS AND PROJECTS INTO APPROPRIATE FORMAT
  const transformer = useCallback(async () => {
    await transformData(loadedSkills, "SKILLS");
    await transformData(loadedProjects, "PROJECTS");
  }, [loadedSkills, loadedProjects]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    //  RENDER DATA ONCE PORTCONTEXT CHANGES
    transformer();
  }, [loadedSkills, loadedProjects]);

  return (
    <PortContext.Provider value={portContext}>
      {props.children}
    </PortContext.Provider>
  );
};

export default PortfolioProvider;
