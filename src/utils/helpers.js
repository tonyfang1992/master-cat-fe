import axios from "axios";
import Swal from "sweetalert2";
let baseURL = "http://localhost:3001/api";
if (process.env.NODE_ENV === "production") {
  baseURL = "https://master-cat-be.herokuapp.com/api";
}
export const apiHelper = axios.create({
  baseURL,
});

export const Toast = Swal.mixin({
  toast: true,
  position: "center-end",
  showConfirmButton: false,
  timer: 3000,
});
