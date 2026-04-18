import './style.scss'
import { router } from "./app.route.jsx"
import { RouterProvider } from 'react-router'
import { AuthProvider } from './features/auth/auth.context.jsx'
import { Toaster } from "react-hot-toast"
import { InterviewProvider } from './features/interview/interview.context.jsx'

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <AuthProvider>
        <InterviewProvider>
          <RouterProvider router={router} />
        </InterviewProvider>
      </AuthProvider>
    </>
  )
}

export default App