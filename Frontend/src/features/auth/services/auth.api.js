// import axios from "axios"


// const api = axios.create({
//     baseURL: "https://interview-ai-2mm1.onrender.com/",
//     withCredentials: true
// })

// export async function register({ username, email, password }) {

//     try {
//         const response = await api.post('/api/auth/register', {
//             username, email, password
//         })

//         return response.data

//     } catch (err) {

//         console.log(err)

//     }

// }

// export async function login({ email, password }) {

//     try {

//         const response = await api.post("/api/auth/login", {
//             email, password
//         })

//         return response.data

//     } catch (err) {
//         console.log(err)
//     }

// }

// export async function logout() {
//     try {

//         const response = await api.get("/api/auth/logout")

//         return response.data

//     } catch (err) {

//     }
// }

// export async function getMe() {

//     try {

//         const response = await api.get("/api/auth/get-me")

//         return response.data

//     } catch (err) {
//         console.log(err)
//     }

// }

import axios from "axios"

const api = axios.create({
    // Axios mein URLs concat karte waqt double slash avoid karne ke liye baseURL bina trailing slash ke rakhein
    baseURL: "https://interview-ai-2mm1.onrender.com",
    withCredentials: true
})

export async function register({ username, email, password }) {
    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })
        return response.data
    } catch (err) {
        // Server se aaye error message ko pass karein, warna generic error message
        const errorMessage = err.response?.data?.message || "Registration failed. Please try again."
        console.error("Register Error:", errorMessage)
        throw new Error(errorMessage)
    }
}

export async function login({ email, password }) {
    try {
        const response = await api.post("/api/auth/login", {
            email, password
        })
        return response.data
    } catch (err) {
        const errorMessage = err.response?.data?.message || "Login failed. Invalid credentials."
        console.error("Login Error:", errorMessage)
        throw new Error(errorMessage)
    }
}

export async function logout() {
    try {
        const response = await api.get("/api/auth/logout")
        return response.data
    } catch (err) {
        const errorMessage = err.response?.data?.message || "Logout failed."
        console.error("Logout Error:", errorMessage)
        throw new Error(errorMessage)
    }
}

export async function getMe() {
    try {
        const response = await api.get("/api/auth/get-me")
        return response.data
    } catch (err) {
        const errorMessage = err.response?.data?.message || "Unauthorized / User not found."
        console.error("GetMe Error:", errorMessage)
        throw new Error(errorMessage)
    }
}