"use client"

import type React from "react"

import { Warp } from "@paper-design/shaders-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

// KaçNet özellikleri — hepsi uygulamanın gerçekten yaptığı işler.
const features: Feature[] = [
  {
    title: "Gerçek Deneme",
    description:
      "120 soru, 130 dakika, geri sayım ve optik ızgara. Süre duvar saatiyle işler — uygulamayı kapatsan da sınav sürer.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h2M8 12h2M8 16h2M13 8h4M13 12h4M13 16h4" />
      </svg>
    ),
  },
  {
    title: "Tahmini Net",
    description:
      "Bugün girsen kaç net? Ders başına yeterli ölçüm birikince sınav formülüyle hesaplanır; veri yetmiyorsa sayı uydurulmaz.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M4 14a8 8 0 0 1 16 0" />
        <path d="M12 14l4-4" />
        <circle cx="12" cy="14" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Boş Bırakma Analizi",
    description:
      "Tek şık eleyebiliyorsan işaretlemek kârlı. Güven beyanlarından gerçek isabetini ölçer, boşların kaç net kaybettirdiğini söyler.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <circle cx="8" cy="12" r="3.2" />
        <circle cx="16" cy="12" r="3.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Akıllı Tekrar",
    description:
      "Binlerce hap bilgi kartı, tam unutacakken karşına gelir. Fazla çalışmak kuyruğu şişirmez — sistem oyunlanamaz.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <rect x="5" y="7" width="13" height="13" rx="2" />
        <path d="M8 4h12v12" />
      </svg>
    ),
  },
  {
    title: "Yanlış Defteri",
    description:
      "Son denemesi yanlış ya da boş olan sorular tek destede birikir; doğrusunu çözünce kendiliğinden düşer.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M6 3h12v18l-6-4-6 4z" />
      </svg>
    ),
  },
  {
    title: "Kitapçık PDF",
    description:
      "Denemeni kâğıda dök: soru kitapçığı + optik cevap kâğıdı. Kâğıtta çöz, cevaplarını optik ekranla geri gir.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path d="M7 8V3h10v5" />
        <rect x="4" y="8" width="16" height="9" rx="2" />
        <path d="M8 17v4h8v-4" />
      </svg>
    ),
  },
]

export default function FeaturesCards() {
  // KaçNet paleti: mürekkep lacivert, kalem sarısı/amber, koyu yeşil,
  // tuğla kırmızısı, mor, mavi — hepsi kısık doygunlukta, "sınav salonu" tonu.
  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.32,
        softness: 1.0,
        distortion: 0.14,
        swirl: 0.55,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(222, 33%, 16%)", "hsl(222, 30%, 34%)", "hsl(42, 68%, 45%)", "hsl(43, 62%, 62%)"],
      },
      {
        proportion: 0.4,
        softness: 1.1,
        distortion: 0.18,
        swirl: 0.75,
        swirlIterations: 11,
        shape: "stripes" as const,
        shapeScale: 0.11,
        colors: ["hsl(152, 38%, 18%)", "hsl(152, 34%, 34%)", "hsl(45, 60%, 55%)", "hsl(48, 55%, 72%)"],
      },
      {
        proportion: 0.36,
        softness: 0.9,
        distortion: 0.16,
        swirl: 0.7,
        swirlIterations: 9,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(6, 42%, 26%)", "hsl(6, 45%, 45%)", "hsl(38, 60%, 52%)", "hsl(42, 66%, 68%)"],
      },
      {
        proportion: 0.42,
        softness: 1.15,
        distortion: 0.2,
        swirl: 0.8,
        swirlIterations: 13,
        shape: "stripes" as const,
        shapeScale: 0.09,
        colors: ["hsl(255, 26%, 24%)", "hsl(255, 24%, 42%)", "hsl(43, 62%, 55%)", "hsl(45, 58%, 70%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.15,
        swirl: 0.65,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(212, 40%, 22%)", "hsl(212, 36%, 40%)", "hsl(42, 64%, 50%)", "hsl(44, 60%, 66%)"],
      },
      {
        proportion: 0.4,
        softness: 1.0,
        distortion: 0.17,
        swirl: 0.7,
        swirlIterations: 9,
        shape: "stripes" as const,
        shapeScale: 0.12,
        colors: ["hsl(30, 45%, 24%)", "hsl(34, 48%, 40%)", "hsl(45, 66%, 55%)", "hsl(48, 62%, 72%)"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-5 tracking-tight">
            Ölçen bir uygulama
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sahte rozet yok, konfeti yok — ekranda gördüğün her sayı senin çözdüğün
            sorulardan hesaplanır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div key={index} className="relative h-80">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.5}
                    colors={shaderConfig.colors}
                  />
                </div>

                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-[#181510]/85 border border-white/15">
                  <div className="mb-6 drop-shadow-lg">{feature.icon}</div>

                  <h3 className="font-display text-2xl font-bold mb-4 text-white">{feature.title}</h3>

                  <p className="leading-relaxed flex-grow text-gray-100/90">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
