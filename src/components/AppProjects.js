import React from "react";
import todoLogo from "../img/todo-logo.svg";
import caitzLogo from "../img/caitz-logo.png";

const AppProjects = (props) => {
  return (
    <div className="h-auto bg-dark-blue text-white pb-10">
      <div className="mx-auto w-4/5 md:w-3/5">
        {/* Title */}
        <h1 className="text-4xl font-bold tracking-wide py-10 md:5xl">
          {props.title}
        </h1>
        {/* Contents */}
        <div className="grid grid-cols-1 justify-items-center items-center gap-10 md:grid md:grid-cols-3">
          <img
            src={todoLogo}
            alt="Logo"
            className="transition-transform durtion-200 hover:scale-110"
          />
          <img
            src={caitzLogo}
            alt="Logo"
            width="200"
            className="transition-transform duration-200 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default AppProjects;
