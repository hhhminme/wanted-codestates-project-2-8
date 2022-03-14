import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Start = () => {
  return (
    <S.WrapDiv>
      <div>
        <S.Title>
          아름다운 <span>휴양림</span>에서
          <br />
          새로운 <span>나</span>를
          <br />
          찾아보세요.
        </S.Title>
      </div>
      <S.ImgBtm src="img/Saly-16.png" />
      <S.Button className="bubbly-button">
        <Link to="/landing">찾아보기</Link>
      </S.Button>
    </S.WrapDiv>
  );
};

export default Start;
