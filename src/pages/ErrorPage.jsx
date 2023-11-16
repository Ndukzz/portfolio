import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "Error";
  let message = "Something went wrong";

  console.log(error);
  if (error.status === 404) {
    message = "Page not Found!!";
  }
  // if (error.status === 404) {
  //   title = "404 error"
  //   message = "Page not found"
  // }

  return (
    <div style={{textAlign: "center"}}>
      <div className="section" >
        <div className="titleNav" >
          <h1 className="titles" style={{paddingLeft: "30px"}}>
            <span >#</span>404 Error
          </h1>
          <div className="line"></div>
        </div>

        {/* render the error content here */}
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default ErrorPage;
