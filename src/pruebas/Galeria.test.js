import { render, screen } from '@testing-library/react';
import Galeria from '../componentes/Galeria';

describe('Componente Galeria', () => {
    //Prueba que verifica si el componente se renderiza por textos
    test('se renderiza', () => {
      render(<Galeria />);
      const compTexto= screen.getByText("En las tinieblas de la Calle del embrujo 28900 Alcobendas, Madrid, España");
      expect(compTexto).toBeInTheDocument();
    });
  });