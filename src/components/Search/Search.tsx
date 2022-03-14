import React, { useEffect, useRef, useState } from "react";

import * as S from "./style";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { GrRefresh } from "react-icons/gr";

import { ClickedItem } from "../../pages/Home/Home";

interface SearchedProps {
  savedItem: ClickedItem[];
  setFilteredItem: React.Dispatch<React.SetStateAction<ClickedItem[]>>;
}

function Search({ savedItem, setFilteredItem }: SearchedProps) {
  const [selected, setSelected] = useState("이름");
  const [isShowOptions, setIsShowOptions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleSearchBar = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // console.log("enter!");
    }
  };

  const handleSelect = () => {
    setIsShowOptions(!isShowOptions);
  };

  const handleOption = (option: string) => {
    setSelected(option);
    setIsShowOptions(false);
  };

  return (
    <S.Container>
      <S.Select onClick={handleSelect}>
        <div>{selected}</div>
        {isShowOptions ? <BsChevronUp /> : <BsChevronDown />}
      </S.Select>
      {isShowOptions && (
        <S.Options>
          {["이름", "메모"].map((option) => (
            <S.Option key={option} onClick={() => handleOption(option)}>
              {option}
            </S.Option>
          ))}
        </S.Options>
      )}
      <S.Refresh>
        <GrRefresh />
      </S.Refresh>
      <S.Input
        type="search"
        placeholder="검색어를 입력해주세요"
        ref={inputRef}
        onKeyUp={handleSearchBar}
      />
    </S.Container>
  );
}

export default Search;
