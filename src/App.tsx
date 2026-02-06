import { useState } from 'react'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <>
      {showDashboard ? (
        <Dashboard />
      ) : (
        <Home onNavigate={() => setShowDashboard(true)} />
      )}
    </>
  )
}

export default App
