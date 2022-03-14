import React, { forwardRef } from "react";

import * as S from "./style";
import { RecreationForest } from "src/api/getRecreationForestList";

type ItemProps = {
  data: RecreationForest;
  ref?: React.RefObject<HTMLLIElement>;
};

const Item = forwardRef<HTMLLIElement, ItemProps>(({ data }, ref) => {
  return (
    <S.Container ref={ref}>
      <div>{data.fcNm}</div>
      <div>{data.fcAddr}</div>
      <div>{data.ref1}</div>
    </S.Container>
  );
});

Item.displayName = "Item";

export default Item;
