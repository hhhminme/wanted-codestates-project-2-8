import React, { useState } from "react";

import * as S from "./style";

import { ClickedItem } from "../../pages/Home/Home";
import FormModal from "../FormModal";
import { CompleteRemovedMsg, CompleteSavedMsg, MemoRequestMsg } from "../toast/Toast";
import { useNavigate } from "react-router-dom";

interface Props {
  filtered: ClickedItem[];
  savedItem: ClickedItem[] | [];
  setSavedItem: (value: [] | ClickedItem[]) => void;
}

function SavedList({ filtered, savedItem, setSavedItem }: Props) {
  const navigation = useNavigate();
  const [clickedItem, setClickedItem] = useState<ClickedItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast1, setToast1] = useState(false);
  const [toast2, setToast2] = useState(false);
  const [toast3, setToast3] = useState(false);

  const handleItemClick = (data: ClickedItem) => {
    const { fcNo, fcNm, fcAddr, ref1, memo } = data;
    setClickedItem({ fcNo, fcNm, fcAddr, ref1, memo });
    setModalOpen(true);
  };

  const handleModalSubmit = (
    fcNo: number,
    name: string,
    address: string,
    tel: string,
    memo: string,
  ) => {
    if (!memo.length) {
      return setToast1((prev) => !prev);
    }
    const isSavedItem = savedItem.find((v) => v.fcNo === fcNo) as ClickedItem;
    isSavedItem.memo = memo;
    setSavedItem(savedItem);
    setModalOpen(false);
    setToast3((prev) => !prev);
  };
  const handleRemoveBtn = (fcNo: number) => {
    const newItemList = savedItem.filter((v) => v.fcNo !== fcNo);
    setSavedItem(newItemList);
    setModalOpen(false);
    setToast2((prev) => !prev);
  };

  return (
    <S.SavedListWrapper>
      {filtered.length > 0 ? (
        filtered.map((item, index) => {
          return (
            <S.CardWrapper key={index} onClick={() => handleItemClick(item)}>
              <S.CardImgWrap>
                <S.CardImg src="img/Saly-44.png"></S.CardImg>
              </S.CardImgWrap>
              <div>
                <S.Title>{item.fcNm}</S.Title>
                <S.Line>{item.fcAddr}</S.Line>
                <S.Line>{item.ref1}</S.Line>
                <S.Line>메모</S.Line>
              </div>
            </S.CardWrapper>
          );
        })
      ) : (
        <S.NoMemo>저장한 메모가 없습니다.</S.NoMemo>
      )}
      {modalOpen && clickedItem && (
        <FormModal
          setIsModalOpen={setModalOpen}
          fcNo={clickedItem.fcNo}
          name={clickedItem.fcNm}
          address={clickedItem.fcAddr}
          tel={clickedItem.ref1}
          initialMemo={clickedItem.memo}
          handleSubmitBtn={handleModalSubmit}
          handleRemoveBtn={handleRemoveBtn}
          isEdit
          isAway
        />
      )}
      {toast1 && <MemoRequestMsg />}
      {toast2 && <CompleteRemovedMsg />}
      {toast3 && <CompleteSavedMsg />}
    </S.SavedListWrapper>
  );
}

export default SavedList;
