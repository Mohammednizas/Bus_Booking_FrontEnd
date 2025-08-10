
import { Link } from 'react-router-dom';

const Navigation = () => {
   
  return (
    <nav className='nav'>
        <ul className='nav-title'>
            <li>Green Bus</li>
        </ul>
        <ul className="hovers">
             <li className='hide'>
                menu
            </li>
        <ul className='nav-side-title block' >
            <li>
                <Link to="/"className='link'>home</Link>
            </li>
            <li>
                <Link className='link' to="/bus/booking">booking</Link>
            </li>
            
            <li>
                <Link to="/login" className='link'>sign in</Link>
            </li>
            <li>
               <Link to="/sign" className='link'> login</Link>
            </li>
             <li>
               <Link to="/admin" className='link'>admin</Link>
            </li>
        </ul>
        </ul>
    </nav>
  )
}

export default Navigation;