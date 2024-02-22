import axios from "axios"

const follow = async (id:string)=>{
    const body = {
        userId:id
    }
    const token = sessionStorage.getItem("user")
     const res = await axios.post("http://localhost:3001/api/following/",body,{ headers: {"Authorization" : `Bearer ${token}`}})
    return res
}

export {follow}