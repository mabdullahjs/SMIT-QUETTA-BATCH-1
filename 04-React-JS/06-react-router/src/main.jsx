import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './components/Footer.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Student from './pages/Dashboard/Student.jsx';
import Campus from './pages/Dashboard/Campus.jsx';
import Manager from './pages/Dashboard/Manager.jsx';
import Courses from './pages/Dashboard/Courses.jsx';
import Product from './pages/Product.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='*' element={<h1>Not found</h1>} />
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='service' element={<Services />} />
      <Route path='product/:id' element={<Product />} />
      <Route path='dashboard' element={<Dashboard />}>
        <Route index element={<Student />} />
        <Route path='campus' element={<Campus />} />
        <Route path='manager' element={<Manager />} />
        <Route path='courses' element={<Courses />} />
      </Route>
    </Routes>
  </BrowserRouter>
)



// nested routing
// dynamic routing