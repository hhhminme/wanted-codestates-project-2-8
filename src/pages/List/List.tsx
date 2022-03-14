import React, { useEffect, useState } from "react";

import { RecreationForest, getRecreationForest } from "../../api/getRecreationForest";

const List = () => {
  const [data, setData] = useState<RecreationForest[] | []>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const updateData = async () => {
      const newData = await getRecreationForest(page);
      if (newData) {
        setData(newData);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    updateData();
  }, [page]);

  console.log(data);

  return (
    <div>
      <ul>
        {data.map((v, i) => (
          <li key={i}>
            <div>{v.fcNm}</div>
            <div>{v.fcAddr}</div>
            <div>{v.ref1}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
