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
        position: "relative",
        overflow: "hidden"
      }}
      className="hero-section"
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
        {/*
         * MOBILE-FIRST GRID:
         * Base → tek kolon, dikey dizilim (flex-col benzeri)
         * md (≥768px) → 2 kolon yatay dizilim
         */}
        <div className="hero-grid">
          <div className="hero-content" style={{ zIndex: 1 }}>
            {/*
             * TYPOGRAPHY:
             * Mobilde clamp başlangıcı 32px'e çekildi — küçük ekranda
             * başlık satır kırmadan okunabilir kalır.
             * Masaüstünde orijinal 68px üst sınırı korundu.
             */}
            <h1 className="hero-title">
              Cildinizin Hak Ettiği <br />
              <span style={{ color: "var(--accent-rose)", fontStyle: "italic" }}>Işıltı</span> Burada Başlar
            </h1>

            {/*
             * PARAGRAPH:
             * maxWidth kaldırıldı — zaten grid kolonu sınırlar.
             * font-size mobilde biraz küçüldü, okunabilirlik korundu.
             */}
            <p className="hero-desc">
              Clover Beauty ayrıcalığıyla estetik ve lüksü bir araya getiriyoruz.
              Özel tasarım FDA onaylı cihazlarımızla, size premium bir güzellik deneyimi ve
              profesyonel bakım sunuyoruz.
            </p>

            {/*
             * BUTONLAR:
             * flex-col (base) → mobilde butonlar alt alta, tam genişlik.
             * flex-row (md) → masaüstünde yan yana, orijinal hali.
             * Böylece küçük ekranlarda buton metni kesilmez / taşmaz.
             */}
            <div className="hero-cta">
              <a
                href="#hizmetler"
                className="btn-primary"
                aria-label="Hizmetlerimizi inceleyin"
              >
                Hizmetlerimizi Keşfedin
              </a>
              <a
                href="https://wa.me/905321561444"
                target="_blank"
                className="btn-outline"
                aria-label="WhatsApp üzerinden bilgi alın"
              >
                WhatsApp Bilgi
              </a>
            </div>

            {/*
             * İSTATİSTİKLER:
             * gap ve marginTop mobilde küçültüldü — ekstra boşluk azaldı.
             * Masaüstünde orijinal değerler korundu.
             */}
            <div className="hero-stats">
              <div>
                <h4 style={{ color: "var(--accent-rose)" }} className="stat-number">12+</h4>
                <p style={{ color: "var(--text-muted)", textTransform: "uppercase" }} className="stat-label">Yıllık Deneyim</p>
              </div>
              <div>
                <h4 style={{ color: "var(--accent-rose)" }} className="stat-number">2000+</h4>
                <p style={{ color: "var(--text-muted)", textTransform: "uppercase" }} className="stat-label">Mutlu Müşteri</p>
              </div>
              <div>
                <h4 style={{ color: "var(--accent-rose)" }} className="stat-number">FDA</h4>
                <p style={{ color: "var(--text-muted)", textTransform: "uppercase" }} className="stat-label">Onaylı Cihazlar</p>
              </div>
            </div>
          </div>

          {/*
           * GÖRSEL WRAPPER:
           * Mobilde otomatik ortalanır, max-width ile kontrol edilir.
           * Float eden küçük görsel, mobilde left:-30px taşmasını önlemek için
           * left:0 / display:none → md'de orijinal konumuna geri döner.
           */}
          <div className="hero-image-wrapper">
            <div
              className="premium-frame hero-main-image"
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
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqCAAIAAAAbCQAALiS/v/6v3YAAAA="
              />
            </div>

            {/* Small floating detail image — only shown on md+ */}
            <div
              className="premium-frame hero-float-img"
              style={{
                position: "absolute",
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
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqCAAIAAAAbCQAALiS/v/6v3YAAAA="
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ─── BASE (Mobile-First) ─────────────────────────── */
        .hero-section {
          padding-top: 90px;   /* Navbar yüksekliği mobilde daha az */
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;   /* Tek kolon — dikey */
          gap: 36px;
          align-items: center;
          text-align: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Başlık: mobilde 32px başlıyor, ekrana göre büyür */
        .hero-title {
          font-size: clamp(32px, 8vw, 68px);
          line-height: 1.15;
          margin-bottom: 20px;
          color: var(--accent-bronze);
        }

        .hero-desc {
          font-size: 15px;
          color: var(--text-muted);
          margin-bottom: 28px;
          line-height: 1.8;
        }

        /* Butonlar: mobilde alt alta, tam genişlik */
        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .btn-primary {
          display: block;
          background-color: var(--accent-bronze);
          color: white;
          padding: 16px 28px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: center;
        }

        .btn-outline {
          display: block;
          border: 1px solid var(--accent-bronze);
          color: var(--accent-bronze);
          padding: 16px 28px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: center;
        }

        /* İstatistikler: mobilde daha az boşluk */
        .hero-stats {
          margin-top: 36px;
          display: flex;
          gap: 28px;
        }

        .stat-number {
          font-size: 22px;
        }

        .stat-label {
          font-size: 11px;
        }

        /* Görsel wrapper: mobilde ortalanır */
        .hero-image-wrapper {
          position: relative;
          max-width: 420px;
          margin: 0 auto;
          width: 100%;
        }

        /* Float görsel mobilde gizlenir — taşmayı önler */
        .hero-float-img {
          display: none;
        }

        /* ─── TABLET (md ≥ 768px) ────────────────────────── */
        @media (min-width: 768px) {
          .hero-section {
            padding-top: 120px;  /* Masaüstündeki orijinal değer */
          }

          .hero-grid {
            grid-template-columns: 1fr 1fr;  /* 2 kolon — yatay */
            gap: 60px;
            text-align: left;
          }

          .hero-content {
            align-items: flex-start;
          }

          .hero-title {
            font-size: clamp(40px, 5vw, 68px);
            margin-bottom: 30px;
          }

          .hero-desc {
            font-size: 18px;
            margin-bottom: 40px;
          }

          /* Butonlar: masaüstünde yan yana */
          .hero-cta {
            flex-direction: row;
            gap: 20px;
            width: auto;
          }

          .btn-primary,
          .btn-outline {
            display: inline-block;
            padding: 18px 36px;
            font-size: 15px;
          }

          .hero-stats {
            margin-top: 60px;
            gap: 40px;
          }

          .stat-number { font-size: 24px; }
          .stat-label  { font-size: 12px; }

          /* Görsel wrapper: masaüstünde serbest */
          .hero-image-wrapper {
            max-width: none;
            margin: 0;
          }

          /* Float görsel masaüstünde görünür */
          .hero-float-img {
            display: block;
            bottom: -30px;
            left: -30px;
            width: 180px;
            aspect-ratio: 1/1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
