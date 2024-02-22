import axios from "axios"

export const getPosts =async ()=>{
    const token = sessionStorage.getItem("user")
     const res = await axios.get("http://localhost:3001/api/posts",{ headers: {"Authorization" : `Bearer ${token}`} })  
     return res
}
