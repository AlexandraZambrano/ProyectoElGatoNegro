import { render, screen } from '@testing-library/react';
import CookiesWeb from '../componentes/CookiesWeb';

describe('Componente CookiesWeb', () => {
    //Prueba que verifica si el componente se renderiza por textos
    test('se renderiza', () => {
      render(<CookiesWeb />);
      const compTexto= screen.getByText("Aceptas que en 'El Gato Negro' trataremos tus datos para personalizar el servicio ofrecido, notificarte comunicaciones internas, noticias y ofertas de nuestros servicios via email, sms, whatsapp o telefónicamente, así como realizar analíticas de tráfico y datos de uso y lo establecido en la politica de privacidad. Puedes revocar el consentimiento, ejercer tus derechos de acceso, rectificación, cancelación, oposición, limitación del tratamiento, portabilidad y supresión escribiéndonos a privacidad@elgatonegro.es");
      expect(compTexto).toBeInTheDocument();
    });
  });