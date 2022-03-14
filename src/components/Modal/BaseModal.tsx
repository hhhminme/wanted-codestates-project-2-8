import React, { MutableRefObject, useCallback } from "react";
import { usePreventScroll } from "./ModalHooks/usePreventScroll";
import { useClickAway } from "./ModalHooks/useClickAway";
import * as S from "./style";
import { Props } from ".";

const BaseModal = ({ children, setIsModalOpen, isAway, ...props }: Props) => {
  usePreventScroll();

  const handleCloseBtn = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const ref = isAway ? useClickAway(handleCloseBtn) : null;

  return (
    <S.Dim>
      <S.Wrapper
        tabIndex={0}
        className="modal"
        ref={ref as MutableRefObject<HTMLDivElement>}
        {...props}
      >
        {children}
      </S.Wrapper>
    </S.Dim>
  );
};
export default BaseModal;
