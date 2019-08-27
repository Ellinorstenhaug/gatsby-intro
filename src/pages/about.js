import React from "react"
import Header from '../components/header'
import Navbar from '../components/navbar'
export default () => (
  <div style={{ color: `teal` }} className="page-wrap">
    <Navbar/>
    <Header headerText="About gatsby"/>
    <p>Such wow. Very React.</p>
  </div>
)