import React from "react";

const ProjectSummary = ({ projectName, projectNameDesc }) => {
  return (
    <div className="track-main-page__container w-100">
      <h2>{projectName}</h2>
      <p>{projectNameDesc}</p>
    </div>
  );
};

export default ProjectSummary;
