import React from "react";

const PortContext = React.createContext({
  isLoading: false,
  error: null,
  projects: [],
  skills: {},
  loadSkills: (skills) => {},
  loadProjects: (projects) => {}
})

export default PortContext;