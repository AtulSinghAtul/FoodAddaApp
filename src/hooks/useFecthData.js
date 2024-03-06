import { useEffect } from "react";
import aapStore from "../store/appStore";
import { useDispatch } from "react-redux";
import { addFilterData, addResData } from "../slices/resDataSlice";

const useFecthData = (RES_DATA_URL) => {
  const dispatch = useDispatch();

  async function fetchData() {
    const data = await fetch(RES_DATA_URL);

    const json = await data.json();
    console.log(json);

    const result =
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants;
    dispatch(addResData(result));
    dispatch(addFilterData(result));
  }

  useEffect(() => {
    fetchData();
    console.log("Use Effect Called");
  }, []);
};

export default useFecthData;
