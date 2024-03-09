import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addResListData } from "../slices/resDataSlice";
import { useParams } from "react-router-dom";

const useFetchlist = (RES_LIST_URL) => {
  const params = useParams();
  // console.log(params);
  const dispatch = useDispatch();

  async function fetchList() {
    const list = await fetch(RES_LIST_URL + params.resId);
    const json = await list.json();
    dispatch(addResListData(json?.data?.cards));
    // console.log(json);
  }

  useEffect(() => {
    fetchList();
  }, []);
};

export default useFetchlist;
