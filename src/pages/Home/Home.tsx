import React, { MouseEvent, useState } from "react";
import FormModal from "src/components/FormModal";
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleBtnClick = () => {
    setModalOpen(true);
  };
  const initialMemo = "asdf" as string;
  return (
    <div>
      <button
        style={{ width: "300px", height: "200px", fontSize: "100px" }}
        onClick={handleBtnClick}
      >
        click
      </button>
      {modalOpen && (
        <FormModal
          setIsModalOpen={setModalOpen}
          name="속리산 숲 체험 휴양 마을"
          address="충청북도 보은군 속리산면 속리산로 596"
          tel="043-540-3220"
          initialMemo={initialMemo}
          handleSubmitBtn={
            (name, address, tel, memo) => console.log(name, address, tel, memo, "asdf")
            // 추가로직 작성
          }
          handleRemoveBtn={() => console.log("removed")}
        />
      )}
    </div>
  );
};

export default Home;
