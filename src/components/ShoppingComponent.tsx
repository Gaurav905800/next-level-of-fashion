import { useState, useEffect, useRef } from "react";

const slides = [
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
  },
];

const navLinks = [
  { name: "Collections", href: "#" },
  { name: "New Arrivals", href: "#" },
  { name: "Sale", href: "#" },
  { name: "Brands", href: "#" },
];

const breadcrumbItems = [
  { name: "Home", href: "#" },
  { name: "Collections", href: "#" },
  { name: "Summer 2025", href: "#" },
  { name: "Dresses", href: null },
];

function ShoppingComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const goTo = (idx) => {
    if (isTransitioning || idx === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 300);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5500);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  const slide = slides[current];

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        background: "#F7F4EF",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@700;800&display=swap"
        rel="stylesheet"
      />

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled
            ? "rgba(255,255,255,0.97)"
            : "rgba(255,255,255,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.08)"
            : "1px solid rgba(0,0,0,0.04)",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 68,
              gap: 0,
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{ textDecoration: "none", flexShrink: 0, marginRight: 40 }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  color: "#0A0A0A",
                }}
              >
                LUXE<span style={{ color: "#FF6B35" }}>.</span>
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div
              style={{
                display: "flex",
                gap: 4,
                flex: 1,
                "@media(max-width:768px)": { display: "none" },
              }}
              className="desktop-links"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: 8,
                    color: "#3A3A3A",
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                    transition: "all 0.2s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#FF6B35";
                    e.target.style.background = "#FFF1EC";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#3A3A3A";
                    e.target.style.background = "transparent";
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginLeft: "auto",
              }}
              className="desktop-actions"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: searchOpen ? "#fff" : "#F5F3F0",
                  border: searchOpen
                    ? "1.5px solid #FF6B35"
                    : "1.5px solid transparent",
                  borderRadius: 100,
                  padding: "0 16px",
                  height: 40,
                  transition: "all 0.3s ease",
                  width: searchOpen ? 240 : 44,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => !searchOpen && setSearchOpen(true)}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#888"
                  strokeWidth={2}
                  style={{ flexShrink: 0 }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                {searchOpen && (
                  <input
                    ref={searchRef}
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    onBlur={() => {
                      if (!searchVal) setSearchOpen(false);
                    }}
                    placeholder="Search products..."
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      marginLeft: 10,
                      fontSize: 14,
                      width: "100%",
                      color: "#0A0A0A",
                    }}
                  />
                )}
              </div>

              {/* Auth Buttons */}
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  padding: "8px 18px",
                  borderRadius: 100,
                  color: "#0A0A0A",
                  fontSize: 14,
                  fontWeight: 500,
                  border: "1.5px solid #E0DDD8",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#0A0A0A";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "#E0DDD8";
                }}
              >
                Login
              </a>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  padding: "8px 18px",
                  borderRadius: 100,
                  background: "#FF6B35",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  border: "1.5px solid #FF6B35",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#E8561F";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#FF6B35";
                }}
              >
                Register
              </a>

              {/* Cart Icon */}
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F5F3F0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#3A3A3A"
                  strokeWidth={2}
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span
                  style={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    width: 16,
                    height: 16,
                    background: "#FF6B35",
                    borderRadius: "50%",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  3
                </span>
              </button>

              {/* Hamburger */}
              <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "none",
                  flexDirection: "column",
                  gap: 5,
                  padding: 8,
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "#0A0A0A",
                    borderRadius: 2,
                    transition: "all 0.3s",
                    transform: menuOpen
                      ? "rotate(45deg) translate(5px, 5px)"
                      : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "#0A0A0A",
                    borderRadius: 2,
                    transition: "all 0.3s",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 22,
                    height: 2,
                    background: "#0A0A0A",
                    borderRadius: 2,
                    transition: "all 0.3s",
                    transform: menuOpen
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            maxHeight: menuOpen ? 400 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s ease",
            background: "#fff",
            borderTop: menuOpen ? "1px solid #F0EDE8" : "none",
          }}
        >
          <div style={{ padding: "12px 24px 24px" }}>
            {/* Mobile Search */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#F5F3F0",
                borderRadius: 12,
                padding: "10px 16px",
                marginBottom: 16,
                gap: 10,
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#888"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                placeholder="Search products..."
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: 15,
                  width: "100%",
                  color: "#0A0A0A",
                }}
              />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  display: "block",
                  padding: "14px 0",
                  color: "#0A0A0A",
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: 500,
                  borderBottom: "1px solid #F0EDE8",
                }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <a
                href="#"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "12px",
                  borderRadius: 100,
                  color: "#0A0A0A",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  border: "1.5px solid #E0DDD8",
                }}
              >
                Login
              </a>
              <a
                href="#"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "12px",
                  borderRadius: 100,
                  background: "#FF6B35",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── BREADCRUMB ── */}
      <div style={{ paddingTop: 68 }}>
        <div
          style={{
            background: "#fff",
            borderBottom: "1px solid #EDEAE5",
            padding: "0 24px",
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                height: 48,
                gap: 0,
                overflowX: "auto",
              }}
            >
              {breadcrumbItems.map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {i > 0 && (
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#C0BDB8"
                      strokeWidth={2}
                      style={{ margin: "0 6px" }}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  )}
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        textDecoration: "none",
                        fontSize: 13,
                        fontWeight: 400,
                        color: i === 0 ? "#888" : "#666",
                        transition: "color 0.2s",
                        whiteSpace: "nowrap",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#FF6B35";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = i === 0 ? "#888" : "#666";
                      }}
                    >
                      {i === 0 && (
                        <svg
                          width="13"
                          height="13"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      )}
                      {item.name}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#FF6B35",
                        background: "#FFF1EC",
                        padding: "3px 10px",
                        borderRadius: 100,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexShrink: 0,
                  paddingLeft: 16,
                }}
              >
                <span
                  style={{ fontSize: 12, color: "#999", whiteSpace: "nowrap" }}
                >
                  312 products found
                </span>
                <div style={{ display: "flex", gap: 4 }}>
                  {["grid", "list"].map((v) => (
                    <button
                      key={v}
                      style={{
                        background: v === "grid" ? "#FF6B35" : "transparent",
                        border:
                          "1px solid " + (v === "grid" ? "#FF6B35" : "#E0DDD8"),
                        borderRadius: 6,
                        padding: "4px 8px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {v === "grid" ? (
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill={v === "grid" ? "#fff" : "#888"}
                        >
                          <rect x="3" y="3" width="7" height="7" rx="1" />
                          <rect x="14" y="3" width="7" height="7" rx="1" />
                          <rect x="3" y="14" width="7" height="7" rx="1" />
                          <rect x="14" y="14" width="7" height="7" rx="1" />
                        </svg>
                      ) : (
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#888"
                          strokeWidth={2}
                        >
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <line x1="3" y1="12" x2="21" y2="12" />
                          <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ── HERO CAROUSEL ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          background: slide.bg,
          transition: "background 0.8s ease",
          minHeight: "clamp(500px, 80vh, 720px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: `1px solid ${slide.accent}22`,
            transition: "border-color 0.8s",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: `1px solid ${slide.accent}15`,
            transition: "border-color 0.8s",
          }}
        />

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "60px 24px",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left content */}
            <div
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning
                  ? "translateX(-20px)"
                  : "translateX(0)",
                transition: "all 0.4s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    background: slide.accent + "22",
                    color: slide.accent,
                    padding: "6px 16px",
                    borderRadius: 100,
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: `1px solid ${slide.accent}44`,
                    transition: "all 0.8s",
                  }}
                >
                  {slide.badge}
                </span>
                <span
                  style={{
                    background: "#ffffff10",
                    color: "#ffffff80",
                    border: "1px solid #ffffff20",
                    padding: "6px 14px",
                    borderRadius: 100,
                    fontSize: 12,
                  }}
                >
                  {slide.tag}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(40px, 6vw, 76px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.05,
                  margin: "0 0 24px",
                  whiteSpace: "pre-line",
                  letterSpacing: "-1px",
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  color: "#ffffff99",
                  fontSize: 17,
                  lineHeight: 1.7,
                  maxWidth: 420,
                  margin: "0 0 40px",
                }}
              >
                {slide.subtitle}
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button
                  style={{
                    background: slide.accent,
                    color: "#fff",
                    border: "none",
                    padding: "15px 36px",
                    borderRadius: 100,
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: "pointer",
                    letterSpacing: "0.02em",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 12px 40px ${slide.accent}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {slide.cta}
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
                </button>
                <button
                  style={{
                    background: "transparent",
                    color: "#ffffff",
                    border: "1.5px solid #ffffff40",
                    padding: "15px 32px",
                    borderRadius: 100,
                    fontSize: 16,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#ffffff99";
                    e.currentTarget.style.background = "#ffffff10";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ffffff40";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {slide.ctaSecondary}
                </button>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: 32, marginTop: 48 }}>
                {[
                  ["10K+", "Products"],
                  ["500+", "Brands"],
                  ["4.9★", "Rating"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 26,
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#ffffff60",
                        marginTop: 2,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right image */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? "scale(0.95)" : "scale(1)",
                transition: "all 0.4s ease",
              }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "clamp(280px, 35vw, 460px)",
                    height: "clamp(340px, 45vw, 560px)",
                    borderRadius: 28,
                    overflow: "hidden",
                    border: `1px solid ${slide.accent}30`,
                    boxShadow: `0 40px 120px rgba(0,0,0,0.5), 0 0 60px ${slide.accent}20`,
                  }}
                >
                  <img
                    src={slide.img}
                    alt="Hero"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to top, ${slide.accent}40 0%, transparent 60%)`,
                    }}
                  />
                </div>

                {/* Floating badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 28,
                    left: -28,
                    background: "#fff",
                    borderRadius: 16,
                    padding: "14px 20px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: slide.accent + "15",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      fill={slide.accent}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{ fontSize: 12, color: "#999", fontWeight: 400 }}
                    >
                      Just added
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#0A0A0A",
                      }}
                    >
                      New Drops Today
                    </div>
                  </div>
                </div>

                {/* Floating discount */}
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: -20,
                    background: slide.accent,
                    color: "#fff",
                    borderRadius: 14,
                    padding: "10px 16px",
                    boxShadow: `0 8px 24px ${slide.accent}60`,
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: 800, lineHeight: 1 }}>
                    40%
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      opacity: 0.85,
                      letterSpacing: "0.05em",
                    }}
                  >
                    OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 20,
            zIndex: 10,
          }}
        >
          <button
            onClick={prev}
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "#ffffff18",
              border: "1px solid #ffffff30",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff30";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff18";
            }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                style={{
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 100,
                  background: i === current ? slide.accent : "#ffffff40",
                  width: i === current ? 28 : 8,
                  height: 8,
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "#ffffff18",
              border: "1px solid #ffffff30",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff30";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff18";
            }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Slide counter */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 32,
            color: "#ffffff60",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .hamburger { display: flex !important; }
          .desktop-actions > a, .desktop-actions > div { display: none; }
          .desktop-actions > button:last-of-type { display: none; }
        }
      `}</style>
    </div>
  );
}

export default ShoppingComponent;
