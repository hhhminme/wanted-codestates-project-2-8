import React, { forwardRef } from "react";

import * as S from "./style";
import { RecreationForest } from "src/api/getRecreationForestList";

type ItemProps = {
  data: RecreationForest;
  ref?: React.RefObject<HTMLLIElement>;
  handleItemClick: (data: RecreationForest) => void;
};

const Item = forwardRef<HTMLLIElement, ItemProps>(({ data, handleItemClick }, ref) => {
  return (
    <S.Container ref={ref} onClick={() => handleItemClick(data)}>
      <S.CardImgWrap>
        <S.CardImg src="img/Saly-44.png"></S.CardImg>
      </S.CardImgWrap>
      <S.ContentWrap>
        <S.ItemTitle>{data.fcNm}</S.ItemTitle>
        <S.ItemSubTitle>{data.fcAddr}</S.ItemSubTitle>
        <S.ItemSubTitle>{data.ref1}</S.ItemSubTitle>
      </S.ContentWrap>
    </S.Container>
  );
});

Item.displayName = "Item";

export default Item;
