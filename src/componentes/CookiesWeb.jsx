import CookieConsent from "react-cookie-consent";


function CookiesWeb() {
  return (
    <div className="ComponenteCookies">

<CookieConsent
  buttonText="Aceptar"
  cookieName="myAwesomeCookieName2"
  style={{
    background: "linear-gradient(to right, blue, violet)",
    
  }}
  buttonStyle={{
    background: "white",
    color: "purple",
    fontWeight: "bolder",
    borderRadius: "5px",
  }}
>
  Este sitio web utiliza cookies para mejorar la experiencia de usuario.{" "}
 
</CookieConsent>
    </div>
  );
}

export default CookiesWeb;
