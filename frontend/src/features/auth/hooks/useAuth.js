import { useContext ,useEffect} from "react"
import { Authcontext } from "../auth.context"
import { getMyinfo, login, logout, register } from "../services/auth.api.js"


export const useAuth=()=>{

    const context=useContext(Authcontext)
    const {user,setuser,loading,setloading}=context

    const handelSignup=async ({username,email,password}) => {
        setloading(true)
        try {
            const data=await register({username,email,password})
            setuser(data.user)
            return data
        } catch (error) {
            
        }finally{
            setloading(false)
        }
    }



    const handleLogin=async ({credentials,password}) => {
        setloading(true)
        try {
            const data=await login({credentials,password})
            setuser(data.user)
            return data
        } catch (error) {
            
        }finally{
            setloading(false)
        }
    }

     const handleLogout=async () => {
        setloading(true)
        try {
            const response=await logout()
            setuser(null)
            return response.data
        } catch (error) {
            
        }finally{
            setloading(false)
        }
    }

    
    
    return {handleLogin,handelSignup,handleLogout,user,loading,setuser,setloading}
}