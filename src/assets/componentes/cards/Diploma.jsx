import './diploma.css'
import tec from '/diplomatec.jpg'
import media from '/diplomamedia.jpg'



export const Diploma = (props) => {
    let mod = props.modalidad == 'Alimentos' ? 'alimentos' : 'info'
    let imgmod = props.escuela == 'media' ? './diplomamedia.jpg' :
        './diplomatec.jpg'

    let modal = props.modalidad;
    let modfinal = ''
    let curso = ''
    switch (modal) {
        case 'arte':
            modfinal = "Bachiller con Orientación en Arte (Teatro)"
            imgmod = media
            curso = '6°6°'
            break;
        case 'sociales':
            modfinal = "Bachiller con Orientación en Ciencias Sociales"
            imgmod = media
            curso = '6°2°'
            break;
        case 'economia':
            modfinal = "Bachiller con Orientación en Economía y Administración"
            imgmod = media
            curso = '6°3°'
            break;
        case 'info1':
            modfinal = "Técnico en Informática Personal y Profesional"
            imgmod = tec
            curso = '7°1°'
            break;
        case 'info2':
            modfinal = "Técnico en Informática Personal y Profesional"
            imgmod = tec
            curso = '7°3°'
            break;
        case 'alim':
            modfinal = "Técnico en Tecnología de los Alimentos"
            imgmod = tec
            curso = '7°2°'
            break;
    }



    console.log(imgmod)
    return (

        <div className='diploma'>

            {/* <div className='imgportada' /> */}
            <img className='imgportada' src={imgmod} alt="" />
            <h2 className={mod}>{curso}</h2>

            <div className="nombre titilium">
                <h4>Tiene el privilegio de otorgar el presente DIPLOMA a:</h4>
                <h1 className='alumno'>{props.alumnos}</h1>
                <h4>Por cuanto ha cursado el ciclo de estudios en</h4>
                <h4 className='modalidad'>{modfinal}</h4>

            </div>

        </div>
    )
}

