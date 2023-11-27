import { Diploma } from './cards/Diploma'
import proyectos from '../data/proyectos.json'

export const DiplomaContainer = (props) => {
  return (
    <div className='bandideado'>
      <h2 className='unica'>{props.modalidad}</h2>
      <div className="cardContainer">
        {proyectos.map(proyecto =>
           <Diploma key= {proyecto.id} modalidad={proyecto.modalidad} curso={proyecto.curso} imgurl={proyecto.imgurl} alumnos={proyecto.alumnos} descrip={proyecto.descrip} proy={proyecto.proyecto} link={proyecto.url} escuela={proyecto.escuela}/>)}
      </div>


    </div>
  )
}
