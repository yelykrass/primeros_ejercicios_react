import React from 'react'
import Titulo from '../titulo/Titulo'

const Botones = (props) => {
    function handlerEvent() {
        console.log(props.titulo)
    }

  return (
    <div>
          <button onClick={handlerEvent} style={{backgroundColor: props.color}}>
              {props.titulo} boton
          </button>
    </div>
  )
}

export default Botones

