import React from 'react';
import Header from '../components/header'
import Navbar from '../components/navbar'

function ContactPage (){
    return (
        <div className="page-wrap">
            <Navbar/>
            <Header headerText="Contact"/>
            <p>Send us a message!</p>
        </div>
    )
}
export default ContactPage