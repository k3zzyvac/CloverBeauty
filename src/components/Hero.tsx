"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative Background Element */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "40%",
          height: "80%",
          backgroundColor: "rgba(183, 110, 121, 0.05)",
          borderRadius: "50%",
          filter: "blur(100px)",
          zIndex: -1
        }}
      />

      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="hero-grid">
          <div className="hero-content" style={{ zIndex: 1 }}>
            <h1
              style={{
                fontSize: "clamp(40px, 5vw, 68px)",
                lineHeight: "1.1",
                marginBottom: "30px",
                color: "var(--accent-bronze)"
              }}
            >
              Cildinizin Hak Ettiği <br />
              <span style={{ color: "var(--accent-rose)", fontStyle: "italic" }}>Işıltı</span> Burada Başlar
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-muted)",
                marginBottom: "40px",
                maxWidth: "500px",
                lineHeight: "1.8"
              }}
            >
              Clover Beauty ayrıcalığıyla estetik ve lüksü bir araya getiriyoruz.
              Özel tasarım FDA onaylı cihazlarımızla, size premium bir güzellik deneyimi ve
              profesyonel bakım sunuyoruz.
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="#hizmetler"
                style={{
                  backgroundColor: "var(--accent-bronze)",
                  color: "white",
                  padding: "18px 36px",
                  borderRadius: "50px",
                  fontWeight: "600",
                  fontSize: "15px",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}
              >
                Hizmetlerimizi Keşfedin
              </a>
              <a
                href="https://wa.me/905321561444"
                target="_blank"
                style={{
                  border: "1px solid var(--accent-bronze)",
                  color: "var(--accent-bronze)",
                  padding: "18px 36px",
                  borderRadius: "50px",
                  fontWeight: "600",
                  fontSize: "15px",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}
              >
                WhatsApp Bilgi
              </a>
            </div>

            <div style={{ marginTop: "60px", display: "flex", gap: "40px" }}>
              <div>
                <h4 style={{ fontSize: "24px", color: "var(--accent-rose)" }}>12+</h4>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase" }}>Yıllık Deneyim</p>
              </div>
              <div>
                <h4 style={{ fontSize: "24px", color: "var(--accent-rose)" }}>2000+</h4>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase" }}>Mutlu Müşteri</p>
              </div>
              <div>
                <h4 style={{ fontSize: "24px", color: "var(--accent-rose)" }}>FDA</h4>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase" }}>Onaylı Cihazlar</p>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper" style={{ position: "relative" }}>
            <div
              className="premium-frame"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/5",
                overflow: "hidden",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-premium)"
              }}
            >
              <Image
                src="/images/Mekan1.webp"
                alt="Clover Beauty Malatya - Lüks Güzellik Merkezi"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority
                loading="eager"
              />
            </div>
            {/* Small floating detail image */}
            <div
              className="premium-frame"
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "180px",
                aspectRatio: "1/1",
                zIndex: 2,
                borderRadius: "var(--radius-md)"
              }}
            >
              <Image
                src="/images/Mekan.webp"
                alt="Premium Estetik Deneyim"
                fill
                sizes="180px"
                style={{ objectFit: "cover", borderRadius: "var(--radius-md)" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid_template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-image-wrapper {
            max-width: 450px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
