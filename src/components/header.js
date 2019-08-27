import React from "react"
// import '../assets/css/header.css'

function Header(props) {
    return ( 
    <div className="header">

    <h1> 
        {props.headerText} </h1>
    </div>
    )
}
export default Header