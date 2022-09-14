import { render, screen } from '@testing-library/react';
import Video from '../componentes/Video';

describe('Componente Video', () => {
    //Prueba que verifica si el componente se renderiza por textos
    test('se renderiza', () => {
      render(<Video />);
      const compTexto= screen.getByText("El Gato Negro");
      expect(compTexto).toBeInTheDocument();
    });
  });