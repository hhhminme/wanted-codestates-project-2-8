import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Start = () => {
  return (
    <S.WrapDiv>
      <div>
        <S.Title>
          아름다운 휴양림에서
          <br />
          새로운 나를 찾아보세요.
        </S.Title>
        <S.SubTitle>
          2022 원티드 프리온보딩 프론트엔드코스 2팀 <br />
          더블엔씨{" "}
        </S.SubTitle>
      </div>
      <S.Button>
        <Link to="/landing">바로 떠나기</Link>
      </S.Button>
    </S.WrapDiv>
  );
};

export default Start;
