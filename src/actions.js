import axios from "axios";
import { toast } from 'react-toastify';
export const NOT_EKLE = "NOT_EKLE"
export const NOT_SIL = "NOT_SIL"

export function notEkle(not) {
  return {type: NOT_EKLE, payload: not}
}

export function notSil(notId) {
  return {type: NOT_SIL, payload: notId}
}

export const notEkleAPI = (yeniNot) => dispatch => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        dispatch(notEkle(res.data.json))
        toast.success("Başarıyla eklendi")
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
      }
    })
    .catch((error) => console.log(error));
}

export const notSilAPI = (id) => dispatch => {
  console.log(id)
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        dispatch(notSil(res.data.json))
        toast.success("Başarıyla silindi")
      }
    })
    .catch((error) => console.log(error));
}
 