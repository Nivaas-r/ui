import React from 'react'
import "../styles/Footer.css"
export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <div class= "footer">           
    <p id ="text">
    &copy; {currentYear} P.H.M Healthcare. All Rights Reserved.
    </p>
    </div>
  )
}
