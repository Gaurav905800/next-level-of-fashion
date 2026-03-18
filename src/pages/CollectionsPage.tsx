import React from "react";
import Breadcrumb, { type BreadcrumbItem } from "../components/Breadcrumb";
import HeroCarousel, { type HeroSlide } from "../components/Herocarousel";

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Summer 2025", href: "/collections/summer-2025" },
  { name: "Dresses", href: null }, // active page — no link
];

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badge: "New Arrivals",
    title: "Summer Collection\n2025",
    subtitle:
      "Discover curated fashion that defines your season — bold, vibrant, and effortlessly chic.",
    cta: "Shop Now",
    ctaSecondary: "View Lookbook",
    accent: "#FF6B35",
    bg: "linear-gradient(135deg, #0A0A0A 0%, #1A0A00 50%, #2D1200 100%)",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Up to 40% Off",
    discountLabel: "40%",
  },
  {
    id: 2,
    badge: "Limited Edition",
    title: "Luxury\nAccessories",
    subtitle:
      "Handcrafted pieces that speak to your soul — timeless elegance for modern lives.",
    cta: "Explore",
    ctaSecondary: "See Details",
    accent: "#C9A84C",
    bg: "linear-gradient(135deg, #050508 0%, #0D0A18 50%, #1A1230 100%)",
    img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
    tag: "Exclusive Drops",
    discountLabel: "NEW",
  },
  {
    id: 3,
    badge: "Best Sellers",
    title: "Urban\nStreet Style",
    subtitle:
      "Fresh streetwear drops that keep you ahead of the curve — bold moves for bold people.",
    cta: "Shop Trends",
    ctaSecondary: "Top Picks",
    accent: "#00E5CC",
    bg: "linear-gradient(135deg, #020A08 0%, #001A14 50%, #002820 100%)",
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80",
    tag: "Trending Now",
    discountLabel: "30%",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const CollectionsPage: React.FC = () => {
  const handleCtaClick = (slide: HeroSlide) => {
    console.log("Primary CTA clicked:", slide.badge);
    // e.g. navigate(`/shop/${slide.id}`)
  };

  const handleViewChange = (view: "grid" | "list") => {
    console.log("View changed to:", view);
    // e.g. update your product grid layout state here
  };

  return (
    <div style={{ background: "#F7F4EF" }}>
      {/* Breadcrumb — shown below the navbar */}
      <div style={{ paddingTop: 68 /* matches Navbar height */ }}>
        <Breadcrumb
          items={breadcrumbItems}
          totalCount={312}
          accentColor="#FF6B35"
          onViewChange={handleViewChange}
        />
      </div>

      {/* Hero Carousel */}
      <HeroCarousel
        slides={heroSlides}
        autoPlayInterval={5500}
        onCtaClick={handleCtaClick}
        onCtaSecondaryClick={(slide) =>
          console.log("Secondary CTA clicked:", slide.ctaSecondary)
        }
      />
    </div>
  );
};

export default CollectionsPage;
