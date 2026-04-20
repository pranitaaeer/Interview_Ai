
import { Link ,useNavigate} from 'react-router'
import '../auth.form.scss'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
import toast from "react-hot-toast"
const Login = () => {

    const {loading,handleLogin}=useAuth()
    const navigate=useNavigate()
    const [credentials,setcredentials]=useState("")
    const [password, setpassword] = useState("")

    const submitForm=async (e) => {
        e.preventDefault()
        const response=await handleLogin({credentials,password})
        console.log("response",response);
        if (response) {
            toast.success("user login successfully")
          navigate("/")
        } else {
            navigate("/login")
        }
            }
    if(loading){
        return <h1>Loading....</h1>
    }
  return (
    <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={submitForm}>
                    <div className="input-group">
                        <label htmlFor="email/username">Email/username</label>
                        <input
                        onChange={(e)=>setcredentials(e.target.value)}
                            type="text" id="email" name='email' placeholder='Enter email/username ' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                        onChange={(e)=>setpassword(e.target.value)}
                            type="password" id="password" name='password' placeholder='Enter password' />
                    </div>
                    <button className='button primary-button' >Login</button>
                </form>
                <p>Don't have an account? <Link to={"/register"} >Register</Link> </p>
            </div>
        </main>
  )
}

export default Login