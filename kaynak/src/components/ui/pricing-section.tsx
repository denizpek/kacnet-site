// Fiyat bölümü — PayTR incelemesi hizmet fiyatlarının sitede herkese açık
// görünmesini ister (12 Eylül 2026). Web fiyatları `web_planlar` ile aynı
// tutulur; değişince ikisi birlikte güncellenir.
const planlar = [
  { ad: "Haftalık", fiyat: "59,99 TL", donem: "7 gün", not: "Kısa süreli yoğun çalışma için." },
  { ad: "Aylık", fiyat: "149,99 TL", donem: "30 gün", not: "En çok tercih edilen plan.", one: true },
]

import { useEffect } from "react"

export default function PricingSection() {
  // React bölümü yükledikten sonra tarayıcı #fiyatlar kaydırmasını yapmış olur; elle kaydır.
  useEffect(() => {
    const git = () => {
      if (window.location.hash !== "#fiyatlar") return
      const el = document.getElementById("fiyatlar")
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 16, behavior: "instant" as ScrollBehavior })
    }
    // Hero shader ve yazı tipleri yüklenince yerleşim değişir; iki kez dene.
    const z1 = window.setTimeout(git, 300), z2 = window.setTimeout(git, 1500)
    window.addEventListener("hashchange", git)
    return () => { window.clearTimeout(z1); window.clearTimeout(z2); window.removeEventListener("hashchange", git) }
  }, [])
  return (
    <section id="fiyatlar" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-5 tracking-tight">
            KaçNet Premium fiyatları
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Web'de satın alınan abonelik: bütün konular, ders quizi, Karma Test, bütün
            denemeler ve KPSS A alan içeriği. Fiyatlar KDV dahildir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {planlar.map((p) => (
            <div
              key={p.ad}
              className={`rounded-3xl border bg-card p-8 md:p-10 shadow-sm ${p.one ? "border-primary" : "border-border"}`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground">{p.ad}</h3>
                {p.one && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">en çok tercih edilen</span>
                )}
              </div>
              <div className="font-display text-5xl font-extrabold text-foreground tracking-tight tabular-nums">
                {p.fiyat}
                <span className="text-base font-medium text-muted-foreground ml-2">/ {p.donem}</span>
              </div>
              <p className="text-muted-foreground mt-4 leading-relaxed">{p.not}</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>Kendiliğinden yenilenir; dilediğin an iptal edersin.</li>
                <li>İptal sonrası erişim ödenmiş dönemin sonuna kadar sürer.</li>
                <li>Ödeme PayTR'nin güvenli sayfasında kartla alınır.</li>
              </ul>
              <a
                href="/uygulama/premium"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-bold text-white hover:opacity-90"
              >
                {p.ad} planı başlat
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 leading-relaxed">
          Ücretsiz hesapta her dersin ilk konusu, ilk ders denemesi ve ilk tam deneme açıktır;
          kendi verin (ilerleme, tahmini net, yanlış defteri, yedek) hiçbir zaman kilitlenmez.
          Mobil uygulamadaki abonelik fiyatları mağazada gösterilir.{" "}
          <a href="/sozlesme.html" className="underline">Mesafeli Satış Sözleşmesi</a> ·{" "}
          <a href="/iade.html" className="underline">Teslimat, İptal ve İade Koşulları</a>
        </p>
      </div>
    </section>
  )
}
