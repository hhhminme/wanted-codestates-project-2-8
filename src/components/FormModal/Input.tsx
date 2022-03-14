import React, { ChangeEvent, ForwardedRef, forwardRef, useCallback, useState } from "react";
import * as S from "./style";
interface Props {
  initialMemo: string;
}
const Input = ({ initialMemo }: Props, ref: ForwardedRef<HTMLInputElement>) => {
  const [memo, setMemo] = useState(initialMemo);
  const handleMemoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  };
  return (
    <S.Input ref={ref} placeholder="내용을 입력해주세요" value={memo} onChange={handleMemoChange} />
  );
};
export default forwardRef(Input);
