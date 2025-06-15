import React from "react";
import { ProfileSection, Project, MyWorks } from "../components";

const Home = () => {
  return (
    <div className="text-black  dark:text-white space-y-5">
      {/* Profile Section */}
      <ProfileSection />

      <Project />
      <MyWorks />

      {/* Information */}
      {/* Projects */}
      {/* Contact */}
    </div>
  );
};

export default Home;
