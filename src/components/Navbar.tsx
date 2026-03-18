import { Cart, Search, Wolf } from "iconoir-react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  onLoginClick?: () => void;
}

const NAV_LINKS: NavLink[] = [
  { name: "Collections", href: "/" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Sale", href: "/sale" },
  { name: "Brands", href: "/brands" },
];

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <button className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer ml-auto">
    <span
      className={`block w-6 h-0.5 bg-gray-900 rounded-sm transition-all duration-300 ${
        isOpen ? "rotate-45 translate-y-1.5" : ""
      }`}
    />
    <span
      className={`block w-6 h-0.5 bg-gray-900 rounded-sm transition-all duration-300 ${
        isOpen ? "opacity-0" : ""
      }`}
    />
    <span
      className={`block w-6 h-0.5 bg-gray-900 rounded-sm transition-all duration-300 ${
        isOpen ? "-rotate-45 -translate-y-1.5" : ""
      }`}
    />
  </button>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-focus search input when opened
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleSearchBlur = () => {
    if (!searchVal) setSearchOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300
      ${scrolled ? "bg-white/97 border-b border-black/8 shadow-lg" : "bg-white/85 border-b border-black/4"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-17">
          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 mr-10 flex flex-col justify-center items-center"
          >
            <Wolf className="text-gray-900 font-bold text-xl" />
            <span>Next Level Of Fashion</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-1 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 rounded-lg text-[#3A3A3A] text-sm font-medium tracking-wide transition-all duration-200 hover:text-[#FF6B35] hover:bg-[#FFF1EC]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            {/* Expandable Search */}
            <div
              onClick={() => !searchOpen && setSearchOpen(true)}
              className={`flex items-center gap-2.5 rounded-full h-10 px-3 transition-all duration-300 cursor-pointer
                ${searchOpen ? "bg-white border-2 border-[#FF6B35] w-60" : "bg-[#F5F3F0] border-2 border-transparent w-11"}`}
            >
              <Search />
              {searchOpen && (
                <input
                  ref={searchRef}
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  onBlur={handleSearchBlur}
                  placeholder="Search products..."
                  className="border-none outline-none bg-transparent text-sm w-full text-gray-900"
                />
              )}
            </div>

            {/* Auth */}
            <button
              onClick={onLoginClick}
              className="px-4.5 py-2 rounded-full text-gray-900 text-sm font-medium border-2 border-[#E0DDD8] transition-all duration-200 hover:border-gray-900"
            >
              Login
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 hover:bg-[#F5F3F0]"
            >
              <Cart />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#FF6B35] rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div onClick={() => setMenuOpen((prev) => !prev)}>
            <HamburgerIcon isOpen={menuOpen} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 bg-white ${menuOpen ? "max-h-100 border-t border-[#F0EDE8]" : "max-h-0"}`}
      >
        <div className="px-6 pb-6 pt-3">
          {/* Mobile Search */}
          <div className="flex items-center bg-[#F5F3F0] rounded-xl p-3 mb-4 gap-2.5">
            <Search />
            <input
              placeholder="Search products..."
              className="border-none outline-none bg-transparent text-base w-full text-gray-900"
            />
          </div>

          {/* Mobile Nav Links */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3.5 text-gray-900 text-base font-medium border-b border-[#F0EDE8]"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Auth */}
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => {
                setMenuOpen(false);
                onLoginClick?.();
              }}
              className="flex-1 text-center py-3 rounded-full text-gray-900 text-sm font-medium border-2 border-[#E0DDD8]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
