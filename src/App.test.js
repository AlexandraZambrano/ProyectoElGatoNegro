import { render, screen } from '@testing-library/react';
import App from './App';

describe('Componente App', () => {

  // Pruebas de que los títulos se muestran en la página
  test('Prueba título: Pociones Populares', () => {
    render(<App />);
    const elementoPrueba = screen.getByText('Pociones Populares');
    expect(elementoPrueba).toBeInTheDocument();
  });
  test('Prueba título: Cocteles', () => {
    render(<App />);
    const elementoPrueba = screen.getByText('Cocteles');
    expect(elementoPrueba).toBeInTheDocument();
  });

});
