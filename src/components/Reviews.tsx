import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ayşe Y.",
    text: "Malatya'da böyle bir hizmet kalitesi gerçekten harika. Lazer epilasyon için geldim, sonuçlardan çok memnunum.",
    date: "1 ay önce"
  },
  {
    name: "Mehmet A.",
    text: "Cilt bakımı sonrası yüzümdeki ışıltı fark edilir düzeyde. Uzman kadro çok ilgili ve profesyonel.",
    date: "2 hafta önce"
  },
  {
    name: "Selin K.",
    text: "Kalıcı makyajda doğallık arıyorsanız tek adres. Microblading sonucum mükemmel oldu.",
    date: "3 hafta önce"
  }
];

const Reviews = () => {
  return (
    <section id="yorumlar" style={{ backgroundColor: "var(--bg-creamy)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "var(--accent-rose)", textTransform: "uppercase", letterSpacing: "3px", fontSize: "12px", fontWeight: "700" }}>Danışan Memnuniyeti</span>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginTop: "10px" }}>Sizden Gelenler</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {reviews.map((review, index) => (
            <div key={index} className="premium-frame" style={{ padding: "40px", backgroundColor: "white" }}>
              <div style={{ display: "flex", gap: "2px", marginBottom: "20px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-rose)" color="var(--accent-rose)" />
                ))}
              </div>
              <p style={{ color: "var(--text-main)", fontSize: "15px", fontStyle: "italic", marginBottom: "25px", lineHeight: "1.7" }}>
                "{review.text}"
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "700", color: "var(--accent-bronze)" }}>{review.name}</span>
                <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
