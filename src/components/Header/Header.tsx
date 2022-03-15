import React, { useState } from "react";

import * as S from "./style";
import { BsChevronLeft, BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router";

function Header() {
  const navigation = useNavigate();
  const [pageState, setPageState] = useState<number>(1);
  return (
    <S.Header>
      <S.Nav onClick={() => navigation("/landing")}>
        <BsChevronLeft size={30} />
      </S.Nav>
      {pageState !== 0 && (
        <S.AddMemo
          onClick={() => {
            navigation("/list");
          }}
        >
          <BsPlus />
        </S.AddMemo>
      )}
    </S.Header>
  );
}

export default Header;
