import React from 'react'

const Todo = ({title,datetime}) => {

  return (
    <div className='todo'>
    <h3>{title}</h3>
    <p>{datetime}</p>
    </div>
  )
}

export default Todo