import '../header/header.css'
import logoExpo from '../../imgs/logoexpoblanco.svg'
import logotexto from '../../imgs/logoexpotextoblanco.svg'
export const Header = () => {
  return (
    <header>
      <div>
        <img className="hover animado" src={logoExpo} alt="" height={45} />
        <img className="hover ocultomobile" src={logotexto} alt="" height={30} />
        </div>
    
        <div className="fecha unica white ocultomobile">
          Media 15-12 | Técnica 16-12
        </div>
    </header>
  )
}
