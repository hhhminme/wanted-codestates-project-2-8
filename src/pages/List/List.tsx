import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import Item from "src/components/Item";
import * as S from "./style";
import { RecreationForest, getRecreationForestList } from "../../api/getRecreationForestList";
import { Link } from "react-router-dom";
import FormModal from "src/components/FormModal";
import { LOCAL_STORAGE_KEY } from "src/constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { MemoRequestMsg, MemoExistMsg } from "../../components/toast/Toast";

interface ClickedItem {
  fcNo: number;
  fcNm: string;
  fcAddr: string;
  memo: string;
  ref1: string;
}
const List = () => {
  const [dataList, setDataList] = useState<RecreationForest[] | []>([]);
  const [page, setPage] = useState(1);
  const [clickedItem, setClickedItem] = useState<ClickedItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [savedItem, setSavedItem] = useLocalStorage<ClickedItem[] | []>(LOCAL_STORAGE_KEY, []);
  const [toast1, setToast1] = useState(false);
  const [toast2, setToast2] = useState(false);
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

  const handleItemClick = (data: RecreationForest) => {
    const { fcNo, fcNm, fcAddr, ref1 } = data;
    setClickedItem({ fcNo, fcNm, fcAddr, ref1, memo: "" });
    setModalOpen(true);
  };

  const handleModalSubmit = (
    fcNo: number,
    name: string,
    address: string,
    tel: string,
    memo: string,
  ) => {
    if (!memo.length) {
      return setToast1((prev) => !prev);
    }
    const isSavedItem = savedItem.find((v) => v.fcNo === fcNo);

    if (isSavedItem) {
      setToast2((prev) => !prev);
      return setModalOpen(false);
    }

    setSavedItem([...savedItem, { fcNo, fcNm: name, fcAddr: address, ref1: tel, memo }]);
    setModalOpen(false);
  };
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
              return (
                <Item key={idx} data={data} ref={targetRef} handleItemClick={handleItemClick} />
              );
            } else {
              return <Item key={idx} data={data} handleItemClick={handleItemClick} />;
            }
          })}
        </S.ListContainer>
      </S.Main>
      {modalOpen && clickedItem && (
        <FormModal
          setIsModalOpen={setModalOpen}
          fcNo={clickedItem.fcNo}
          name={clickedItem.fcNm}
          address={clickedItem.fcAddr}
          tel={clickedItem.ref1}
          handleSubmitBtn={handleModalSubmit}
          isAway
        />
      )}
      {toast1 && <MemoRequestMsg />}
      {toast2 && <MemoExistMsg />}
    </S.Wrapper>
  );
};

export default List;
