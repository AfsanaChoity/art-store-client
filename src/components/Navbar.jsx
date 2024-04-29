import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/updateProfile'>All Art & craft Items</NavLink></li>
    <li><NavLink to='/userProfile'>Add Craft Item</NavLink></li>
    <li><NavLink to='/userProfile'>My Art&Craft List</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    <li><NavLink to='/contact'>About Us</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLinks}
                        </ul>
                    </div>
                    <img className="w-12 h-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHfwk6BZCs_aDw3lqb3iVIhMNOIVDvxfIq2i3YxckIQ&s" alt="img" />
                    <a className="btn btn-ghost text-xl">Crafty Castle</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <NavLink to='/login' className="btn">Log in</NavLink>
                    <NavLink to='/register' className="btn">Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;