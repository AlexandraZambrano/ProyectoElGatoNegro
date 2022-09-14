import { render, screen } from '@testing-library/react';
import CookiesWeb from '../componentes/CookiesWeb';

describe('Componente CookiesWeb', () => {
    //Prueba que verifica si el componente se renderiza por textos
    test('se renderiza', () => {
      render(<CookiesWeb />);
      const compTexto= screen.getByText("Este sitio web utiliza cookies para mejorar la experiencia de usuario.");
      expect(compTexto).toBeInTheDocument();
    });
  });