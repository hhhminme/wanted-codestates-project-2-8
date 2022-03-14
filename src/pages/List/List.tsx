import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import Item from "src/components/Item";
import * as S from "./style";
import { RecreationForest, getRecreationForestList } from "../../api/getRecreationForestList";
import { Link } from "react-router-dom";

const List = () => {
  const [dataList, setDataList] = useState<RecreationForest[] | []>([]);
  const [page, setPage] = useState(1);

  const targetRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const dataPerPage = await getRecreationForestList(page);
    if (dataPerPage) {
      setDataList((prev) => [...prev, ...dataPerPage]);
      setPage((prev) => prev + 1);
    }
  };

  const onIntersect: IntersectionObserverCallback = async ([entry], io) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      await loadData();
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (targetRef.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [targetRef.current]);

  return (
    <S.Wrapper>
      <S.Nav>
        <Link to="/">
          <IoIosArrowBack size={30} />
        </Link>
      </S.Nav>
      <S.Main>
        <S.ListContainer>
          {dataList.map((data, idx) => {
            if (dataList.length === idx + 1) {
              return <Item key={idx} data={data} ref={targetRef} />;
            } else {
              return <Item key={idx} data={data} />;
            }
          })}
        </S.ListContainer>
      </S.Main>
    </S.Wrapper>
  );
};

export default List;
