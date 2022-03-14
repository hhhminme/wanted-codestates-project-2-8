import React, { useState } from "react";
import Modal from "src/components/Modal";

const Home = () => {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState("hello");

  const handleClick = () => {
    setModalState(true);
  };
  return (
    <>
      <button onClick={handleClick}>버튼버튼</button>
      <div>{modalState && <Modal modalContent={modalContent} setModalState={setModalState} />}</div>
    </>
  );
};

export default Home;
