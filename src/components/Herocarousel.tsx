import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroSlide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  accent: string;
  bg: string;
  img: string;
  tag: string;
  discountLabel?: string;
}

export interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
  onCtaClick?: (slide: HeroSlide) => void;
  onCtaSecondaryClick?: (slide: HeroSlide) => void;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowLeft = () => <NavArrowLeft className="text-white size-5" />;

const ArrowRight = () => <NavArrowRight className="text-white size-5" />;

const ArrowCta = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path d="m5 12 14 0M13 6l6 6-6 6" />
  </svg>
);

const HeartIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" fill={color} viewBox="0 0 24 24">
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
  </svg>
);

// ─── Slide Card ───────────────────────────────────────────────────────────────

const SlideCard = ({
  slide,
  onCtaClick,
  onCtaSecondaryClick,
}: {
  slide: HeroSlide;
  onCtaClick?: (slide: HeroSlide) => void;
  onCtaSecondaryClick?: (slide: HeroSlide) => void;
}) => (
  <div
    className="flex-[0_0_100%] min-w-0 relative overflow-hidden flex items-center min-h-[clamp(500px,80vh,720px)]"
    style={{ background: slide.bg }}
  >
    {/* Decorative rings */}
    <div
      className="absolute -top-24 -right-24 w-125 h-125 rounded-full border pointer-events-none"
      style={{ borderColor: `${slide.accent}22` }}
    />
    <div
      className="absolute -bottom-36 -left-20 w-100 h-100 rounded-full border pointer-events-none"
      style={{ borderColor: `${slide.accent}15` }}
    />

    <div className="max-w-7xl mx-auto px-6 py-16 w-full relative z-10">
      <div className="grid md:grid-cols-2 gap-14 items-center text-center md:text-left">
        {/* Text column */}
        <div>
          <div className="flex gap-3 flex-wrap mb-6 justify-center md:justify-start">
            <span
              className="px-4 py-1 rounded-full text-xs uppercase tracking-widest font-semibold border"
              style={{
                background: slide.accent + "22",
                color: slide.accent,
                borderColor: slide.accent + "44",
              }}
            >
              {slide.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs border border-white/20 text-white/70">
              {slide.tag}
            </span>
          </div>

          <h1 className="font-serif text-white font-extrabold leading-tight tracking-tight text-[clamp(40px,6vw,76px)] whitespace-pre-line mb-6">
            {slide.title}
          </h1>

          <p className="text-white/70 max-w-md text-[17px] leading-relaxed mb-10 mx-auto md:mx-0">
            {slide.subtitle}
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <button
              onClick={() => onCtaClick?.(slide)}
              className="flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:-translate-y-1 transition"
              style={{ background: slide.accent }}
            >
              {slide.cta}
              <ArrowCta />
            </button>
            <button
              onClick={() => onCtaSecondaryClick?.(slide)}
              className="px-8 py-4 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
            >
              {slide.ctaSecondary}
            </button>
          </div>

          <div className="flex gap-8 mt-12 justify-center md:justify-start flex-wrap">
            {[
              ["10K+", "Products"],
              ["500+", "Brands"],
              ["4.9★", "Rating"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-white text-2xl font-serif font-bold">
                  {v}
                </div>
                <div className="text-white/50 text-xs tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            <div
              className="overflow-hidden rounded-3xl border shadow-2xl"
              style={{ borderColor: slide.accent + "30" }}
            >
              <img
                src={slide.img}
                className="w-115 h-140 object-cover"
                alt={slide.title}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: slide.accent + "15" }}
              >
                <HeartIcon color={slide.accent} />
              </div>
              <div>
                <div className="text-xs text-gray-400">Just added</div>
                <div className="text-sm font-semibold">New Drops Today</div>
              </div>
            </div>

            {/* Discount badge */}
            {slide.discountLabel && (
              <div
                className="absolute top-4 -right-5 text-white px-4 py-2 rounded-lg shadow-lg text-center"
                style={{ background: slide.accent }}
              >
                <div className="text-lg font-bold">{slide.discountLabel}</div>
                <div className="text-[10px] tracking-wider">OFF</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides,
  autoPlayInterval = 5500,
  onCtaClick,
  onCtaSecondaryClick,
}) => {
  // Embla handles autoplay, drag, loop, and keyboard out of the box
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: autoPlayInterval, stopOnInteraction: false }),
  ]);

  const [current, setCurrent] = React.useState(0);

  // Sync dot indicator with Embla's selected index
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const goTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const slide = slides[current];

  return (
    <section
      aria-label="Hero carousel"
      className="relative w-full overflow-hidden"
    >
      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((s) => (
            <SlideCard
              key={s.id}
              slide={s}
              onCtaClick={onCtaClick}
              onCtaSecondaryClick={onCtaSecondaryClick}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-5 z-10">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/30 bg-white/20 flex items-center justify-center backdrop-blur hover:bg-white/30 transition"
        >
          <ArrowLeft />
        </button>

        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-7" : "w-2 bg-white/40"}`}
              style={{ background: i === current ? slide.accent : undefined }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/30 bg-white/20 flex items-center justify-center backdrop-blur hover:bg-white/30 transition"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute bottom-9 right-8 text-white/60 text-sm tracking-wider">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
};

export default HeroCarousel;
