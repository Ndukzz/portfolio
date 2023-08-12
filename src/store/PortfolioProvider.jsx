import React, { useReducer } from "react";

import PortContext from "./portfolio-ctx";

const defaultPortState = {
  projects: [],
  skills: [],
  aboutMe: [],
  contactMe: [],
};

const portReducer = (state, action) => {
  if (action.type === "LOAD") {
    state = {
      projects: [...state.projects, action.items.projects],
      skills: [...state.skills, action.items.skills],
      aboutMe: [...state.aboutMe, action.items.aboutMe],
      contactMe: [...state.contactMe, action.items.contactMe],
    };
  }
  return state;
  //  OR
  //  return {
  //   projects: loadedInfo.projects,
  //   skills: loadadInfo.skills,
  //   aboutMe: loadedInfo.aboutMe,
  //   contactMe: loadedInfo.contactMe
  //  }
};

const PortfolioProvider = (props) => {
  const [portState, dispatchPortState] = useReducer(
    portReducer,
    defaultPortState
  );

  const loadItemsToList = (items) => {
    dispatchPortState({ type: "LOAD", items: items});
  }

  const portContext = {
    projects: portState.projects,
    skills: portState.skills,
    aboutMe: portState.aboutMe,
    contactMe: portState.contactMe,
    loadItems: loadItemsToList
  };

  return (
    <PortContext.Provider value={portContext}>
      {props.children}
    </PortContext.Provider>
  );
};

export default PortfolioProvider;
