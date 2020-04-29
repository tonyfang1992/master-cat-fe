import axios from "axios";
import Swal from "sweetalert2";

const baseURL = "http://localhost:3001/api";

export const apiHelper = axios.create({
  baseURL,
});

export const Toast = Swal.mixin({
  toast: true,
  position: "center-end",
  showConfirmButton: false,
  timer: 3000,
});
