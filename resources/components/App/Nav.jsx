
import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/liste-des-contacts">List contacts</Link></li>
                <li><Link to="/ajouter-un-contact">Add new contacts</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;