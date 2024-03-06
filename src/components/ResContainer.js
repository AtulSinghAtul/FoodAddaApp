import React from "react";
import ResCard from "./ResCard";

const ResContainer = ({ resList }) => {
  return <div>{<ResCard resList={resList} />}</div>;
};

export default ResContainer;
