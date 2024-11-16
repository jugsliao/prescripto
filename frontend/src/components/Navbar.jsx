import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact </li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex item-center gap-4'>
        <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
      </div>
    </div>
  )
} 

export default Navbar