"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";

export default function MerciPage() {
  useEffect(() => {
    const scrollUp = document.getElementById("scrollUp");
    if (scrollUp) {
      const handleScrollUp = () => {
        if (window.scrollY > 300) {
          scrollUp.style.display = "block";
        } else {
          scrollUp.style.display = "none";
        }
      };
      window.addEventListener("scroll", handleScrollUp);
      scrollUp.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
      return () => {
        window.removeEventListener("scroll", handleScrollUp);
      };
    }
  }, []);

  return (
    <div className="wp-singular page-template-default page wp-custom-logo wp-theme-konstruk elementor-default elementor-kit-6 elementor-page">
      <div id="page" className="site">
        <Header />

        <div className="main-contain offcontents">
          <div className="container">
            <div id="content" className="site-content">
              <div className="row padding-">
                <div className="col-lg-12">
                  <article className="post-16526 page type-page status-publish hentry">
                    <div className="entry-content">
                      <div className="elementor elementor-16526">
                        <section className="elementor-section elementor-top-section elementor-element elementor-section-stretched elementor-section-boxed" style={{ padding: "80px 20px", textAlign: "center" }}>
                          <div className="elementor-container elementor-column-gap-default" style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "25px", color: "#2e7d32", fontSize: "40px" }}>
                              ✓
                            </div>
                            <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "20px", color: "#111" }}>
                              Merci pour votre message !
                            </h1>
                            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555", marginBottom: "30px", maxWidth: "600px" }}>
                              Votre demande a bien été transmise à l'équipe du <strong>Garage du Théâtre</strong>. Nous étudierons votre requête et reviendrons vers vous dans les meilleurs délais (sous 24h ouvrées).
                            </p>
                            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "8px", padding: "20px 30px", marginBottom: "35px", border: "1px solid #eee", width: "100%", maxWidth: "500px", textAlign: "left" }}>
                              <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: "#333" }}>Nos coordonnées directes :</h4>
                              <p style={{ margin: "6px 0", color: "#666" }}>📍 <strong>Adresse :</strong> 139 Rue du Théâtre, 75015 Paris</p>
                              <p style={{ margin: "6px 0", color: "#666" }}>📞 <strong>Téléphone :</strong> <a href="tel:0145750505" style={{ color: "#ff5421" }}>01 45 75 05 05</a></p>
                              <p style={{ margin: "6px 0", color: "#666" }}>✉️ <strong>Email :</strong> <a href="mailto:garagedutheatre@gmail.com" style={{ color: "#ff5421" }}>garagedutheatre@gmail.com</a></p>
                            </div>
                            <div>
                              <Link href="/" className="elementor-button elementor-size-md" style={{ display: "inline-block", backgroundColor: "#ff5421", color: "#fff", padding: "14px 32px", borderRadius: "4px", textDecoration: "none", fontWeight: "600" }}>
                                Retour à l'accueil
                              </Link>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="rs-footer" className="rs-footer footer-style-1">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 footer-0">
                  <div className="footer-logo-wrap"><a href="/" className="footer-top-logo"><img style={{ height: "30px" }} src="/images/Logo-GT-500-225-px.png" alt="Garage du Théâtre GT" /></a></div>
                  <section id="text-3" className="widget widget_text"><div className="textwidget"><p>Garage de réparation automobile toutes marques à Paris. Un service de proximité qui allie qualité de service et rapidité d’intervention.</p></div></section>
                </div>
                <div className="col-lg-3 footer-1">
                  <section id="contact_widget-1" className="widget widget_contact_widget">
                    <h3 className="footer-title">Contact</h3>
                    <ul className="fa-ul">
                      <li className="address1"><i className="fi fi-rr-map-marker-home"></i><span>139 Rue du Théâtre, Paris 15</span></li>
                      <li className="phone_li"><i className="fi fi-rr-phone-call"></i><a href="tel:0145750505">01 45 75 05 05</a></li>
                      <li className="email_li"><i className="fi fi-rr-envelope-plus"></i><a href="mailto:garagedutheatre@gmail.com">garagedutheatre@gmail.com</a></li>
                    </ul>
                  </section>
                </div>
                <div className="col-lg-3 footer-2">
                  <section id="nav_menu-2" className="widget widget_nav_menu">
                    <h3 className="footer-title">Nos services</h3>
                    <div className="menu-footermenu-container">
                      <ul id="menu-footermenu" className="menu">
                        <li className="menu-item"><a href="/">Accueil</a></li>
                        <li className="menu-item"><a href="/a-propos">A propos</a></li>
                        <li className="menu-item"><a href="/nos-services">Nos services</a></li>
                        <li className="menu-item"><a href="/devis">Devis</a></li>
                        <li className="menu-item"><a href="/contact">Contact</a></li>
                      </ul>
                    </div>
                  </section>
                </div>
                <div className="col-lg-3 footer-3">
                  <section id="custom_html-1" className="widget_text widget widget_custom_html">
                    <h3 className="footer-title">Heures d’ouverture</h3>
                    <div className="textwidget custom-html-widget">
                      Lundi : 09:00-18:00<br />Mardi : 09:00-18:00<br />Mercredi : 09:00-18:00<br />Jeudi : 09:00-18:00<br />Vendredi : 09:00-18:00<br />Samedi : 09:00-13:00
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="rows">
                <div className="copy1"><div className="copyright text-left" style={{ padding: "0px" }}><p>Garage du Théâtre GT © Tous droits réservés</p></div></div>
                <div className="copy2"><div className="copyright-widget text-right" style={{ padding: "0px" }}><section id="nav_menu-3" className="widget widget_nav_menu"><div className="menu-legalmenu-container"><ul id="menu-legalmenu" className="menu"><li className="menu-item"><a rel="privacy-policy" href="/privacy-policy">Politique de confidentialité</a></li><li className="menu-item"><a href="/mentions-legales">Mentions légales</a></li></ul></div></section></div></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div id="scrollUp"><i className="fa fa-angle-up"></i></div>
    </div>
  );
}
