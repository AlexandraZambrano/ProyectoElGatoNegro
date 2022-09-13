import Logo from '../media/Logo.png';
import Maps from './Maps';
import '../hojas-de-estilo/SeccionMapa.css'


function SeccionMapa() {

    return(
    <div className='LogoMapa'>
        <img src={Logo} alt="Logo"/>
        <div className='mapa'>
        <Maps />
        </div>
    </div>
    );
}

export default SeccionMapa;
