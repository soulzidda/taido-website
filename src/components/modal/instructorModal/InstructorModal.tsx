import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

interface ModalProps {
  isOpen: any;
  children: any;
}

const InstructorModal: React.FC<ModalProps> = (props) => {
  const { isOpen, children } = props;

  return (
    <Modal isOpen={isOpen}>
      <ModalContainer>{children}</ModalContainer>
    </Modal>
  );
};

export default InstructorModal;

const ModalContainer = styled.div`
  width: auto;
  height: auto;
`;
