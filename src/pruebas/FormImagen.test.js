import { render, screen } from '@testing-library/react';
import FormImagen from '../componentes/FormImagen';

describe('Componente FormImagen', () => {
  //Prueba que verifica si el componente se renderiza por textos
  test('se renderiza', () => {
    render(<FormImagen />);
    const compImagen = screen.getByAltText("gato");
    expect(compImagen).toBeInTheDocument();
  });
});