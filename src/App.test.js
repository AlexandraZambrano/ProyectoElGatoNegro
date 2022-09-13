/*/import { render, screen } from '@testing-library/react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import App from './App';

describe('Componente FormMasters', () => {

// Prueba en la que busca un texto que no está
test('renders learn react link', () => {
  // Arrange
  render(<CookieConsent />);
  
  // Act ... Nothing

  // Assert
  const elementoPrueba = screen.getByText('Este sitio web utiliza cookies para mejorar la experiencia de usuario.');
  expect(elementoPrueba).toBeInTheDocument();
});//end test
