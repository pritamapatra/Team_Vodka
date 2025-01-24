import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Dashboard from './Pages/Dashboard'
import InterviewBooking from './Pages/InterviewBooking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <InterviewBooking/>
        <Dashboard/>
        <LandingPage/>
        
    </>
  )
}

export default App
