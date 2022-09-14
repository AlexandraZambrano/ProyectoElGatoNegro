import { render, screen } from '@testing-library/react';
import SeccionMapa from '../componentes/SeccionMapa';

describe('Componente SeccionMapa', () => {
  //Prueba que verifica si el componente se renderiza por textos
  test('se renderiza', () => {
    render(<SeccionMapa/>);
    const compImagen = screen.getByAltText("Logo");
    expect(compImagen).toBeInTheDocument();
  });
});