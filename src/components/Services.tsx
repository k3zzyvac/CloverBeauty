"use client";

import Image from "next/image";
import { Sparkles, Zap, Ruler, Brush } from "lucide-react";

const services = [
  {
    id: "lazer",
    title: "Lazer Epilasyon",
    description: "Son teknoloji cihazlarla, konforlu ve kalıcı pürüzsüzlük elde edin.",
    icon: <Zap size={24} className="icon-rose" />,
    image: "/images/Giris1.webp",
  },
  {
    id: "cilt",
    title: "Cilt Bakımı",
    description: "Hydrafacial ve medikal bakımlarla cildinize ihtiyacı olan ışıltıyı verin.",
    icon: <Sparkles size={24} className="icon-rose" />,
    image: "/images/Giris2.webp",
  },
  {
    id: "bolgesel",
    title: "Bölgesel İncelme",
    description: "G5 ve Lenf Drenaj ile vücudunuzu şekillendirin ve sıkılaşın.",
    icon: <Ruler size={24} className="icon-rose" />,
    image: "/images/Mekan.webp",
  },
  {
    id: "makyaj",
    title: "Kalıcı Makyaj",
    description: "Microblading ve dudak renklendirme ile doğal güzelliğinizi vurgulayın.",
    icon: <Brush size={24} className="icon-rose" />,
    image: "/images/Tabela1.webp",
  },
];

const Services = () => {
  return (
    <section id="hizmetler" style={{ backgroundColor: "var(--white)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{ color: "var(--accent-rose)", textTransform: "uppercase", letterSpacing: "3px", fontSize: "12px", fontWeight: "700" }}>Neler Sunuyoruz?</span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginTop: "10px" }}>Profesyonel Hizmetlerimiz</h2>
          <div style={{ width: "60px", height: "3px", backgroundColor: "var(--accent-rose)", margin: "24px auto" }}></div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card premium-frame"
              style={{ padding: "0", border: "none", overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqCAAIAAAAbCQAALiS/v/6v3YAAAA="
                />
              </div>
              <div style={{ padding: "30px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                  {service.icon}
                  <h3 style={{ fontSize: "20px" }}>{service.title}</h3>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6" }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .icon-rose {
          color: var(--accent-rose);
        }
        .service-card {
          border-radius: var(--radius-md) !important;
        }
        .service-card:hover button {
          color: var(--accent-rose) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
