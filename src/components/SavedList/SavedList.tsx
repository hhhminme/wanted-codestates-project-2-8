import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import * as S from "./style";

interface FilterMemo {
  contents: string;
  emdNm: string;
  fcAddr: string;
  fcAddrDetail: string;
  fcGbn: string;
  fcNm: number;
  fcNo: string;
  ref1: string;
  ref2: string;
  ref3: string;
  sggNm: string;
  siNm: string;
  wDate: string;
  xp: string;
  yp: string;
  zip: string;
}

interface Props {
  filteredMemo: FilterMemo[];
}

function SavedList({ filteredMemo }: Props) {
  const navigation = useNavigate();

  useEffect(() => {
    console.log(filteredMemo);
  }, []);

  return (
    <S.SavedListWrapper>
      {filteredMemo.length > 0 ? (
        filteredMemo.map((memo: FilterMemo, index: number) => {
          return (
            <S.CardWrapper key={index}>
              <S.Title>{memo.fcNm}</S.Title>
              <S.Line>{memo.fcAddr}</S.Line>
              <S.Line>{memo.ref1}</S.Line>
              <S.Line>메모</S.Line>
            </S.CardWrapper>
          );
        })
      ) : (
        <div>hihi</div>
      )}
      <S.AddMemo
        onClick={() => {
          navigation("/list");
        }}
      >
        <S.AddIcon />
      </S.AddMemo>
    </S.SavedListWrapper>
  );
}

export default SavedList;
