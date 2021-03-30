import React from 'react'

const Button = ({color, onClick}) => {
    return <button 
    onClick={onClick}
     style={{backgroundColor : color, marginBottom: "10px"}}
     className="add-btn"
     >Add task</button>
}
Button.defaultProps ={
    color : 'blue',
  
}

export default Button
