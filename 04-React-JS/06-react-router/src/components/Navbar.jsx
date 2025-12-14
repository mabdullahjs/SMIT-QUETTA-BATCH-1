import { Link, useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div style={{
      display:'flex',
      justifyContent: 'center',
      gap: '20px',
      fontSize: '2rem'

    }}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      <button onClick={()=>navigate('/service')}>service</button>
    </div>
  )
}

export default Navbar