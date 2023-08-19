import React from 'react'

const Footer = ({length}) => {
  
  // const date = new Date();

  return (
    <footer>
      <p>{length} list {length === 1 || length === 0 ? "item" : "items"}</p>
        {/* Copyright &copy; {date.getFullYear()} */}
    </footer>
  )
}

export default Footer;