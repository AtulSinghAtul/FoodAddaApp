import ResCard from "./ResCard";
import { Link } from "react-router-dom";

const ResContainer = ({ resList }) => {
  return (
    <div>
      <Link to={resList?.info?.id ? `/reslist/` + resList?.info?.id : "/"}>
        <ResCard resList={resList} />
      </Link>
    </div>
  );
};

export default ResContainer;
