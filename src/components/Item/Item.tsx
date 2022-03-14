import React from "react";

import * as S from "./style";
import { RecreationForest } from "src/api/getRecreationForestList";

type ItemProps = {
  data: RecreationForest;
};

const Item = ({ data }: ItemProps) => {
  return (
    <S.Container>
      <div>{data.fcNm}</div>
      <div>{data.fcAddr}</div>
      <div>{data.ref1}</div>
    </S.Container>
  );
};

export default Item;
