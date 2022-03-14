import React from "react";
import * as S from "./style";

interface Props {
  modalContent: string;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ modalContent, setModalState }: Props) {
  return (
    <S.ModalWrap onClick={() => setModalState(false)}>
      <S.ModalCard>
        <S.ModalContentWrap>
          <S.ModalContent>{modalContent}</S.ModalContent>
        </S.ModalContentWrap>
        <S.ModalCloseBtn type="button" onClick={() => setModalState(false)}>
          닫기
        </S.ModalCloseBtn>
      </S.ModalCard>
    </S.ModalWrap>
  );
}

export default Modal;
