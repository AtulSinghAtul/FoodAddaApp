import React from "react";
import { RES_LIST_URL } from "../utility/constant";
import useFetchlist from "../hooks/useFetchlist";
import { useSelector } from "react-redux";

const ResList = () => {
  useFetchlist(RES_LIST_URL);
  const resList = useSelector((store) => store.app.resListData);

  console.log(resList);

  console.log("res list");
  return <div className="text-4xl font-bold">ResList</div>;
};

export default ResList;
