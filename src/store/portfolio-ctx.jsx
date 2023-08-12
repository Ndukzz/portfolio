import React from "react";

const PortContext = React.createContext({
  projects: [],
  skills: [],
  aboutMe: [],
  contactMe: [],
  loadItems: (items) => {}
})

export default PortContext;