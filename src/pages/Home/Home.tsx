import React, { useEffect, useState } from "react";

import Search from "../../components/Search/Search";
import SavedList from "../../components/SavedList/SavedList";
import * as S from "./style";

import { data } from "./data";

export interface FilterMemo {
  contents: string;
  emdNm: string;
  fcAddr: string;
  fcAddrDetail: string;
  fcGbn: string;
  fcNm: number;
  fcNo: string;
  ref1: string;
  ref2: string;
  ref3: string;
  sggNm: string;
  siNm: string;
  wDate: string;
  xp: string;
  yp: string;
  zip: string;
}

interface realType {
  response: FilterMemo[];
}
interface Props {
  filteredMemo: realType;
}

const Home = () => {
  const [filteredMemo, setFilteredMemo] = useState<FilterMemo[]>([]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 가져오기
    // const localData = JSON.parse(window.localStorage.getItem("key"));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    setFilteredMemo(data.response as FilterMemo[]);
    console.log(filteredMemo);
  }, [filteredMemo]);

  return (
    <S.Container>
      <Search filteredMemo={filteredMemo} setFilteredMemo={setFilteredMemo} />
      <SavedList filteredMemo={filteredMemo} />
    </S.Container>
  );
};

export default Home;
