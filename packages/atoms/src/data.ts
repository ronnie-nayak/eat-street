import { atom } from "recoil";

export const dataState = atom({
  key: "dataState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const favouritesState = atom({
  key: "favouritesState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const cartsState = atom({
  key: "cartsState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const idState = atom({
  key: "idState", // unique ID (with respect to other atoms/selectors)
  default: 1234567890, // default value (aka initial value)
});
