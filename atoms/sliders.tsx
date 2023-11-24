import { atom } from "recoil";

export const slider1State = atom({
  key: 'slider1State', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
