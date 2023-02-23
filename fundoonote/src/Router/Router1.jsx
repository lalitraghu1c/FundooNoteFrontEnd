import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp'
import Dashboard from '../Pages/DashBoard/DashBoard'

function Router1() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/signUp' element={<SignUp/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default Router1
