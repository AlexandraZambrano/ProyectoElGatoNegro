import { render, screen } from '@testing-library/react';
import FormImagen from '../componentes/FormImagen';



describe('Componente App', () => {
  //Prueba que verifica si el componente se renderiza por textos
  test('', () => {
    render(<FormImagen />);
    const compImagen = screen.getByAltText("gato");
    expect(compImagen).toBeInTheDocument();
  });
});