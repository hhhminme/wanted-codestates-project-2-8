import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Modal from "../Modal";
import Input from "./Input";
import * as S from "./style";

interface Props {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  fcNo: number;
  name: string;
  address: string;
  tel: string;
  initialMemo?: string;
  isEdit?: boolean;
  isAway?: boolean;
  handleRemoveBtn?: (fcNo: number) => void;
  handleSubmitBtn: (fcNo: number, name: string, address: string, tel: string, memo: string) => void;
}

const FormModal = ({
  setIsModalOpen,
  fcNo,
  name,
  address,
  tel,
  initialMemo = "",
  isEdit,
  isAway,
  handleRemoveBtn,
  handleSubmitBtn,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitClick = () => {
    const inputValue = inputRef.current?.value || "";

    handleSubmitBtn(fcNo, name, address, tel, inputValue);
  };

  const onRemoveClick = () => {
    handleRemoveBtn && handleRemoveBtn(fcNo);
  };

  return (
    <Modal setIsModalOpen={setIsModalOpen} isAway={isAway}>
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
