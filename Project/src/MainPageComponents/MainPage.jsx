import React, { useEffect, useState } from "react";
import MainButton from "../GeneralComponents/MainButton";
import FormToAddProject from "../MainPageComponents/FormToAddProject";
import MainModal from "../GeneralComponents/MainModal";
import ProjectInfoPanel from "../MainPageComponents/ProjectInfoPanel";

const MainPage = () => {
  let dummyId = 2;
  const [addToProjectForm, setAddToProjectForm] = useState(false);
  const [nameInfo, setNameInfo] = useState("");
  const [descInfo, setDescInfo] = useState("");
  const [infoPanel, setInfoPanel] = useState([
    {
      id: 1,
      name: "Test",
      desc: "Description",
    },
  ]);
  const deletePanel = (id) => {
    const newInfoPanel = infoPanel.filter((panel) => panel.id !== id);
    setInfoPanel(newInfoPanel);
  };

  const submitForm = (e) => {
    const infoId = (dummyId += 1);
    e.preventDefault();
    if (nameInfo && descInfo) {
      const info = { nameInfo, descInfo, infoId };

      setInfoPanel((infoPanel) => {
        return [...infoPanel, info];
      });
      setNameInfo("");
      setDescInfo("");
      setAddToProjectForm(false);
    }
  };

  return (
    <div className="track-main-page__container">
      <h3>Tracking App</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sit?
      </p>
      {infoPanel.map((x) => {
        const { name, desc, id } = x;
        return (
          <ProjectInfoPanel
            key={id}
            name={name}
            desc={desc}
            deletePanel={deletePanel}
            setInfoPanel={setInfoPanel}
            id={id}
          />
        );
      })}
      <MainButton
        text={"Add to project"}
        onClick={() => setAddToProjectForm(true)}
      />
      <MainModal
        show={addToProjectForm}
        closeModal={() => setAddToProjectForm(false)}
        modalTitle={"Add to Project"}
        modalBody={
          <div className="m-3">
            <FormToAddProject
              nameInfo={nameInfo}
              setNameInfo={setNameInfo}
              descInfo={descInfo}
              setDescInfo={setDescInfo}
            />{" "}
          </div>
        }
        modalFooter={<MainButton text="Submit Form" onClick={submitForm} />}
      ></MainModal>
    </div>
  );
};

export default MainPage;
