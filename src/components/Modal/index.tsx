import React from "react";
import ReactDOM from "react-dom";
import { Dispatch, SetStateAction } from "react";
import BaseModal from "./BaseModal";
import { useCreateElement } from "./ModalHooks/useCreateElement";

export interface Props {
  children: React.ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isAway?: boolean;
}

const Modal = ({ children, setIsModalOpen, isAway, ...props }: Props) => {
  const el = useCreateElement("portal-modal");

  return ReactDOM.createPortal(
    <BaseModal {...props} setIsModalOpen={setIsModalOpen} isAway={isAway}>
      {children}
    </BaseModal>,
    el,
  );
};
export default Modal;
