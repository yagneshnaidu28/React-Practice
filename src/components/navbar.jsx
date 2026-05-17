import React from "react";
import { Link } from "react-router-dom";
function NavBarr(){
    return(
        <>
        <nav>
            <ul>
                <li> <Link to='/home'>Home</Link></li>
                <li><Link to='contact'>Contact</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li><Link to='/user'>User</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default NavBarr;