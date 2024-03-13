// export const RES_DATA_URL =
//   "https://www.swiggy.com/mapi/homepage/getCards?lat=25.4358011&lng=81.846311";

export const RES_DATA_URL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/mapi/homepage/getCards?lat=25.4358011&lng=81.846311"
  );

// export const RES_LIST_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=`;

export const RES_LIST_URL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId="
  );

export const RES_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
