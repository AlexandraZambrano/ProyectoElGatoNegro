import { render, screen, fireEvent } from '@testing-library/react';
import { ReactDOM } from 'react-dom';
import App from './App';


describe('Test for App', () => {
  // Pruebas de que los títulos se muestran en la página y que el componente se renderiza
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

})