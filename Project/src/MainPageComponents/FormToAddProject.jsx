import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const FormToAddProject = ({
  nameInfo,
  descInfo,
  desc,
  name,
  update,
  setNameInfo,
  setDescInfo,
}) => {
  return (
    <form className="track-form">
      <div className="track-form__container">
        <Row className="d-flex align-items-center">
          <Col xs={2}>
            <label htmlFor="name">Name:</label>
          </Col>
          <Col>
            <input
              type="text"
              id="name"
              value={update ? name : nameInfo}
              onChange={(e) => setNameInfo(e.target.value)}
            />
          </Col>
        </Row>
      </div>
      <div className="mt-2">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          cols="80"
          value={update ? desc : descInfo}
          onChange={(e) => setDescInfo(e.target.value)}
        />
      </div>
    </form>
  );
};

export default FormToAddProject;
