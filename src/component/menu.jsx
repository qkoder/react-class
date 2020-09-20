import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/faq'>Faq</Link>
            </div>
        );
    }
}

export default Menu;