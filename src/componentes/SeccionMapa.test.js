import { render, screen } from '@testing-library/react';
import SeccionMapa from "./SeccionMapa";

describe('Componente Maps', () => {

    test('renders learn react link', () => {
    render(<SeccionMapa />);
    const linkElement = screen.getByAltText("Logo");
    expect(linkElement).toBeInTheDocument();
  });
  });