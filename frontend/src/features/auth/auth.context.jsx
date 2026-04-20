import { createContext,useState,useEffect} from "react";
export const Authcontext=createContext()


export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const initUser = async () => {
            try {
                const data = await getMyinfo()
                setuser(data.user)
            } catch (err) {
                setuser(null)
            } finally {
                setloading(false)
            }
        }

        initUser()
    }, [])

    return (
        <Authcontext.Provider value={{
            user,
            setuser,
            loading,
            setloading
        }}>
            {children}
        </Authcontext.Provider>
    )
}