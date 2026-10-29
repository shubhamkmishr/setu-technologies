"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label="SETU Technologies home">
          <span className="wordmark-mark" aria-hidden="true">S</span>
          <span>SETU <small>TECHNOLOGIES</small></span>
        </Link>
        <div className="desktop-links">
          {menuItems.map((item) => <Link key={item.href} href={item.href}>{item.name}</Link>)}
        </div>
        <Link className="button button-dark nav-cta" href="#contact">
          Let&apos;s Talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <div className={`mobile-links${isMenuOpen ? " is-open" : ""}`} id="mobile-navigation" hidden={!isMenuOpen}>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
        ))}
        <Link href="#contact" className="mobile-cta" onClick={() => setIsMenuOpen(false)}>Let&apos;s Talk <ArrowUpRight size={16} /></Link>
      </div>
    </nav>
  );
}
