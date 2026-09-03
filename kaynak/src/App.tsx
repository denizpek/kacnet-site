import FeaturesCards from "@/components/ui/feature-shader-cards";
import { CinematicHero } from "@/components/ui/hero-shader";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <main className="relative z-10 w-full bg-background rounded-b-3xl border-b border-border shadow-xl">
        <CinematicHero />
        <FeaturesCards />
      </main>

      <CinematicFooter />
    </div>
  );
}
