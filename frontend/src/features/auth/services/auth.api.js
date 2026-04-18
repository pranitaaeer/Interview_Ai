import axios from "axios"

const api=axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export const register=async({username,email,password})=>{
 try {
    const response= await api.post("/api/auth/signup",{
        username,email,password
    })
    return response.data
 } catch (error) {
    console.log(error);
 }
}


export const login=async ({credentials,password}) => {
    try {
        const response=await api.post("/api/auth/login",{
            credentials,password
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const logout=async () => {
    try {
        const response=await api.get("/api/auth/logout")
        return response.data
        
    } catch (error) {
        console.log(error);
    }
}

export const getMyinfo=async () => {
    try {
        const response=await api.get("/api/auth/me")
        console.log("responseData",response.data.user);
        return response.data.user
    } catch (error) {
        console.log(error);
    }
}