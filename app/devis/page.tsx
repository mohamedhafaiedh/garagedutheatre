"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DevisForm from "../components/DevisForm";
import Header from "../components/Header";

export default function DevisPage() {
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
    <div className="wp-singular page-template-default page page-id-16530 wp-custom-logo wp-theme-konstruk elementor-default elementor-kit-6 elementor-page elementor-page-16530">
      <div id="page" className="site">
        <Header />
        <div className="main-contain offcontents"><div className="container"><div id="content" className="site-content"><div className="row padding-"><div className="col-lg-12"><article id="post-16530" className="post-16530 page type-page status-publish hentry"><div className="entry-content"><div data-elementor-type="wp-page" data-elementor-id="16530" className="elementor elementor-16530" data-elementor-post-type="page"><section className="elementor-section elementor-top-section elementor-element elementor-element-68a09c5 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="68a09c5" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-62075ef elementor-hidden-mobile" data-id="62075ef" data-element_type="column"><div className="elementor-widget-wrap"></div></div><div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-75263cf" data-id="75263cf" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-b9730b5 elementor-widget elementor-widget-rs-heading" data-id="b9730b5" data-element_type="widget" data-widget_type="rs-heading.default"><div className="elementor-widget-container"><div className="prelements-heading style4 animate- center"><div className="title-inner"><h1 className="title"><span className="watermark"></span>Demande de devis</h1></div></div></div></div></div></div><div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a69e80d elementor-hidden-mobile" data-id="a69e80d" data-element_type="column"><div className="elementor-widget-wrap"></div></div></div></section><section className="elementor-section elementor-top-section elementor-element elementor-element-cbb0159 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cbb0159" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-39fbc2e" data-id="39fbc2e" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-08c19f7 elementor-widget elementor-widget-text-editor" data-id="08c19f7" data-element_type="widget" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Remplissez le formulaire de contact ci-dessous et recevez sous 24h notre devis gratuit sur la prestation que vous souhaitez</p></div></div></div></div></div></section><section className="elementor-section elementor-top-section elementor-element elementor-element-9e2d696 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9e2d696" data-element_type="section"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fe3a3ee" data-id="fe3a3ee" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-389b5e0 elementor-widget elementor-widget-rs-cf7" data-id="389b5e0" data-element_type="widget" data-widget_type="rs-cf7.default"><div className="elementor-widget-container"><div className="wpcf7 no-js" id="wpcf7-f10587-p16530-o1" lang="en-US" dir="ltr" data-wpcf7-id="10587"><div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p><ul></ul></div><DevisForm /></div></div></div></div></div></div></section></div></div></article></div></div></div></div></div><footer id="rs-footer" className="rs-footer footer-style-1"><div className="footer-top"><div className="container"><div className="row"><div className="col-lg-3 footer-0"><div className="footer-logo-wrap"><a href="/" className="footer-top-logo"><img style={{"height": "30px"}} src="/images/Logo-GT-500-225-px.png" alt="Garage du Théâtre GT" /></a></div><section id="text-3" className="widget widget_text"><div className="textwidget"><p>Garage de réparation automobile toutes marques à Paris. Un service de proximité qui allie qualité de service et rapidité d’intervention.</p></div></section><section id="medvillsocialiconwi_widget-1" className="widget widget_medvillsocialiconwi_widget"><ul className="footer_social"></ul></section></div><div className="col-lg-3 footer-1"><section id="contact_widget-1" className="widget widget_contact_widget"><h3 className="footer-title">Contact</h3><ul className="fa-ul"><li className="address1"><i className="fi fi-rr-map-marker-home"></i><span>139 Rue du Théâtre, Paris 15</span></li><li className="phone_li"><i className="fi fi-rr-phone-call"></i><a href="tel:0145750505">01 45 75 05 05</a><a href="tel:"></a></li><li className="email_li"><i className="fi fi-rr-envelope-plus"></i><a href="mailto:garagedutheatre@gmail.com">garagedutheatre@gmail.com</a><a href="mailto:"></a></li></ul></section></div><div className="col-lg-3 footer-2"><section id="nav_menu-2" className="widget widget_nav_menu"><h3 className="footer-title">Nos services</h3><div className="menu-footermenu-container"><ul id="menu-footermenu" className="menu"><li id="menu-item-16568" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-16568"><a href="/">Accueil</a></li><li id="menu-item-16567" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16567"><a href="/a-propos">A propos</a></li><li id="menu-item-16566" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16566"><a href="/nos-services">Nos services</a></li><li id="menu-item-16570" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-16530 current_page_item menu-item-16570"><a href="/devis" aria-current="page">Devis</a></li><li id="menu-item-16569" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16569"><a href="/contact">Contact</a></li></ul></div></section></div><div className="col-lg-3 footer-3"><section id="custom_html-1" className="widget_text widget widget_custom_html"><h3 className="footer-title">Heures d’ouverture</h3><div className="textwidget custom-html-widget">Lundi : 09:00-18:00

<br />

Mardi : 09:00-18:00

<br />

Mercredi : 09:00-18:00

<br />

Jeudi : 09:00-18:00

<br />

Vendredi : 09:00-18:00

<br />

Samedi : 09:00-13:00</div></section></div></div></div></div><div className="footer-bottom"><div className="container"><div className="rows"><div className="copy1"><div className="copyright text-left" style={{"padding": "0px"}}><p>Garage du Théâtre GT © Tous droits réservés</p></div></div><div className="copy2"><div className="copyright-widget text-right" style={{"padding": "0px"}}><section id="nav_menu-3" className="widget widget_nav_menu"><div className="menu-legalmenu-container"><ul id="menu-legalmenu" className="menu"><li id="menu-item-16571" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-16571"><a rel="privacy-policy" href="/privacy-policy">Politique de confidentialité</a></li><li id="menu-item-16699" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16699"><a href="/mentions-legales">Mentions légales</a></li></ul></div></section></div></div></div></div></div></footer></div>
<div id="scrollUp"><i className="fa fa-angle-up"></i></div>
    </div>
  );
}
