import { atom } from "recoil";

const toastState = atom({
  key: "toast",
  default: false,
});

export default toastState;
