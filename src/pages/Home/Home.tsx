import React, { useEffect, useState } from "react";

import SearchBar from '../../components/Search';
import SavedList from '../../components/SavedList';

import { data } from './data';


const Home = () => {
  const [filteredMemo, setFilterdMemo] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 가져오기
    setFilterdMemo(data);
  }, [filteredMemo])

  return (
    <div>
      <SearchBar filteredMemo={filteredMemo} setFilterdMemo={setFilterdMemo} />
      <SavedList filteredMemo={filteredMemo} />
    </div>
  );
};

export default Home;
