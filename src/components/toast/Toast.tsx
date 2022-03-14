import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface FeedbackProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  top?: string;
  left?: string;
  opacity?: string;
}

export function MemoRequestMsg() {
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    softRemover();
  }, [opacity]);

  function softRemover() {
    if (opacity > 95) {
      console.log("시작1");
      setTimeout(() => {
        setOpacity(opacity - 1);
      }, 1000);
    } else if (opacity > 4) {
      console.log("시작2");
      setTimeout(() => {
        setOpacity(opacity - 5);
      }, 30);
    }
  }
  return (
    <MsgContainer
      height={"60px"}
      width={"210px"}
      fontSize={"18px"}
      top={"10%"}
      left={"70%"}
      opacity={`${opacity}%`}
    >
      메모를 입력해주세요.
    </MsgContainer>
  );
}

export function MemoExistMsg() {
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    softRemover();
  }, [softRemover]);

  function softRemover() {
    if (opacity > 95) {
      setTimeout(() => {
        setOpacity(opacity - 1);
      }, 1000);
    } else if (opacity > 4)
      setTimeout(() => {
        setOpacity(opacity - 5);
      }, 30);
  }
  return (
    <MsgContainer
      height={"60px"}
      width={"210px"}
      fontSize={"18px"}
      top={"10%"}
      left={"70%"}
      opacity={`${opacity}%`}
    >
      이미 등록되었습니다.
    </MsgContainer>
  );
}

export function CompleteSavedMsg() {
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    softRemover();
  }, [softRemover]);

  function softRemover() {
    if (opacity > 95) {
      setTimeout(() => {
        setOpacity(opacity - 1);
      }, 1000);
    } else if (opacity > 4)
      setTimeout(() => {
        setOpacity(opacity - 5);
      }, 30);
  }

  return (
    <MsgContainer
      height={"60px"}
      width={"275px"}
      fontSize={"18px"}
      backgroundColor={"#85F9CF "}
      top={"13%"}
      opacity={`${opacity}%`}
    >
      저장이 완료되었습니다.
    </MsgContainer>
  );
}

export function CompleteRemovedMsg() {
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    softRemover();
  }, [softRemover]);

  function softRemover() {
    if (opacity > 95) {
      setTimeout(() => {
        setOpacity(opacity - 1);
      }, 1000);
    } else if (opacity > 4)
      setTimeout(() => {
        setOpacity(opacity - 5);
      }, 30);
  }
  return (
    <MsgContainer
      height={"60px"}
      width={"275px"}
      fontSize={"18px"}
      top={"55%"}
      opacity={`${opacity}%`}
    >
      삭제가 완료되었습니다.
    </MsgContainer>
  );
}

export const MsgContainer = styled.div<FeedbackProps>`
  background-color: ${(props) => props.backgroundColor || "#FF6B6B"};
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "62px"};
  line-height: ${(props) => props.height || "62px"};
  color: ${(props) => props.color || "#ffffff"};
  font-size: ${(props) => props.fontSize || "16px"};
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
  opacity: ${(props) => props.opacity || "100%"};
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  font-weight: 700;
  border-radius: 15px;
  text-align: center;
  position: fixed;
  z-index: 100;
`;
