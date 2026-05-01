"use client";

import Image from "next/image";
import { ShieldCheck, Zap, Award } from "lucide-react";

const TechSection = () => {
  return (
    <section id="teknoloji" style={{ backgroundColor: "var(--white)", padding: "100px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="tech-grid">
          <div>
            <span style={{ color: "var(--accent-rose)", textTransform: "uppercase", letterSpacing: "3px", fontSize: "12px", fontWeight: "700" }}>Güvenli Teknoloji</span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginTop: "10px", marginBottom: "30px" }}>En Son Teknoloji & <br />Güvenli Uygulama</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: "1.8", marginBottom: "40px" }}>
              Clover Beauty olarak, size en ayrıcalıklı ve özel deneyimi sunmak için
              sağlığınızı ve konforunuzu her şeyin önünde tutuyoruz. Kullandığımız tüm cihazlar
              FDA onaylı olup, klinik ortamda test edilmiş premium markalardan oluşmaktadır.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", backgroundColor: "rgba(183, 110, 121, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck className="icon-rose" />
                </div>
                <div>
                  <h4 style={{ fontSize: "18px", marginBottom: "5px" }}>FDA Onaylı Sistemler</h4>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>Uluslararası güvenlik ve kalite standartlarına tam uyumluluk.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", backgroundColor: "rgba(183, 110, 121, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Zap className="icon-rose" />
                </div>
                <div>
                  <h4 style={{ fontSize: "18px", marginBottom: "5px" }}>Maksimum Etki, Minimum Acı</h4>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>En yeni nesil soğutma sistemleri ile konforlu uygulama deneyimi.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", backgroundColor: "rgba(183, 110, 121, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Award className="icon-rose" />
                </div>
                <div>
                  <h4 style={{ fontSize: "18px", marginBottom: "5px" }}>Uzman Uygulayıcılar</h4>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>Sertifikalı ve sürekli eğitim alan profesyonel kadro.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-image-container">
            <div className="tech-bg-circle" />
            <div className="premium-frame">
              <Image
                src="/images/Teknoloji.webp"
                alt="Clover Beauty Malatya - Premium Teknoloji"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Trust Badges */}
            <div className="trust-badge">
              <div className="fda-badge">FDA</div>
              <span className="badge-text">ONAYLI TEKNOLOJİ</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .icon-rose { color: var(--accent-rose); }
        
        .tech-image-container {
          position: relative;
          width: 100%;
        }

        .tech-bg-circle {
          width: 100%;
          aspect-ratio: 1/1;
          background-color: var(--bg-creamy);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        .premium-frame {
          position: relative;
          z-index: 1;
          border-radius: var(--radius-lg);
          overflow: hidden;
          width: 100%;
          aspect-ratio: 1/1;
          box-shadow: var(--shadow-premium);
        }

        .trust-badge {
          position: absolute;
          bottom: 40px;
          right: -20px;
          background: white;
          padding: 15px 25px;
          border-radius: 50px;
          box-shadow: var(--shadow-premium);
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .fda-badge {
          width: 30px;
          height: 30px;
          background-color: #005a9c;
          border-radius: 50%;
          color: white;
          font-size: 10px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-text {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-bronze);
        }

        @media (max-width: 992px) {
          .tech-grid { 
            grid-template-columns: 1fr !important; 
            gap: 60px !important; 
          }
          .tech-image-container { 
            max-width: 550px; 
            margin: 0 auto;
          }
          section { padding: 60px 0 !important; }
        }

        @media (max-width: 576px) {
          .tech-image-container {
            max-width: 100%;
          }
          .premium-frame {
            aspect-ratio: 4/5;
          }
          .trust-badge {
            bottom: 20px;
            right: 0;
            padding: 10px 15px;
          }
          .badge-text {
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default TechSection;
