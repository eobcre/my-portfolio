import React from "react";
// import todoLogo from "../img/todo.jpeg";

const AppProjects = (props) => {
  return (
    <div className="h-auto bg-dark-blue text-white pb-10">
      <main className="pl-5">
        <article className="mx-auto w-4/5 md:w-3/5">
          {/* Title */}
          <h1 className="text-4xl font-bold tracking-wide py-5 md:5xl">
            {props.title}
          </h1>
          {/* Contents */}
          <div className="mx-auto text-md md:text-xl">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quae harum laudantium inventore iusto quod,
              <br />
              sint architecto molestiae nisi quibusdam possimus deleniti itaque
              magni mollitia accusamus molestias totam tempora ducimus quam?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quae harum laudantium inventore iusto quod,
              <br />
              sint architecto molestiae nisi quibusdam possimus deleniti itaque
              magni mollitia accusamus molestias totam tempora ducimus quam?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quae harum laudantium inventore iusto quod,
              <br />
              sint architecto molestiae nisi quibusdam possimus deleniti itaque
              magni mollitia accusamus molestias totam tempora ducimus quam?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quae harum laudantium inventore iusto quod,
              <br />
              sint architecto molestiae nisi quibusdam possimus deleniti itaque
              magni mollitia accusamus molestias totam tempora ducimus quam?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Quae harum laudantium inventore iusto quod,
              <br />
              sint architecto molestiae nisi quibusdam possimus deleniti itaque
              magni mollitia accusamus molestias totam tempora ducimus quam?
            </p>
          </div>
        </article>
        {/* <img src={todoLogo} alt="Logo" /> */}
      </main>
    </div>
  );
};

export default AppProjects;
