"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Anasayfa", href: "#" },
    { name: "Hizmetlerimiz", href: "#hizmetler" },
    { name: "Sonuçlar", href: "#sonuclar" },
    { name: "Teknoloji", href: "#teknoloji" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? "rgba(245, 240, 235, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "all 0.4s ease",
        height: isScrolled ? "80px" : "100px",
        display: "flex",
        alignItems: "center",
        borderBottom: isScrolled ? "1px solid rgba(183, 110, 121, 0.1)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            className="serif"
            style={{
              fontSize: "24px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--accent-bronze)",
            }}
          >
            Clover <span style={{ color: "var(--accent-rose)" }}>Beauty</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }} className="desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--accent-bronze)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-rose)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-bronze)")}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:05321561444"
            style={{
              backgroundColor: "var(--accent-bronze)",
              color: "var(--white)",
              padding: "12px 24px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Phone size={16} />
            0532 156 1444
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: "var(--accent-bronze)" }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "100px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--bg-creamy)",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            zIndex: 999,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "var(--accent-bronze)",
                fontFamily: "var(--font-playfair)",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 992px) {
          .desktop-only {
            display: none !important;
          }
        }
        @media (min-width: 993px) {
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
