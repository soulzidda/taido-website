import React from "react";
import Modal from "react-modal";

interface ModalProps {
  isOpen: any;
  children: any;
  customStyling?: any;
  centerContent?: boolean;
}

const InstructorModal: React.FC<ModalProps> = (props) => {
  const { isOpen, children, customStyling, centerContent } = props;

  const centerStyles = {
    justifyContent: "center",
    alignItems: "center",
  };

  const modalStyles = centerContent && {
    ...customStyling,
    ...centerStyles,
  };

  return (
    <Modal isOpen={isOpen} style={customStyling || modalStyles}>
      {children}
    </Modal>
  );
};

export default InstructorModal;
