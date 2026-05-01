"use client";

import { MapPin, Phone, MessageCircle } from "lucide-react";

// Custom Instagram Icon SVG
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="iletisim" style={{ backgroundColor: "var(--accent-bronze)", color: "white", padding: "80px 0 100px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "60px" }}>
          <div>
            <h3 className="serif" style={{ color: "white", fontSize: "24px", marginBottom: "30px" }}>
              Clover <span style={{ color: "var(--accent-rose)" }}>Beauty</span>
            </h3>
            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", lineHeight: "1.8", marginBottom: "30px" }}>
              Malatya'da, estetik ve ayrıcalıklı hizmet anlayışımızla size özel,
              premium bir güzellik deneyimi sunuyoruz.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} aria-label="Instagram profilimizi takip edin"><InstagramIcon size={20} /></a>
              <a href="https://wa.me/905321561444" style={{ color: "white" }} aria-label="WhatsApp üzerinden bilgi alın"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", color: "white", marginBottom: "30px" }}>İletişim</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                <MapPin size={20} style={{ color: "var(--accent-rose)", flexShrink: 0 }} aria-hidden="true" />
                <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.85)" }}>
                  İnönü Mahallesi, İnönü Caddesi,<br /> 
                  Malatya Ofis Plaza, Kat: 4, No: 21,<br /> 
                  44100 Yeşilyurt/Malatya
                </p>
              </div>
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <Phone size={20} style={{ color: "var(--accent-rose)", flexShrink: 0 }} aria-hidden="true" />
                <a href="tel:05321561444" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.85)" }} aria-label="Telefon numaramız: 0532 156 1444">0532 156 1444</a>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", color: "white", marginBottom: "30px" }}>Konum</h4>
            <div 
              className="premium-frame"
              style={{ padding: "0", overflow: "hidden", aspectRatio: "16/9", border: "none" }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.8824810759083!2d38.30752497645069!3d38.35165847184852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407636e08dd10291%3A0xc39f886f7f2d575c!2sMalatya%20Ofis%20Plaza!5e0!3m2!1str!2str!4v1712945000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Clover Beauty Malatya Konumu"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", textAlign: "center" }}>
          <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.75)" }}>
            © 2026 Clover Beauty Malatya. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
