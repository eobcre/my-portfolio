import React from "react";
import Home from "./components/Home";
import AppAbout from "./components/AppAbout";
import AppProjects from "./components/AppProjects";
import AppContact from "./components/AppContact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Main page */}
      <Home
        name="Resume"
        subquote="Love to build creative and magical things."
      />
      {/* Other pages */}
      <section id="AppAbout">
        <AppAbout title="Emmy Manning" />
      </section>
      <section id="AppProjects">
        <AppProjects title="Projects" />
      </section>
      <section id="AppContact">
        <AppContact name="Send Message" title="Contact" />
      </section>
      <Footer />
    </div>
  );
};

export default App;
