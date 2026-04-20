
import { Link ,useNavigate} from "react-router"
import { useAuth } from "../hooks/useAuth"
import toast from "react-hot-toast"
import { useState } from "react"
const register = () => {

     
    const {loading,handelSignup}=useAuth()
    const navigate=useNavigate()
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const submitHandler=async (e) => {
        e.preventDefault()
        const response=await handelSignup({username,email,password})

        if(response){
            toast.success(response.message || "user register successfully")
            navigate('/login')
        }else{
            navigate('/register')
        }
    }
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <main>
            <div className="form-container">
                <h1>Register</h1>

                <form onSubmit={submitHandler}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                           onChange={(e)=>setusername(e.target.value)}
                            type="text" id="username" name='username' placeholder='Enter username' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                           onChange={(e)=>setemail(e.target.value)}
                            type="email" id="email" name='email' placeholder='Enter email address' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e)=>setpassword(e.target.value)}
                            type="password" id="password" name='password' placeholder='Enter password' />
                    </div>

                    <button className='button primary-button' >Register</button>

                </form>

                <p>Already have an account? <Link to={"/login"} >Login</Link> </p>
            </div>
        </main>
  )
}

export default register