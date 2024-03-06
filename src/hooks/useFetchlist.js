import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addResListData } from "../slices/resDataSlice";

const useFetchlist = (RES_LIST_URL) => {
  const dispatch = useDispatch();

  async function fetchList() {
    const list = await fetch(RES_LIST_URL);
    const json = await list.json();
    dispatch(addResListData(json?.data?.cards));
    console.log(json);
  }

  useEffect(() => {
    fetchList();
  }, []);
};

export default useFetchlist;
