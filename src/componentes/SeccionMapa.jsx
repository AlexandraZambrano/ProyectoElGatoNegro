import Logo from '../media/Logo.png';
import Maps from './Maps';
import '../hojas-de-estilo/SeccionMapa.css'


function SeccionMapa() {

    return(
    <div className='LogoMapa'>
        <img src={Logo} alt="Logo"/>
        <Maps />
    </div>
    );
}

export default SeccionMapa;
