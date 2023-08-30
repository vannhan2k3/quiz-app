import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Link } from 'react-router-dom';
Header.propTypes = {
    
};

function Header(props) {
    return (
        <div className='header'>
            <ul className='header-list'>
                <li className='item active'><Link to='/'>HOME</Link></li>
                <li className='item'><Link to='/todo'>ToDo</Link></li>
                <li className='item'><Link to='/news'>News</Link></li>
                <li className='item'><Link to='/contacts'>Contacts</Link></li>
               
            </ul>
        </div>
    );
}

export default Header;