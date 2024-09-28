import React, { useContext } from "react";
import "./styles/footer-component.css";
import { Logos } from "../../../application/assets/logos/logos";
import AppStateContext from "../../../application/context/app-state.context";

const FooterComponent = () => {
  // Context

  const { isNotDesktop } = useContext(AppStateContext);

  // Render

  if (isNotDesktop) {
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <div className="contact-section">
            <p className="contact-section-title">Contacte</p>
            <p className="contact-section-text">T. +34 973 782 198</p>
            <p className="contact-section-text">
              E.{" "}
              <a href="mailto:ajuntament@granjaescarp.ddl.net">
                ajuntament@granjaescarp.ddl.net
              </a>
            </p>
          </div>

          <div className="social-media-section">
            <p className="contact-section-title">Segueix-nos</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/people/Ajuntament-de-La-Granja-dEscarp/100064506377522/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Logos.facebook} />
              </a>
              <a
                href="https://www.instagram.com/iggranjadescarp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Logos.instagram} />
              </a>
              <a
                href="https://twitter.com/AjGranjaEscarp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Logos.twitter} />
              </a>
            </div>
          </div>

          <div className="sitemap-section">
            <p className="contact-section-title">Mapa web</p>
            <ul className="sitemap-list">
              <li>Motius per a descobrir-nos</li>
              <li>La vida al poble</li>
              <li>L’aiguabarreig</li>
              <li>El patrimoni</li>
              <li>El cicloturisme</li>
              <li>La pesca</li>
              <li>La floració</li>
              <li>La fruita</li>
              <li>Moturisme</li>
            </ul>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo">
              <img src={Logos.logoFooter} alt="La Granja d'Escarp" />
            </div>
            <div className="legal-section">
              <ul>
                <li>
                  <a
                    href="https://granjaescarp.ddl.net/avis-legal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Avís legal
                  </a>
                </li>
                <li>
                  <a
                    href="https://granjaescarp.ddl.net/politica-de-privacitat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política de privacitat
                  </a>
                </li>
                <li>
                  <a
                    href="https://granjaescarp.ddl.net/politica-de-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política de galetes
                  </a>
                </li>
              </ul>
              <p className="contact-section-text">© 2024 Copyright.</p>
              <p className="contact-section-text">Tots els drets reservats.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section-content">
          <div className="footer-logo">
            <img src={Logos.logoFooter} alt="La Granja d'Escarp" />
          </div>
          <div>
            <p className="contact-section-text">© 2024 Copyright.</p>
            <p className="contact-section-text">Tots els drets reservats.</p>
          </div>
        </div>
        <div className="footer-section-content">
          <div className="contact-section">
            <p className="contact-section-title">Contacte</p>
            <p className="contact-section-text">T. +34 973 782 198</p>
            <p className="contact-section-text">
              E.{" "}
              <a href="mailto:ajuntament@granjaescarp.ddl.net">
                ajuntament@granjaescarp.ddl.net
              </a>
            </p>
          </div>
          <div className="social-media-section">
            <p className="contact-section-title">Segueix-nos</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/people/Ajuntament-de-La-Granja-dEscarp/100064506377522/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Logos.facebook} />
              </a>
              <a
                href="https://www.instagram.com/iggranjadescarp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Logos.instagram} />
              </a>
              <a
                href="https://twitter.com/AjGranjaEscarp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Logos.twitter} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-section-content">
          <div className="sitemap-section">
            <ul className="sitemap-list">
              <li>Motius per a descobrir-nos</li>
              <li>La vida al poble</li>
              <li>L’aiguabarreig</li>
              <li>El patrimoni</li>
              <li>El cicloturisme</li>
              <li>La pesca</li>
              <li>La floració</li>
              <li>La fruita</li>
              <li>Moturisme</li>
            </ul>
          </div>
          <div className="legal-section">
            <div className="legal-section-content">
              <ul>
                <li>
                  <a
                    href="https://granjaescarp.ddl.net/avis-legal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Avís legal
                  </a>
                </li>
                <li>|</li>
                <li>
                  <a
                    href="https://granjaescarp.ddl.net/politica-de-privacitat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política de privacitat
                  </a>
                </li>
                <li>|</li>
              </ul>
              <ul>
                <li>
                  <a
                    href="https://granjaescarp.ddl.net/politica-de-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Política de galetes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
