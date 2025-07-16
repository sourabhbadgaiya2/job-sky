import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Home/Footer'

import RecruitingSection from './Components/Home/RecruitingSection'
import ApplyJob from './pages/ApplyJob'
import HomePage from './pages/HomePage'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './Components/ScrollToTop'
import PostJobPage from './pages/PostJobPage'
import ViewJob from './pages/ViewJob'
import EmployerDash from './pages/EmployerDash'
import UserDash from './pages/UserDash'
import JobDetail from './pages/JobDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import UserList from './Components/UserList'
import EmployerRegister from './pages/EmployerRegister'
import Forgot from './pages/Forgot'
import RegisterLogin from './pages/RegisterLogin'
import Dashboard from './Components/admin/Dashboard'
import JobCategories from './Components/Home/JobCategories'
import CategoryJobsPage from './Components/Home/CategoryJobsPage'
// Add more pages as needed


const App = () => {
  return (
    <Router>
         <ScrollToTop />
      <div className="bg-[#E9EEFF] min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
             <Route path="/userlist" element={<UserList />} />
            <Route path="/" element={<HomePage/>} />
              <Route path="/apply" element={<ApplyJob />} />
               <Route path="/contact" element={<ContactUs />} />
               <Route path="/post-job" element={<PostJobPage />} />
               <Route path="/all-job" element={<ViewJob />} />
               <Route path="/employer-dash/*" element={<EmployerDash />} />
               <Route path="/user-dash/*" element={<UserDash />} />
                <Route path="/job-detail" element={<JobDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path='/employerRegister' element={<EmployerRegister/>}/>
                <Route path="/employeLogin" element={<RegisterLogin/>} />
                <Route path='/forgot-password' element={<Forgot/>}/>

                
            <Route path="/recruiting" element={<RecruitingSection />} />
            {/* Add more <Route /> elements here for other pages */}
            <Route path="/adminpanel" element={<Dashboard />} />

            <Route path="/" element={<JobCategories/>} />
<Route path="/jobs/category/:categoryId" element={<CategoryJobsPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
