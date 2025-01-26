import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Dashboard from './Pages/Dashboard'
import InterviewBooking from './Pages/InterviewBooking'
import DiscussionForum from './Pages/DiscussionForums'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <DiscussionForum/>
        <InterviewBooking/>
        <Dashboard/>
        <LandingPage/>
        
    </>
  )
}

export default App
