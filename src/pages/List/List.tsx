import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import Item from "src/components/Item";
import * as S from "./style";
import { RecreationForest, getRecreationForestList } from "../../api/getRecreationForestList";

const List = () => {
  const [dataList, setDataList] = useState<RecreationForest[] | []>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const updateData = async () => {
      const newData = await getRecreationForestList(page);
      if (newData) {
        setDataList(newData);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    updateData();
  }, [page]);

  return (
    <S.Wrapper>
      <S.Nav>
        <button type="button">
          <IoIosArrowBack size={30} />
        </button>
      </S.Nav>
      <S.Main>
        <S.ListContainer>
          {dataList.map((data, idx) => (
            <Item key={idx} data={data} />
          ))}
        </S.ListContainer>
      </S.Main>
    </S.Wrapper>
  );
};

export default List;
