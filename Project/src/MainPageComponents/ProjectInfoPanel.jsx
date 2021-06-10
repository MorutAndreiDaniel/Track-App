import React from "react";
import FormActionButtons from "../MainPageComponents/FormActionButtons";

const ProjectInfoPanel = ({ name, desc, deletePanel, id, setInfoPanel }) => {
  return (
    <div className="track-info__panel">
      <h5>{name}</h5>
      <p>{desc}</p>
      <div className="track-info__panel--buttons">
        <FormActionButtons
          deletePanel={deletePanel}
          id={id}
          setInfoPanel={setInfoPanel}
          name={name}
          desc={desc}
        />
      </div>
    </div>
  );
};

export default ProjectInfoPanel;
