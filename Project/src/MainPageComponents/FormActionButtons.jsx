import React, { useState } from "react";
import ActionButton from "../GeneralComponents/ActionButton";
import { useHistory } from "react-router-dom";
import MainModal from "../GeneralComponents/MainModal";
import FormToAddProject from "../MainPageComponents/FormToAddProject";
import MainButton from "../GeneralComponents/MainButton";

const FormActionButtons = ({ deletePanel, id, setInfoPanel, desc, name }) => {
  let history = useHistory();
  const [update, setUpdate] = useState(false);
  const actionBtns = [
    {
      id: 1,
      text: "View",
      onClick: () =>
        history.push({
          pathname: "/projectPage",
          state: { name: name, desc: desc, id: id },
        }),
    },
    {
      id: 2,
      text: "Update",
      onClick: () => setUpdate(true),
    },
    {
      id: 3,
      text: "Delete",
      onClick: () => deletePanel(id),
    },
  ];
  return (
    <>
      {actionBtns.map((btn) => {
        const { id, text, onClick } = btn;
        return <ActionButton text={text} key={id} onClick={onClick} />;
      })}
      <MainModal
        show={update}
        closeModal={() => setUpdate(false)}
        modalTitle={"Update Project"}
        modalBody={
          <div className="m-3">
            <FormToAddProject
              name={name}
              desc={desc}
              setInfoPanel={setInfoPanel}
              update={update}
            />{" "}
          </div>
        }
        modalFooter={<MainButton text="Submit Form" />}
      ></MainModal>
    </>
  );
};

export default FormActionButtons;
