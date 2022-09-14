import { render, screen } from '@testing-library/react';
import Navbar from '../componentes/Navbar';

describe('Componente Navbar', () => {
    //Prueba que verifica si el componente se renderiza por textos
    test('se renderiza', () => {
      render(<Navbar />);
      const compTexto= screen.getByText("Carta");
      expect(compTexto).toBeInTheDocument();
    });
  });