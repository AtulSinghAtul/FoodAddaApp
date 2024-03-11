import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import { resCardPrice } from "./ResCard";

const ResContainer = ({ resList }) => {
  const ResCardPrice = resCardPrice(ResCard);

  return (
    <div>
      <Link to={resList?.info?.id ? `/reslist/` + resList?.info?.id : "/"}>
        {resList?.info?.costForTwo ? (
          <ResCardPrice resList={resList} />
        ) : (
          <ResCard resList={resList} />
        )}
      </Link>
    </div>
  );
};

export default ResContainer;
