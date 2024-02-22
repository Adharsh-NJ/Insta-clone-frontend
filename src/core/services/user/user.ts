import axios from "axios"

export const fetchUser =async (id:any)=>{
    const res = await axios(`http://localhost:3001/api/users/${id}`)
    return res
}
 
