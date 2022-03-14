import React from "react";
import {
  MemoRequestMsg,
  MemoExistMsg,
  CompleteSavedMsg,
  CompleteRemovedMsg,
} from "../../components/toast/Toast";
const List = () => {
  return (
    <div>
      List
      <MemoRequestMsg />
      {/* <MemoExistMsg /> */}
      {/* <CompleteSavedMsg /> */}
      {/* <CompleteRemovedMsg /> */}
    </div>
  );
};

export default List;
