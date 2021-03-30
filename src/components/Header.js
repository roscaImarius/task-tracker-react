import React from 'react'
import PropTypes from 'prop-types'
import Tasks from './Tasks'
import Button from './Button'
import AddTask from './AddTask'

const Header = ({title,onClick,onDelete,onAdd, onDubleClick, tasks}) => {



    return (
        <header className="header-container">
            <h1>{title}</h1> 
               <Button onClick={onClick} color="yellow"/>
               <AddTask onAdd={onAdd}/>
               <Tasks onDelete={onDelete} onDubleClick={onDubleClick} tasks={tasks}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


export default Header
