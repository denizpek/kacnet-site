"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Warp } from "@paper-design/shaders-react";
import { MagneticButton } from "@/components/ui/motion-footer";

// Sinematik giriş: footer'la aynı dil — tam ekran shader, dev parlayan
// başlık, cam kapsüller. Sayı bandı da girişin içinde (ayrı kart kalktı).
const STYLES = `
.hero-text-glow {
  font-family: 'Hanken Grotesk', sans-serif;
  background: linear-gradient(180deg, #FFFDF8 0%, rgba(255, 253, 248, 0.55) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 26px rgba(246, 217, 122, 0.35));
}
.hero-grid {
  background-size: 52px 52px;
  background-image:
    linear-gradient(to right, rgba(255,253,248,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,253,248,0.05) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, black 40%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent);
}
.hero-pill {
  background: linear-gradient(145deg, rgba(255,253,248,0.97) 0%, rgba(248,241,229,0.92) 100%);
  box-shadow: 0 14px 40px -12px rgba(0,0,0,0.55), inset 0 1px 1px rgba(255,255,255,0.9);
  border: 1px solid rgba(255,253,248,0.5);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-pill-ghost {
  background: rgba(255,253,248,0.08);
  border: 1px solid rgba(255,253,248,0.28);
  color: rgba(255,253,248,0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
`;

function Sayi({ deger, etiket }: { deger: string; etiket: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-display text-2xl md:text-3xl font-extrabold tabular-nums text-white">{deger}</span>
      <span className="text-[11px] md:text-xs text-white/60 font-semibold tracking-[0.18em] uppercase">{etiket}</span>
    </div>
  );
}

export function CinematicHero() {
  const iceriRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !iceriRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        iceriRef.current!.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 1.0, ease: "power3.out", delay: 0.15 }
      );
    }, iceriRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Tam ekran shader: mürekkep + amber, çok yavaş */}
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.38}
          softness={1.1}
          distortion={0.16}
          swirl={0.7}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.09}
          scale={1}
          rotation={0}
          speed={0.35}
          colors={["hsl(222, 36%, 10%)", "hsl(222, 30%, 22%)", "hsl(42, 70%, 40%)", "hsl(45, 62%, 58%)"]}
        />
      </div>
      {/* Okunabilirlik örtüsü + doku */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12151f]/55 via-[#12151f]/30 to-[#181510]/75" />
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <div ref={iceriRef} className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24 gap-8 max-w-4xl mx-auto w-full">
        <div className="flex gap-2.5" aria-hidden="true">
          <span className="w-5 h-5 rounded-full border-[3px] border-white/90" />
          <span className="w-[22px] h-[22px] rounded-full bg-fosfor" />
          <span className="w-5 h-5 rounded-full border-[3px] border-white/90" />
        </div>

        <h1 className="hero-text-glow text-6xl md:text-8xl font-black tracking-tighter leading-[0.95]">
          Kaç net<br />yaptın?
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
          Bu soruya <b className="text-fosfor">gerçek veriyle</b> cevap veren KPSS uygulaması:
          akıllı tekrar, gerçek deneme, net tahmini — Lisans, Önlisans, Ortaöğretim.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            as="a"
            href="https://apps.apple.com/tr/app/id6806163582"
            className="hero-pill px-10 py-5 rounded-full text-[#181510] font-display font-bold text-sm md:text-base flex items-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.56.04 2.87.67 3.55 1.76-3.13 1.77-2.62 5.92.35 7.14-.65 1.58-1.57 3.1-2.57 4.03zm-3.21-14.7c-.55 1.4-1.89 2.37-3.25 2.28.09-1.5 1.05-2.82 2.38-3.4 1.25-.57 2.66-.41 3.25.04-.15.35-.26.72-.38 1.08z" />
            </svg>
            App Store'dan İndir
          </MagneticButton>

          <MagneticButton
            as="span"
            className="hero-pill-ghost px-8 py-5 rounded-full font-display font-bold text-sm md:text-base flex items-center gap-3 cursor-default"
          >
            Google Play · çok yakında
          </MagneticButton>
        </div>
      </div>

      {/* Gerçek sayılar — girişin alt bandı */}
      <div className="relative z-10 w-full border-t border-white/15 bg-[#181510]/45 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 py-6 grid grid-cols-4 gap-4">
          <Sayi deger="857" etiket="Alt konu" />
          <Sayi deger="5.231" etiket="Soru" />
          <Sayi deger="75" etiket="Deneme" />
          <Sayi deger="5.962" etiket="Kart" />
        </div>
      </div>
    </section>
  );
}
