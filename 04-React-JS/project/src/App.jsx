import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './pages/Admin/Dashboard.jsx'
import Login from './pages/Admin/Login.jsx'
import Student from './pages/Admin/student/Student.jsx'
import StudentDashboard from './pages/Admin/student/StudentDashboard.jsx'
import AddStudent from './pages/Admin/student/AddStudent.jsx'
import Courses from './pages/Admin/courses/Courses.jsx'
import AddCourse from './pages/Admin/courses/AddCourse.jsx'
import AssignCourse from './pages/Admin/AssignCourse.jsx'
import MyCourse from './pages/Student/MyCourse.jsx'
import Profile from './pages/Student/Profile.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import Navbar from './components/Navbar.jsx'
import { useAuthListener } from './hooks/useAuthListner.js'

const App = () => {
  useAuthListener()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path='login' element={<Login />} />
        {/* Protected Route */}

        {/* PROTECTED */}
        <Route
          index
          element={<ProtectedRoutes component={<Dashboard />} role={['Admin']} />}
        />

        <Route
          path="students"
          element={<ProtectedRoutes component={<Student />} role={['Admin']} />}
        />

        <Route
          path="students/dashboard"
          element={<ProtectedRoutes component={<StudentDashboard />} role={['Admin']} />}
        />

        <Route
          path="students/add"
          element={<ProtectedRoutes component={<AddStudent />} role={['Admin']} />}
        />

        <Route
          path="courses"
          element={<ProtectedRoutes component={<Courses />} role={['Admin']} />}
        />

        <Route
          path="courses/add"
          element={<ProtectedRoutes component={<AddCourse />} role={['Admin']} />}
        />

        <Route
          path="assign-course"
          element={<ProtectedRoutes component={<AssignCourse />} role={['Admin']} />}
        />

        <Route
          path="my-courses"
          element={<ProtectedRoutes component={<MyCourse />} role={['Student']} />}
        />

        <Route
          path="profile"
          element={<ProtectedRoutes component={<Profile />} role={['Student']} />}
        />


      </Routes>
    </BrowserRouter>
  )
}

export default App