import { useContext } from "react"
import { AuthContext } from "../Contexts/Context"

const useAuth=()=>{
    return useContext(AuthContext)
}
export default useAuth;