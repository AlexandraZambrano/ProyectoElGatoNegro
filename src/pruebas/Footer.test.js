import { render, screen } from '@testing-library/react';
import Footer from '../componentes/Footer';

describe('Componente Footer', () => {
    //Prueba que verifica si el componente se renderiza por textos
    test('se renderiza', () => {
      render(<Footer />);
      const compTexto= screen.getByText("Síguenos");
      expect(compTexto).toBeInTheDocument();
    });
  });