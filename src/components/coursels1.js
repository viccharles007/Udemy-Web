import React from 'react'

function Coursels1(props) {
  return (
    <div>
        <img src={props.img} alt='' />
        <p>{props.description}</p>
        <p>{props.names}</p>
        <p>{props.ratings}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default Coursels1