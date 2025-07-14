
import './App.css'
import Botones from './component/botones/Botones'
import Titulo from './component/titulo/Titulo'
import Card from './component/card/Card'
import img404 from "./assets/404.jpg"
import imgreact from "./assets/react.svg"
function App() {
  return (
    <div>
      <Titulo /> 
      <div className='contenedor-botones'>
      <Botones 
          titulo="Primer"
          color = "blue"
      /> 
      <Botones
          titulo="Segundo"
          color="red"
      />
      <Botones
          titulo="Tercer"
          color = "yellow"
      />
      <Botones
          titulo="Cuatro"
          color = "green"
        />
      </div>

      <div> 
        <Card
          nombre="Yely"
          imagen={img404}
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt modi nulla nemo laudantium assumenda omnis nobis, perspiciatis alias pariatur dolor atque sit voluptas quis, similique amet error. Sequi, nihil?"
        
        />
        <Card
        nombre="Sofi"
        imagen={imgreact}
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt modi nulla nemo laudantium assumenda omnis nobis, perspiciatis alias pariatur dolor atque sit voluptas quis, similique amet error. Sequi, nihil?"
      />
        <Card
        nombre="Jesus"
        imagen={img404}
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt modi nulla nemo laudantium assumenda omnis nobis, perspiciatis alias pariatur dolor atque sit voluptas quis, similique amet error. Sequi, nihil?"
      />
    </div>
    </div>
  )
}

export default App
