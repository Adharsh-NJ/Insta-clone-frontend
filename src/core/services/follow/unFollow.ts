import axios from "axios"

const unFollow = async (id:string)=>{
    const token = sessionStorage.getItem("user")
     const res = await axios.delete(`http://localhost:3001/api/following/${id}`,{ headers: {"Authorization" : `Bearer ${token}`}})
    return res
}

export {unFollow}