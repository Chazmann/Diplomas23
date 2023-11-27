import './diploma.css'



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
            imgmod = './src/assets/componentes/cards/diplomamedia.jpg'
            curso = '6°6°'
            break;
        case 'sociales':
            modfinal = "Bachiller con Orientación en Ciencias Sociales"
            imgmod = './src/assets/componentes/cards/diplomamedia.jpg'
            curso = '6°2°'
            break;
        case 'eco':
            modfinal = "Bachiller con Orientación en Economía y Administración"
            imgmod = './src/assets/componentes/cards/diplomamedia.jpg'
            curso = '6°3°'
            break;
        case 'info':
            modfinal = "Técnico en Informática Personal y Profesional"
            imgmod = './src/assets/componentes/cards/diplomatec.jpg'
            curso = '7°1°'
            break;
        case 'info1':
            modfinal = "Técnico en Informática Personal y Profesional"
            imgmod = './src/assets/componentes/cards/diplomatec.jpg'
            curso = '7°3°'
            break;
        case 'alim':
            modfinal = "Técnico en Tecnología de los Alimentos"
            imgmod = './src/assets/componentes/cards/diplomatec.jpg'
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
                <h2 className='modalidad'>{modfinal}</h2>

            </div>

        </div>
    )
}

