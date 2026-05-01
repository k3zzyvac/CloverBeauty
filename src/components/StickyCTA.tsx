"use client";

import { Phone, MessageCircle } from "lucide-react";

const StickyCTA = () => {
  return (
    <div className="mobile-cta-bar">
      <a href="tel:05321561444" className="cta-button call" aria-label="Bizi hemen arayın">
        <Phone size={20} />
        <span>Hemen Ara</span>
      </a>
      <a href="https://wa.me/905321561444" target="_blank" className="cta-button whatsapp" aria-label="WhatsApp üzerinden bilgi alın">
        <MessageCircle size={20} />
        <span>WhatsApp Bilgi</span>
      </a>

      <style jsx>{`
        .mobile-cta-bar {
          display: none;
          position: fixed;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: white;
          padding: 8px;
          border-radius: 50px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          z-index: 1001;
          gap: 8px;
        }

        .cta-button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          transition: transform 0.2s ease;
        }

        .cta-button:active {
          transform: scale(0.96);
        }

        .call {
          background-color: var(--accent-bronze);
          color: white;
        }

        .whatsapp {
          background-color: #25d366;
          color: white;
        }

        @media (max-width: 768px) {
          .mobile-cta-bar {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};

export default StickyCTA;
