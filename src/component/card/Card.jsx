import React from 'react'

const Card = (props) => {

  return (
      <div>
          <h2>{props.nombre}</h2>
          <img src={props.imagen} alt="" />
          <p>Descripcion: {props.descripcion}</p>
    </div>
  )
}

export default Card
