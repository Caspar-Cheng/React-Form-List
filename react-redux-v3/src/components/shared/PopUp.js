import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const { buttonName, content, title, option1, option2, next } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      {buttonName && (
        <Button color="danger" onClick={toggle}>
          {buttonName}
        </Button>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        {title && <ModalHeader toggle={toggle}>{title}</ModalHeader>}
        {content && <ModalBody>{content}</ModalBody>}
        <ModalFooter>
          {option1 && (
            <Button color="primary" onClick={next}>
              {option1}
            </Button>
          )}
          {option2 && (
            <Button color="secondary" onClick={toggle}>
              {option2}
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalExample;
