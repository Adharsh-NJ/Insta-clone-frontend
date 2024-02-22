import axios from "axios"

export const register =async (payload:any)=>{
    const body =payload
     const res = await axios.post("http://localhost:3001/api/auth/register",body)     
     return res
}
