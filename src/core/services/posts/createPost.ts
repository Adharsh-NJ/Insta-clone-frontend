import axios from "axios"

export const createPost =async (payload:any)=>{
    const body =payload
    const token = sessionStorage.getItem("user")
     const res = await axios.post("http://localhost:3001/api/posts",body,{data:body, headers: {"Authorization" : `Bearer ${token}`,"Content-Type": "multipart/form-data"} })  
     return res
}
