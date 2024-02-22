import axios from "axios"

export const fetchUsers =async ()=>{
    const res = await axios(`http://localhost:3001/api/users/`)
    return res
}
 
