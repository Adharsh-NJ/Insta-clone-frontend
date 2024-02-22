import axios from "axios"

export const removeLike = async(payload:any)=>{
    const id =payload
    const token = sessionStorage.getItem("user")
     const res = await axios.delete(`http://localhost:3001/api/likes/${id}`,{ headers: {"Authorization" : `Bearer ${token}`,"Content-Type": "multipart/form-data"} })  
     return res
}