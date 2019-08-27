import React from 'react'
import { Link } from 'gatsby';

function Navbar () {
    let pages = [{
            url: '/',
            title: "Home"
        },
        {
            url: '/contact',
            title: "Contact"
        },
        {
            url: '/about',
            title: "About"
        }
    ]
    return (
        <div className="navbar">
            {pages.map((navbarItem, i)=> {
               return(
                   <Link to={navbarItem.url} className="navbar-item" key={i}>{navbarItem.title}</Link>

               )
                    
            })}
         
        </div>
    )
}

export default Navbar