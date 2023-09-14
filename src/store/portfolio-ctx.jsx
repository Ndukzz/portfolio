import React from "react";

const PortContext = React.createContext({
  isLoading: false,
  error: null,
  projects: [],
  skills: [],
  loadItems: (items) => {}
})

export default PortContext;