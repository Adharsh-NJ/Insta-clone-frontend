import axios from "axios"

export const login =async (payload:any)=>{
    const body =payload
     const res = await axios.post("http://localhost:3001/api/auth/login",body)   
     if(res.status===200){
        sessionStorage.setItem("user",res.data.token)
        sessionStorage.setItem("userId",res.data.id)
     } 
     return res 
}
