import { useEffect } from "react";
import aapStore from "../store/appStore";
import { useDispatch } from "react-redux";
import { addResData } from "../slices/resDataSlice";

const useFecthData = (RES_DATA_URL) => {
  const dispatch = useDispatch();

  async function fetchData() {
    const data = await fetch(RES_DATA_URL);

    const json = await data.json();

    const result =
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants;
    dispatch(addResData(result));
  }

  useEffect(() => {
    fetchData();
  }, []);
};

export default useFecthData;
