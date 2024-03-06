import React from "react";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";

const ResContainer = ({ resList }) => {
  return (
    <div>
      {
        <Link to="/reslist">
          <ResCard resList={resList} />
        </Link>
      }
    </div>
  );
};

export default ResContainer;
