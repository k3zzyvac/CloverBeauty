"use client";

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

const branches = [
  {
    id: "sube-1",
    name: "Malatya Park Şubesi",
    address: "İnönü Mah. İnönü Cad. Malatyapark Ofis No:174/2 Kat:14 Daire:80, 44070 Yeşilyurt/Malatya",
    phone: "0532 156 1444",
    phoneLink: "tel:05321561444",
    image: "/images/Kart1.webp",
  },
  {
    id: "sube-2",
    name: "Karakavak Şubesi",
    address: "Karakavak, Güngör Cd. 22-28, 44110 Yeşilyurt/Malatya",
    phone: "0532 156 1444",
    phoneLink: "tel:05321561444",
    image: "/images/Kart2.webp",
  },
];

const Branches = () => {
  return (
    <section id="subelerimiz" style={{ backgroundColor: "var(--bg-creamy)", padding: "100px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{ color: "var(--accent-rose)", textTransform: "uppercase", letterSpacing: "3px", fontSize: "12px", fontWeight: "700" }}>Lokasyonlarımız</span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginTop: "10px" }}>Şubelerimiz</h2>
          <div style={{ width: "60px", height: "3px", backgroundColor: "var(--accent-rose)", margin: "24px auto" }}></div>
        </div>

        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "40px" 
          }}
        >
          {branches.map((branch, index) => (
            <div 
              key={index}
              className="premium-frame"
              style={{ padding: "0", border: "none", overflow: "hidden", display: "flex", flexDirection: "column", backgroundColor: "var(--white)" }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image 
                  src={branch.image} 
                  alt={`Clover Beauty - ${branch.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqCAAIAAAAbCQAALiS/v/6v3YAAAA="
                />
              </div>
              <div style={{ padding: "40px", display: "flex", flexDirection: "column", flexGrow: 1, alignItems: "center", textAlign: "center" }}>
                <h3 style={{ fontSize: "24px", color: "var(--accent-bronze)", marginBottom: "20px" }}>{branch.name}</h3>
                
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                  <MapPin size={20} className="icon-rose" style={{ flexShrink: 0, color: "var(--accent-rose)" }} aria-label="Adres" />
                  <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6" }}>
                    {branch.address}
                  </p>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                  <Phone size={20} className="icon-rose" style={{ flexShrink: 0, color: "var(--accent-rose)" }} aria-label="Telefon" />
                  <a href={branch.phoneLink} style={{ color: "var(--accent-bronze)", fontSize: "16px", fontWeight: "600" }}>
                    {branch.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
