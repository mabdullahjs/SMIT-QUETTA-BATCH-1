import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
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
import { Provider } from 'react-redux'
import { store } from './config/redux/store/store.js'

createRoot(document.getElementById('root')).render(
        <Provider store={store}>
                <BrowserRouter>
                        <Routes>
                                <Route index element={<Dashboard />} />
                                <Route path='login' element={<Login />} />
                                <Route path='students'>
                                        <Route index element={<Student />} />
                                        <Route path='dashboard' element={<StudentDashboard />} />
                                        <Route path='add' element={<AddStudent />} />

                                </Route>
                                <Route path='courses'>
                                        <Route index element={<Courses />} />
                                        <Route path='add' element={<AddCourse />} />
                                </Route>
                                <Route path='assign-course' element={<AssignCourse />} />
                                <Route path='my-courses' element={<MyCourse />} />
                                <Route path='profile' element={<Profile />} />
                        </Routes>
                </BrowserRouter>
        </Provider>
)
