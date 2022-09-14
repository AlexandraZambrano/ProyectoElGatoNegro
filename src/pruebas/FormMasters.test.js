import { render, screen } from '@testing-library/react';
import FormMasters from '../componentes/FormMasters';
import '@testing-library/jest-dom';

describe('Componente FormMasters', () => {
  test('Muestra si se renderiza el texto de uno de los placeholders', () => {
  render(<FormMasters />);
  const otroelemento = screen.getByPlaceholderText("Fenix, Duende, Pixie");
  expect(otroelemento).toBeInTheDocument();
  });

  test('Muestra si se renderiza el texto de uno de los labels', () => {
    render(<FormMasters />);
    const otroelemento = screen.getByLabelText("Nombre de criatura mágica");
    expect(otroelemento).toBeInTheDocument();
  });


});
