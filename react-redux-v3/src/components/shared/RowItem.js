import React from "react";
import { Row, Col } from "reactstrap";

const RowItem = ({ col1, col2, col3, col4 }) => {
  return (
    <>
      <Row className="d-flex">
        {col1 && <Col>{col1}</Col>}
        {col2 && <Col>{col2}</Col>}
        {col3 && <Col>{col3}</Col>}
        {col4 && <Col>{col4}</Col>}
      </Row>
    </>
  );
};

export default RowItem;
