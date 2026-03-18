import { useRef, useState, useEffect } from "react";
import { shoesData, type Shoe } from "../const/constants";

const BestSellers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Check scroll position to show/hide buttons
  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      checkScrollButtons();
      scrollElement.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);

      return () => {
        scrollElement.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();

    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Best Sellers Tag */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 inline-block border-b-4 border-[#FF6B35] pb-2">
          BEST SELLERS
        </h2>
      </div>

      {/* Horizontal Scrollable Row */}
      <div className="relative group">
        {/* Left Button - Conditionally rendered */}
        {showLeftButton && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Right Button - Conditionally rendered */}
        {showRightButton && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className={`flex overflow-x-auto gap-6 pb-4 scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
        >
          {shoesData.map((shoe: Shoe) => (
            <div
              key={shoe.id}
              className="flex-none w-64 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative h-40 mb-3 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={shoe.imageUrl}
                  alt={shoe.name}
                  className="h-32 w-32 object-contain transition-transform duration-300 hover:scale-110 select-none pointer-events-none"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              {/* Product Name */}
              <h3 className="font-semibold text-gray-800 text-base mb-2 line-clamp-1">
                {shoe.name}
              </h3>

              {/* Price and Stock */}
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-[#FF6B35]">
                  ${shoe.price}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    shoe.inStock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {shoe.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Quick View Button */}
              <button
                className="w-full mt-3 py-2 text-sm font-medium text-[#FF6B35] border border-[#FF6B35] rounded-lg hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  // Add your quick view logic here
                  console.log("Quick view:", shoe.name);
                }}
              >
                Quick View
              </button>
            </div>
          ))}
        </div>

        {/* Gradient Overlay for Scroll Indicator - Only show when right button is visible */}
        {showRightButton && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
        )}
      </div>

      {/* Scroll Progress Indicator */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
          Drag to scroll
        </span>
        <span className="text-xs text-gray-400">{shoesData.length} items</span>
      </div>
    </div>
  );
};

export default BestSellers;
