import axios from "axios";

export type RecreationForestListResponse = {
  response: RecreationForest[];
};

export type RecreationForest = {
  contents: string;
  emdNm: string;
  fcAddr: string;
  fcaddrDetail: string;
  fcGbn: string;
  fcNm: string;
  fcNo: number;
  ref1: string;
  ref2: string;
  ref3: string;
  ssgNm: string;
  siNm: string;
  wDate: string;
  xp: string;
  yp: string;
  zip: string;
};

export const getRecreationForestList = async (page: number) => {
  try {
    const res = await axios.get<string>(
      `/openapi-json/pubdata/pubMapForest.do?numOfRows=10&pageNo=${page}`,
    );

    const parsedData = JSON.parse(res.data) as RecreationForestListResponse;
    return parsedData.response;
  } catch (err) {
    console.error(err);
  }
};
