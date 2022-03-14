import React, { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import Modal from "../Modal";
import Input from "./Input";
import * as S from "./style";

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  name: string;
  address: string;
  tel: string;
  initialMemo?: string;
  isEdit?: boolean;
  handleRemoveBtn?: () => void;
  handleSubmitBtn: (name: string, address: string, tel: string, memo: string) => void;
}

const FormModal = ({
  setIsModalOpen,
  name,
  address,
  tel,
  initialMemo = "",
  isEdit,
  handleRemoveBtn,
  handleSubmitBtn,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitClick = (e: MouseEvent<HTMLButtonElement>) => {
    const inputValue = inputRef.current?.value || "";

    handleSubmitBtn(name, address, tel, inputValue);
    setIsModalOpen(false);
  };

  const onRemoveClick = (e: MouseEvent<HTMLButtonElement>) => {
    handleRemoveBtn && handleRemoveBtn();
    setIsModalOpen(false);
  };
  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <S.ModalInner>
        <div>
          <S.Title>이름</S.Title>
          <S.Content>{name}</S.Content>
        </div>
        <div>
          <S.Title>주소</S.Title>
          <S.Content>{address}</S.Content>
        </div>
        <div>
          <S.Title>연락처</S.Title>
          <S.Content>{tel}</S.Content>
        </div>
        <div>
          <S.Title>메모</S.Title>
          <Input ref={inputRef} initialMemo={initialMemo} />
        </div>
        <S.BtnWrapper>
          {isEdit && (
            <>
              <S.Button isEdit isDelete onClick={onRemoveClick}>
                삭제
              </S.Button>
              <S.Button isEdit onClick={onSubmitClick}>
                수정
              </S.Button>
            </>
          )}
          {!isEdit && <S.Button onClick={onSubmitClick}>저장</S.Button>}
        </S.BtnWrapper>
      </S.ModalInner>
    </Modal>
  );
};
export default FormModal;
