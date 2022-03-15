import React, { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "src/constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import * as S from "./style";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import SavedList from "../../components/SavedList/SavedList";

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
  }, [savedItem]);

  return (
    <S.Container>
      <Header />
      <Search savedItem={savedItem} setFilteredItem={setFilteredItem} />
      <SavedList filtered={filtered} savedItem={savedItem} setSavedItem={setSavedItem} />
    </S.Container>
  );
};

export default Home;
