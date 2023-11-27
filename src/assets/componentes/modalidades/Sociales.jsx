import { Diploma } from '../cards/Diploma'
import sociales from '../../data/sociales.json'

export const Sociales = () => {
  return (
    <div className="filtros">
      <div className="hideprint titilium">
        <h1 className="unica hideprint">Sociales| Instrucciones</h1>
        <h3>Presione Ctrl + P para abrir la ventana de impresión</h3>
        <p>Configure lo siguiente:</p>
        <span>Márgenes:Mínimos ! </span>
        <span>Escala:100 ! </span>
        <span>Opciones : Tildar GRAFICOS DE FONDO</span>
        <br></br>
      </div>
      
      <div className="cardContainer">
        {sociales.map(proyecto =>
          <Diploma key={proyecto.id} modalidad={proyecto.modalidad} curso={proyecto.curso} imgurl={proyecto.imgurl} alumnos={proyecto.alumnos} descrip={proyecto.descrip} proy={proyecto.proyecto} link={proyecto.url} escuela={proyecto.escuela} />)}
      </div>


    </div>
  )
}