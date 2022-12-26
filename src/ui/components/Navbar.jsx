import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { useContext } from 'react';

export const Navbar = () => {


    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogOut = () => {
        logout()
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end p-1">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-warning'>
                        {user?.name}
                    </span>
                    <button
                        className=' nav-item nav-link btn'
                        onClick={handleLogOut}
                    >LogOut</button>
                </ul>
            </div>
        </nav>
    )
}


