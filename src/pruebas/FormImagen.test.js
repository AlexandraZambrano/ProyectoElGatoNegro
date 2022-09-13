import { render, screen } from '@testing-library/react';
import FormImagen from '../componentes/FormImagen';



describe('Componente FormImagen', () => {
  //Prueba que verifica si la imagen se renderiza
  test('renders learn react link', () => {
    render(<FormImagen />);
    const compImagen = screen.getByAltText("gato");
    expect(compImagen).toBeInTheDocument();
  });
});