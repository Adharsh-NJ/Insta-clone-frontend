import axios from "axios"

export const addComment=async(payload:{post:string,content:string})=>{
    const body = payload
    const token = sessionStorage.getItem("user")
    const res = axios.post("http://localhost:3001/api/comments",body,{headers: {"Authorization" : `Bearer ${token}`,"Content-Type": "multipart/form-data"}})
   return res
}