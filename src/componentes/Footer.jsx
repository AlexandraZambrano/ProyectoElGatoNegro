import React from "react";
import '../hojas-de-estilo/Footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <div className="listen-online">
                <strong>Teléfono: 1234-5678
                    <br />
                    elgatonegro@restaurantes.com
                </strong>
            </div>
            <div className="follow-me">
                <h2>Síguenos</h2>
            </div>
            <div className="social-network">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
    );

}

export default Footer;