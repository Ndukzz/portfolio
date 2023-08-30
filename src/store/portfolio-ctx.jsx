import React from "react";

const PortContext = React.createContext({
  projects: [],
  skills: [],
  loadItems: (items) => {}
})

export default PortContext;