import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Start = () => {
  const navigate = useNavigate();
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
      <S.Button onClick={() => navigate("/landing")}>찾아보기</S.Button>
    </S.WrapDiv>
  );
};

export default Start;
