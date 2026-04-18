import { useState ,useEffect} from "react"
import "../style/navbar.scss"
import { useAuth } from "../../auth/hooks/useAuth"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { getMyinfo } from "../../auth/services/auth.api"
const Navbar = () => {

    const {handleLogout,user,setuser,setloading}=useAuth()
    const navigate=useNavigate()
     const [open, setOpen] = useState(false)

    const logoutHandler=async () => {
        await handleLogout()
        setuser(null)
        toast.success("user logout successfully")
        navigate("/login")
            
    }
    useEffect(() => {
        
                const getAndSetUser = async () => {
                    try {
        
                        const data = await getMyinfo()
                        setuser(data.user)
                        console.log("user from my info",data);

                    } catch (err) { } finally {
                        setloading(false)
                    }
                }
        
                getAndSetUser()
        
            }, [])
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar__logo" onClick={() => navigate("/")}>
                ⚡ InterviewAI
            </div>

            {/* User Section */}
            <div className="navbar__user">
                <div
                    className="user-icon"
                    onClick={() => setOpen(!open)}
                >
                    👤
                </div>

                {open && (
                    <div className="dropdown">
                        <p className="dropdown__user">Admin</p>
                        <button onClick={logoutHandler}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar