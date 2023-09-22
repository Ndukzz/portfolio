import { useEffect, useState, useCallback, useContext } from "react";
import { Outlet } from "react-router-dom";
import PortContext  from "../store/portfolio-ctx";
import Container from "./UI/Container";


import Nav from "./Nav";
import Footer from "./Footer";
import Homepage from "../pages/Homepage";
// import Quote from "./UI/Quote"

const Body = (props) => {
 
  const portCtx = useContext(PortContext)

  let content = <p>Loading animation (ps. the app is still loading)</p>

  if(portCtx.isLoading) {     //  TAKE THIS LOADING CONTENT TO A HIGHER COMPONENT
    content = <p>Loading Content...</p>
  }
  else if(portCtx.error) {``
    content = <p>Error loading info...</p>
  }
  else if(portCtx.skills !== undefined && !portCtx.isLoading && portCtx.error == null) {

    if(portCtx.projects[0] !== undefined || portCtx.skills !== undefined) {
      content = (<>
      <Container>
        <button onClick={()=>{console.log(portCtx);}}>DATA CHECK</button>
        { portCtx.isLoading && <p>Loading Context!!!</p>}
          <Nav />
        <Outlet />
        </Container>
        <div
          style={{
            border: "1px solid #ABB2BF",
          }}
        ></div>
        <div className="container">
          <Footer />
      </div>
    </>
    )
    }
  }

  return (
    <>
      {content}
    </>
  );
};

export default Body;
