"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
      };
      const handleResize = () => {
        if (window.innerWidth > 991) {
          setIsMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", handleResize);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("resize", handleResize);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Accueil", icon: "fa-solid fa-house" },
    { href: "/a-propos", label: "À propos", icon: "fa-solid fa-circle-info" },
    { href: "/nos-services", label: "Nos services", icon: "fa-solid fa-wrench" },
    { href: "/contact", label: "Contact", icon: "fa-solid fa-envelope" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="single-header header-style1 mainsmenu" id="rs-header">
        <div className={`header-inner menu-sticky stuck ${isSticky ? "sticky" : ""}`}>
          {/* Top toolbar */}
          <div className="toolbar-area dd">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="toolbar-contact">
                    <ul className="rs-contact-info">
                      <li className="rs-contact-email">
                        <i className="fi fi-rr-envelope-plus"></i>
                        <a href="mailto:garagedutheatre@gmail.com">garagedutheatre@gmail.com</a>
                      </li>
                      <li className="rs-contact-phone">
                        <i className="fi fi-rr-phone-call"></i>
                        <a href="tel:0145750505">01 45 75 05 05</a>
                      </li>
                      <li className="rs-hours rs-contact-email">
                        <i className="fi fi-rr-map-marker-home"></i>
                        139 Rue du Théâtre, Paris 15
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="toolbar-sl-share">
                    <ul className="clearfix">
                      <li className="opening">
                        <em>
                          <i className="fi-rr-time-add"></i> Lun-Ven : 09:00-18:00 - Sam : 09:00-13:00
                        </em>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main header row */}
          <div className="menu-area menu_type_">
            <div className="container">
              <div className="row-table">
                {/* Logo */}
                <div className="col-cell header-logo">
                  <div className="logo-area">
                    <Link href="/" className="custom-logo-link" rel="home">
                      <img
                        alt="Garage du Théâtre GT"
                        className="custom-logo"
                        decoding="async"
                        fetchPriority="high"
                        height="225"
                        sizes="(max-width: 500px) 100vw, 500px"
                        src="/images/2-1.png"
                        width="500"
                      />
                    </Link>
                  </div>
                  <div className="logo-area sticky-logo">
                    <Link href="/" className="custom-logo-link" rel="home">
                      <img
                        alt="Garage du Théâtre GT"
                        className="custom-logo"
                        decoding="async"
                        fetchPriority="high"
                        height="225"
                        sizes="(max-width: 500px) 100vw, 500px"
                        src="/images/2-1.png"
                        width="500"
                      />
                    </Link>
                  </div>
                </div>

                {/* Desktop menu */}
                <div className="col-cell menu-responsive">
                  <nav className="nav navbar">
                    <div className="navbar-menu">
                      <div className="menu-gtmainmenu-container">
                        <ul className="menu" id="primary-menu-single">
                          {navLinks.map((link) => (
                            <li
                              key={link.href}
                              className={`menu-item menu-item-type-post_type menu-item-object-page ${
                                isActive(link.href) ? "current-menu-item page_item current_page_item" : ""
                              }`}
                            >
                              <Link href={link.href}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>

                {/* Quote button & Classic Mobile Hamburger */}
                <div className="col-cell header-quote">
                  <div className="btn_quote">
                    <Link className="quote-button" href="/devis">
                      Obtenir un devis gratuit
                    </Link>
                  </div>

                  {/* Classic Mobile Hamburger Button */}
                  <div className="sidebarmenu-area text-right mobilehum">
                    <button
                      type="button"
                      className="classic-mobile-hamburger"
                      onClick={() => setIsMenuOpen(true)}
                      aria-label="Ouvrir le menu"
                      aria-expanded={isMenuOpen}
                    >
                      <span className="hamburger-bar"></span>
                      <span className="hamburger-bar"></span>
                      <span className="hamburger-bar"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-nav-backdrop ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Over Drawer */}
      <aside
        className={`mobile-nav-drawer ${isMenuOpen ? "open" : ""}`}
        aria-label="Menu mobile"
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-nav-drawer-header">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="mobile-nav-drawer-logo">
            <img
              src="/images/2-1.png"
              alt="Garage du Théâtre GT"
              width="200"
              height="90"
              style={{ maxHeight: "42px", width: "auto", objectFit: "contain" }}
            />
          </Link>
          <button
            type="button"
            className="mobile-nav-drawer-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="mobile-nav-drawer-body">
          {/* Navigation Links */}
          <nav className="mobile-drawer-nav">
            <ul className="mobile-drawer-menu">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`mobile-drawer-link ${isActive(link.href) ? "active" : ""}`}
                  >
                    <i className={link.icon}></i>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Highlighted Quote CTA */}
          <div className="mobile-drawer-cta">
            <Link
              href="/devis"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-drawer-cta-btn"
            >
              <i className="fa-solid fa-calculator"></i>
              <span>Obtenir un devis gratuit</span>
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="mobile-drawer-contact-card">
            <div className="mobile-drawer-contact-title">Contact & Infos</div>
            <a href="tel:0145750505" className="mobile-drawer-contact-item phone">
              <i className="fa-solid fa-phone"></i>
              <div>
                <span className="item-label">Appelez-nous</span>
                <span className="item-val">01 45 75 05 05</span>
              </div>
            </a>
            <a href="mailto:garagedutheatre@gmail.com" className="mobile-drawer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <span className="item-label">Email</span>
                <span className="item-val">garagedutheatre@gmail.com</span>
              </div>
            </a>
            <div className="mobile-drawer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <span className="item-label">Adresse</span>
                <span className="item-val">139 Rue du Théâtre, Paris 15</span>
              </div>
            </div>
            <div className="mobile-drawer-contact-item">
              <i className="fa-solid fa-clock"></i>
              <div>
                <span className="item-label">Horaires d'ouverture</span>
                <span className="item-val">Lun - Ven : 09h00 - 18h00<br/>Samedi : 09h00 - 13h00</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
