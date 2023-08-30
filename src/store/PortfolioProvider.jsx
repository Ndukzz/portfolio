import React, { useReducer } from "react";

import PortContext from "./portfolio-ctx";

const defaultPortState = {
  projects: [],
  skills: {},
};

const portReducer = (state, action) => {
  if (action.type === "ADD_SKILLS") {
    state = {
      projects: [...state.projects, action.items.projects],
      skills: {...state.skills, ...action.items.skills},
    };
  }
  return state;
  //  OR
  //  return {
  //   projects: loadedInfo.projects,
  //   skills: loadadInfo.skills,
  //  }
};

const PortfolioProvider = (props) => {
  const [portState, dispatchPortState] = useReducer(
    portReducer,
    defaultPortState
  );

  const loadItems = (items) => {
    console.log("From the context!!: ",items);
    dispatchPortState({ type: "ADD_SKILLS", items: items });
  };

  const portContext = {
    projects: portState.projects,
    skills: portState.skills,
    loadItems,
  };

  return (
    <PortContext.Provider value={portContext}>
      {props.children}
    </PortContext.Provider>
  );
};

export default PortfolioProvider;
