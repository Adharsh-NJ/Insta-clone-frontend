import axios from "axios"

export const addLike =async (payload:any)=>{
    const body =payload
    const token = sessionStorage.getItem("user")
     const res = await axios.post("http://localhost:3001/api/likes",body,{data:body, headers: {"Authorization" : `Bearer ${token}`,"Content-Type": "multipart/form-data"} })  
     return res
}
