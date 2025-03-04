import React from 'react'
import '../App.css'

const NavBar = () => {
  return (
    <div className="topNav"
      style={{
        height: '5px',
        padding: '25px 20px',
        position: 'fixed',
        top: 0,
        fontSize: '16px',
        textDecoration: 'none',
      }} >
      <div className="topNav" style={{
        left: 0,
        height: '22px',
        position: 'absolute',
        top: 3,
      }}>
        <a href="/">Return Home</a>
      </div>

      <div className="widthLine" style={{
        position: 'absolute',
        top: 35,
        left: '0',
      }}></div>

      <div className="footer" style={{
        height: '5px', // height of bar
        padding: '20px 20px',
        position: 'fixed',
        bottom: 0,
        left: 0,
      }}>
        <div className="widthLine" style={{
          position: 'absolute',
          bottom: 34,
          right: 20,
        }}></div>

        <div className="topNav" style={{
          left: 0,
          height: '20px',
          position: 'absolute',
          bottom: '0',
        }}>
          <a href="/Attributions">Attributions</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
