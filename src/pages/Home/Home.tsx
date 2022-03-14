import React, { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "src/constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import Search from "../../components/Search/Search";
import SavedList from "../../components/SavedList/SavedList";
import * as S from "./style";

export interface ClickedItem {
  fcNo: number;
  fcNm: string;
  fcAddr: string;
  memo: string;
  ref1: string;
}

const Home = () => {
  const [savedItem, setSavedItem] = useLocalStorage<ClickedItem[] | []>(LOCAL_STORAGE_KEY, []);
  const [filtered, setFilteredItem] = useState<ClickedItem[]>([]);

  useEffect(() => {
    setFilteredItem(savedItem);
  }, []);

  return (
    <S.Container>
      <Search savedItem={savedItem} setFilteredItem={setFilteredItem} />
      <SavedList filtered={filtered} />
    </S.Container>
  );
};

export default Home;
