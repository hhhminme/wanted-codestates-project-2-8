import React, { useEffect, useRef } from "react";

import * as S from "./style";

interface SearchProps {
  filteredMemo: string[];
  setFilteredMemo: React.Dispatch<React.SetStateAction<string[]>>;
}

function Search({ filteredMemo, setFilteredMemo }: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleSearchBar = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // console.log("enter!");
    }
  };

  return (
    <div>
      <S.Input
        type="search"
        placeholder="검색어를 입력해주세요"
        ref={inputRef}
        onKeyUp={handleSearchBar}
      />
    </div>
  );
}

export default Search;
