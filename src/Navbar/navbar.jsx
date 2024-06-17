import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {

    return(

        <div className='navBar'>

            <Link to="/" className='title-link'>
                <h1>PostPie</h1>
            </Link>

            <div className="links">
                <Link to='/documentation' className='nav-link'>Documentation</Link>
                <Link to='/releases' className='nav-link'>Releases</Link>
                <Link to='/news' className='nav-link'>News</Link>
                {/*<Link to='/signup'>SignUp</Link>*/}
            </div>


        </div>
)
}

export default Navbar;