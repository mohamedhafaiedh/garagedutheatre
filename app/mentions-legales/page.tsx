"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function MentionsLegalesPage() {
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
    <div className="wp-singular page-template-default page page-id-16695 wp-custom-logo wp-theme-konstruk elementor-default elementor-kit-6 elementor-page elementor-page-16695">
      <div id="page" className="site">
        <Header />
        <div className="main-contain offcontents"><div className="container"><div id="content" className="site-content"><div className="row padding-"><div className="col-lg-12"><article id="post-16695" className="post-16695 page type-page status-publish hentry"><div className="entry-content"><div data-elementor-type="wp-page" data-elementor-id="16695" className="elementor elementor-16695" data-elementor-post-type="page"><section className="elementor-section elementor-top-section elementor-element elementor-element-22433a1 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="22433a1" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-99294a4 elementor-hidden-mobile" data-id="99294a4" data-element_type="column"><div className="elementor-widget-wrap"></div></div><div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-537affd" data-id="537affd" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-db4aae2 elementor-widget elementor-widget-rs-heading" data-id="db4aae2" data-element_type="widget" data-widget_type="rs-heading.default"><div className="elementor-widget-container"><div className="prelements-heading style4 animate- center"><div className="title-inner"><h1 className="title"><span className="watermark"></span>Mentions légales</h1></div></div></div></div></div></div><div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-57645bb elementor-hidden-mobile" data-id="57645bb" data-element_type="column"><div className="elementor-widget-wrap"></div></div></div></section><section className="elementor-section elementor-top-section elementor-element elementor-element-a6acf66 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a6acf66" data-element_type="section"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-061ee3f" data-id="061ee3f" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-f0c589d elementor-widget elementor-widget-text-editor" data-id="f0c589d" data-element_type="widget" data-widget_type="text-editor.default"><div className="elementor-widget-container"><h2>Informations générales</h2><p>Dénomination : MECA SERVICES (Garage du Théâtre GT)<br />Forme juridique : SAS<br />Capital social : 5.000 €<br />Siège social : 139 rue du Théâtre, 75015 Paris<br />N° SIRET : 94478409900011<br />Directeur de la publication : M. Ramzi Hadfi<br />Téléphone : +33 1 45 75 05 05<br />E-mail : garagedutheatre@gmail.com</p><h2>Propriété intellectuelle et contrefaçons</h2><p>Le propriétaire du site est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels…</p><p>Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.</p><p>Toute exploitation non autorisée du site ou de l’un quelconque de ces éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la propriété intellectuelle.</p><h2>Limitation de responsabilité</h2><p>Vous utilisez ce site sous votre seule et entière responsabilité. Paris Limousine Agency ne pourra être tenue pour responsable des dommages directs ou indirects, tels que, notamment, préjudice matériel, pertes de données ou de programmes, préjudice financier, résultant de l’utilisation de ce site ou de sites qui lui sont liés.</p><h2>Hébergeur</h2><p><a href="https://www.siteground.com/" target="_blank" rel="noopener">SiteGround Hosting Ltd</a></p></div></div></div></div></div></section></div></div></article></div></div></div></div></div><footer id="rs-footer" className="rs-footer footer-style-1"><div className="footer-top"><div className="container"><div className="row"><div className="col-lg-3 footer-0"><div className="footer-logo-wrap"><a href="/" className="footer-top-logo"><img style={{"height": "30px"}} src="/images/Logo-GT-500-225-px.png" alt="Garage du Théâtre GT" /></a></div><section id="text-3" className="widget widget_text"><div className="textwidget"><p>Garage de réparation automobile toutes marques à Paris. Un service de proximité qui allie qualité de service et rapidité d’intervention.</p></div></section><section id="medvillsocialiconwi_widget-1" className="widget widget_medvillsocialiconwi_widget"><ul className="footer_social"></ul></section></div><div className="col-lg-3 footer-1"><section id="contact_widget-1" className="widget widget_contact_widget"><h3 className="footer-title">Contact</h3><ul className="fa-ul"><li className="address1"><i className="fi fi-rr-map-marker-home"></i><span>139 Rue du Théâtre, Paris 15</span></li><li className="phone_li"><i className="fi fi-rr-phone-call"></i><a href="tel:0145750505">01 45 75 05 05</a><a href="tel:"></a></li><li className="email_li"><i className="fi fi-rr-envelope-plus"></i><a href="mailto:garagedutheatre@gmail.com">garagedutheatre@gmail.com</a><a href="mailto:"></a></li></ul></section></div><div className="col-lg-3 footer-2"><section id="nav_menu-2" className="widget widget_nav_menu"><h3 className="footer-title">Nos services</h3><div className="menu-footermenu-container"><ul id="menu-footermenu" className="menu"><li id="menu-item-16568" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-16568"><a href="/">Accueil</a></li><li id="menu-item-16567" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16567"><a href="/a-propos">A propos</a></li><li id="menu-item-16566" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16566"><a href="/nos-services">Nos services</a></li><li id="menu-item-16570" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16570"><a href="/devis">Devis</a></li><li id="menu-item-16569" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16569"><a href="/contact">Contact</a></li></ul></div></section></div><div className="col-lg-3 footer-3"><section id="custom_html-1" className="widget_text widget widget_custom_html"><h3 className="footer-title">Heures d’ouverture</h3><div className="textwidget custom-html-widget">Lundi : 09:00-18:00

<br />

Mardi : 09:00-18:00

<br />

Mercredi : 09:00-18:00

<br />

Jeudi : 09:00-18:00

<br />

Vendredi : 09:00-18:00

<br />

Samedi : 09:00-13:00</div></section></div></div></div></div><div className="footer-bottom"><div className="container"><div className="rows"><div className="copy1"><div className="copyright text-left" style={{"padding": "0px"}}><p>Garage du Théâtre GT © Tous droits réservés</p></div></div><div className="copy2"><div className="copyright-widget text-right" style={{"padding": "0px"}}><section id="nav_menu-3" className="widget widget_nav_menu"><div className="menu-legalmenu-container"><ul id="menu-legalmenu" className="menu"><li id="menu-item-16571" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-16571"><a rel="privacy-policy" href="/privacy-policy">Politique de confidentialité</a></li><li id="menu-item-16699" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-16695 current_page_item menu-item-16699"><a href="/mentions-legales" aria-current="page">Mentions légales</a></li></ul></div></section></div></div></div></div></div></footer></div>
<div id="scrollUp"><i className="fa fa-angle-up"></i></div>
    </div>
  );
}
