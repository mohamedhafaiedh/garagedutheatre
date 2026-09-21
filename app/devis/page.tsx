"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DevisPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {
      "form-name": "devis",
      "your-name": (formData.get("your-name") as string) || "",
      "your-email": (formData.get("your-email") as string) || "",
      "your-phone": (formData.get("your-phone") as string) || "",
      "your-carmodel": (formData.get("your-carmodel") as string) || "",
      "your-caryear": (formData.get("your-caryear") as string) || "",
      "your-carimmat": (formData.get("your-carimmat") as string) || "",
      "your-message": (formData.get("your-message") as string) || "",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      timestamp: new Date().toISOString(),
      source: "website",
    };

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      params.append(key, value);
    }

    try {
      const response = await fetch("/form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (response.ok) {
        router.push("/merci");
      } else {
        setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage("Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer.");
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

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
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("scroll", handleScrollUp);
      };
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wp-singular page-template-default page page-id-16530 wp-custom-logo wp-theme-konstruk elementor-default elementor-kit-6 elementor-page elementor-page-16530">
      <div id="page" className="site"><nav className="menu-wrap-off nav-container nav menu-ofcn"><div className="inner-offcan"><div className="nav-link-container"><a href="#" className="nav-menu-link close-button" id="close-button2"><i className="konstrukicon-cross closes"></i></a></div><div className="sidenav offcanvas-icon"><div id="mobile_menu" className="rs-offcanvas-inner-left"><div className="widget widget_nav_menu mobile-menus"><div className="menu-gtmainmenu-container"><ul id="primary-menu-single1" className="menu"><li id="menu-item-16541" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-16541"><a href="/">Accueil</a></li><li id="menu-item-16540" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16540"><a href="/a-propos">A propos</a></li><li id="menu-item-16539" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16539"><a href="/nos-services">Nos services</a></li><li id="menu-item-16537" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16537"><a href="/contact">Contact</a></li></ul></div></div></div><div className="mobile-topnars"><div className="mobile-topnar"><div className="rs-address-area"><div className="rs-address-list"><div className="info-icon"><i className="glyph-icon konstrukicon-address"></i></div><div className="info-title"><b>Nous contacter</b><em>139 Rue du Théâtre, Paris 15</em></div></div></div><div className="rs-address-area"><div className="rs-address-list"><div className="info-icon"><i className="glyph-icon konstrukicon-email"></i></div><div className="info-title"><b>Nous envoyer un email</b><em><a href="mailto:garagedutheatre@gmail.com">garagedutheatre@gmail.com</a></em></div></div></div><div className="rs-address-area"><div className="rs-address-list"><div className="info-icon"><i className="glyph-icon konstrukicon-call"></i></div><div className="info-title"><b>Nous appeler</b><em>01 45 75 05 05</em></div></div></div></div></div></div></div></nav><div className="responsive-menus"><nav className="nav-container mobile-menu-container mobile-menus menu-wrap-off fdgdgfdg"><ul className="sidenav"><li className="nav-link-container"><a href="#" className="nav-menu-link close-button"><span className="hamburger1"></span><span className="hamburger3"></span></a></li><li><div className="menu-gtmainmenu-container"><ul id="primary-menu-single2" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-16541"><a href="/">Accueil</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16540"><a href="/a-propos">A propos</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16539"><a href="/nos-services">Nos services</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16537"><a href="/contact">Contact</a></li></ul></div></li></ul><div className="social-icon-responsive"></div></nav></div><header id="rs-header" className="single-header header-style1 mainsmenu"><div className={`header-inner menu-sticky stuck ${isSticky ? "sticky" : ""}`}>
<div className="toolbar-area dd"><div className="container"><div className="row"><div className="col-lg-7"><div className="toolbar-contact"><ul className="rs-contact-info"><li className="rs-contact-email"><i className="fi fi-rr-envelope-plus"></i><a href="mailto:garagedutheatre@gmail.com">garagedutheatre@gmail.com</a></li><li className="rs-contact-phone"><i className="fi fi-rr-phone-call"></i><a href="tel:0145750505"> 01 45 75 05 05</a></li><li className="rs-hours rs-contact-email"><i className="fi fi-rr-map-marker-home"></i> 
                                    139 Rue du Théâtre, Paris 15                                    
                                                                
                            </li></ul></div></div><div className="col-lg-5"><div className="toolbar-sl-share"><ul className="clearfix"><li className="opening"><em><i className="fi-rr-time-add"></i> Lun-Ven : 09:00-18:00 - Sam : 09:00-13:00</em></li></ul></div></div></div></div></div><div className="menu-area menu_type_"><div className="container"><div className="row-table"><div className="col-cell header-logo"><div className="logo-area"><a href="/" className="custom-logo-link" rel="home"><img fetchPriority="high" width="500" height="225" src="/images/2-1.png" className="custom-logo" alt="Garage du Théâtre GT" decoding="async" sizes="(max-width: 500px) 100vw, 500px" /></a></div><div className="logo-area sticky-logo"><a href="/" className="custom-logo-link" rel="home"><img fetchPriority="high" width="500" height="225" src="/images/2-1.png" className="custom-logo" alt="Garage du Théâtre GT" decoding="async" sizes="(max-width: 500px) 100vw, 500px" /></a></div></div><div className="col-cell menu-responsive"><nav className="nav navbar"><div className="navbar-menu"><div className="menu-gtmainmenu-container"><ul id="primary-menu-single" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-16541"><a href="/">Accueil</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16540"><a href="/a-propos">A propos</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16539"><a href="/nos-services">Nos services</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16537"><a href="/contact">Contact</a></li></ul></div></div></nav></div><div className="col-cell header-quote"><div className="btn_quote"><a href="/devis" className="quote-button">Obtenir un devis gratuit</a></div><div className="sidebarmenu-area text-right mobilehum"><ul className="offcanvas-icon"><li className="nav-link-container"><a href="#" className="nav-menu-link menu-button"><span className="dot1"></span><span className="dot2"></span><span className="dot3"></span><span className="dot4"></span><span className="dot5"></span><span className="dot6"></span><span className="dot7"></span><span className="dot8"></span><span className="dot9"></span></a></li></ul></div></div></div></div></div></div></header><div className="main-contain offcontents"><div className="container"><div id="content" className="site-content"><div className="row padding-"><div className="col-lg-12"><article id="post-16530" className="post-16530 page type-page status-publish hentry"><div className="entry-content"><div data-elementor-type="wp-page" data-elementor-id="16530" className="elementor elementor-16530" data-elementor-post-type="page"><section className="elementor-section elementor-top-section elementor-element elementor-element-68a09c5 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="68a09c5" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-62075ef elementor-hidden-mobile" data-id="62075ef" data-element_type="column"><div className="elementor-widget-wrap"></div></div><div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-75263cf" data-id="75263cf" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-b9730b5 elementor-widget elementor-widget-rs-heading" data-id="b9730b5" data-element_type="widget" data-widget_type="rs-heading.default"><div className="elementor-widget-container"><div className="prelements-heading style4 animate- center"><div className="title-inner"><h1 className="title"><span className="watermark"></span>Demande de devis</h1></div></div></div></div></div></div><div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a69e80d elementor-hidden-mobile" data-id="a69e80d" data-element_type="column"><div className="elementor-widget-wrap"></div></div></div></section><section className="elementor-section elementor-top-section elementor-element elementor-element-cbb0159 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cbb0159" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-39fbc2e" data-id="39fbc2e" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-08c19f7 elementor-widget elementor-widget-text-editor" data-id="08c19f7" data-element_type="widget" data-widget_type="text-editor.default"><div className="elementor-widget-container"><p>Remplissez le formulaire de contact ci-dessous et recevez sous 24h notre devis gratuit sur la prestation que vous souhaitez</p></div></div></div></div></div></section><section className="elementor-section elementor-top-section elementor-element elementor-element-9e2d696 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9e2d696" data-element_type="section"><div className="elementor-container elementor-column-gap-default"><div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fe3a3ee" data-id="fe3a3ee" data-element_type="column"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-element elementor-element-389b5e0 elementor-widget elementor-widget-rs-cf7" data-id="389b5e0" data-element_type="widget" data-widget_type="rs-cf7.default"><div className="elementor-widget-container"><div className="wpcf7 no-js" id="wpcf7-f10587-p16530-o1" lang="en-US" dir="ltr" data-wpcf7-id="10587"><div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p><ul></ul></div><form name="devis" method="post" className="wpcf7-form init" aria-label="Contact form" onSubmit={handleSubmit}><input type="hidden" name="form-name" value="devis" /><input type="hidden" name="pageUrl" value={typeof window !== "undefined" ? window.location.href : ""} /><input type="hidden" name="timestamp" value={new Date().toISOString()} /><input type="hidden" name="source" value="website" /><div className="plumber-contact-form"><p><span className="wpcf7-form-control-wrap" data-name="your-name"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Nom" defaultValue="" type="text" name="your-name" required /></span><br /><span className="wpcf7-form-control-wrap" data-name="your-email"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="E-Mail" defaultValue="" type="email" name="your-email" required /></span><br /><span className="wpcf7-form-control-wrap" data-name="your-phone"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Téléphone" defaultValue="" type="text" name="your-phone" aria-label="Votre téléphone*" required /></span><br /><span className="wpcf7-form-control-wrap" data-name="your-carmodel"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Modèle du véhicule" defaultValue="" type="text" name="your-carmodel" /></span><br /><span className="wpcf7-form-control-wrap" data-name="your-caryear"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Année du véhicule" defaultValue="" type="text" name="your-caryear" /></span><br /><span className="wpcf7-form-control-wrap" data-name="your-carimmat"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Immatriculation du véhicule" defaultValue="" type="text" name="your-carimmat" /></span><br /><span className="wpcf7-form-control-wrap" data-name="your-message"><textarea cols={40} rows={10} maxLength={2000} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Décrire ici le service demandé" name="your-message"></textarea></span></p>{errorMessage && (<div style={{ color: "#d9534f", marginBottom: "15px", fontSize: "14px", fontWeight: "600", width: "100%" }}>{errorMessage}</div>)}<div className="form-button"><p className="submit-btn" style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}><button className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" disabled={isSubmitting} style={{ cursor: isSubmitting ? "not-allowed" : "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", backgroundColor: isSubmitting ? "#6c757d" : undefined, color: isSubmitting ? "#ffffff" : undefined, opacity: isSubmitting ? 0.75 : 1, border: isSubmitting ? "1px solid #5a6268" : undefined, boxShadow: isSubmitting ? "none" : undefined, transition: "all 0.3s ease" }}>{isSubmitting ? (<><svg style={{ animation: "spin 1s linear infinite", width: "18px", height: "18px", display: "inline-block", flexShrink: 0, marginRight: "4px" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" /><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.9" /></svg><span>Envoi en cours...</span></>) : ("J'obtiens mon devis")}</button></p></div></div><div className="wpcf7-response-output" aria-hidden="true"></div></form></div></div></div></div></div></div></section></div></div></article></div></div></div></div></div><footer id="rs-footer" className="rs-footer footer-style-1"><div className="footer-top"><div className="container"><div className="row"><div className="col-lg-3 footer-0"><div className="footer-logo-wrap"><a href="/" className="footer-top-logo"><img style={{"height": "30px"}} src="/images/Logo-GT-500-225-px.png" alt="Garage du Théâtre GT" /></a></div><section id="text-3" className="widget widget_text"><div className="textwidget"><p>Garage de réparation automobile toutes marques à Paris. Un service de proximité qui allie qualité de service et rapidité d’intervention.</p></div></section><section id="medvillsocialiconwi_widget-1" className="widget widget_medvillsocialiconwi_widget"><ul className="footer_social"></ul></section></div><div className="col-lg-3 footer-1"><section id="contact_widget-1" className="widget widget_contact_widget"><h3 className="footer-title">Contact</h3><ul className="fa-ul"><li className="address1"><i className="fi fi-rr-map-marker-home"></i><span>139 Rue du Théâtre, Paris 15</span></li><li className="phone_li"><i className="fi fi-rr-phone-call"></i><a href="tel:0145750505">01 45 75 05 05</a><a href="tel:"></a></li><li className="email_li"><i className="fi fi-rr-envelope-plus"></i><a href="mailto:garagedutheatre@gmail.com">garagedutheatre@gmail.com</a><a href="mailto:"></a></li></ul></section></div><div className="col-lg-3 footer-2"><section id="nav_menu-2" className="widget widget_nav_menu"><h3 className="footer-title">Nos services</h3><div className="menu-footermenu-container"><ul id="menu-footermenu" className="menu"><li id="menu-item-16568" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-16568"><a href="/">Accueil</a></li><li id="menu-item-16567" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16567"><a href="/a-propos">A propos</a></li><li id="menu-item-16566" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16566"><a href="/nos-services">Nos services</a></li><li id="menu-item-16570" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-16530 current_page_item menu-item-16570"><a href="/devis" aria-current="page">Devis</a></li><li id="menu-item-16569" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16569"><a href="/contact">Contact</a></li></ul></div></section></div><div className="col-lg-3 footer-3"><section id="custom_html-1" className="widget_text widget widget_custom_html"><h3 className="footer-title">Heures d’ouverture</h3><div className="textwidget custom-html-widget">Lundi : 09:00-18:00

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
