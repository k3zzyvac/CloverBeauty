"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const results = [
  { id: 1, title: "Cilt Bakımı Değişimi", src: "/images/beforeafter1.jpg" },
  { id: 2, title: "Microblading İşleminin Değişimi", src: "/images/beforeafter2.jpg" },
  { id: 3, title: "Cilt Bakımı Değişimi", src: "/images/beforeafter3.jpg" },
  { id: 4, title: "Akne Tedavasi Değişimi", src: "/images/beforeafter4.jpg" },
];

const BeforeAfterSlider = () => {
  return (
    <section id="sonuclar" style={{ backgroundColor: "var(--bg-creamy)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "var(--accent-rose)", textTransform: "uppercase", letterSpacing: "3px", fontSize: "12px", fontWeight: "700" }}>Gerçek Sonuçlar</span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginTop: "10px" }}>Değişimi Keşfedin</h2>
          <p style={{ color: "var(--text-muted)", marginTop: "20px", maxWidth: "600px", margin: "20px auto 0" }}>
            Clover Beauty ayrıcalığıyla elde edilen, filtrelisiz ve gerçek uygulama sonuçlarımız.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          style={{ padding: "20px 0 60px" }}
        >
          {results.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="premium-frame" style={{ position: "relative", overflow: "hidden", backgroundColor: "white" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={index === 0}
                  />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h4 style={{ fontSize: "18px", color: "var(--accent-bronze)" }}>{item.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        :global(.swiper-button-next), :global(.swiper-button-prev) {
          color: var(--accent-bronze) !important;
          background: var(--white);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: var(--shadow-soft);
        }
        :global(.swiper-button-next:after), :global(.swiper-button-prev:after) {
          font-size: 20px !important;
        }
        :global(.swiper-pagination-bullet-active) {
          background: var(--accent-rose) !important;
        }
      `}</style>
    </section>
  );
};

export default BeforeAfterSlider;
