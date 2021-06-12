import React from "react";
import { useLocation } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectPage = () => {
  const location = useLocation();
  const projectName = location.state.name;
  const projectNameDesc = location.state.desc;
  const projectNameId = location.state.id;

  return (
    <div className="app-container w-100">
      <ProjectSummary
        projectName={projectName}
        projectNameDesc={projectNameDesc}
        key={projectNameId}
      />
    </div>
  );
};

export default ProjectPage;
