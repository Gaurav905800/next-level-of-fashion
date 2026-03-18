import { useRef, useState, useEffect } from "react";
import { shoesData, type Shoe } from "../const/constants";

const BestSellers = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftPos, setScrollLeftPos] = useState<number>(0);

  // Check scroll position
  const checkScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollButtons();

    el.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);

    return () => {
      el.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 300;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Drag logic
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftPos(el.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!isDragging || !el) return;

    e.preventDefault();

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 2;

    el.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 inline-block border-b-4 border-[#FF6B35] pb-2">
          BEST SELLERS
        </h2>
      </div>

      <div className="relative group">
        {showLeftButton && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll left"
          >
            ←
          </button>
        )}

        {showRightButton && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll right"
          >
            →
          </button>
        )}

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
              <div className="relative h-40 mb-3 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={shoe.imageUrl}
                  alt={shoe.name}
                  className="h-32 w-32 object-contain transition-transform duration-300 hover:scale-110 select-none pointer-events-none"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              <h3 className="font-semibold text-gray-800 text-base mb-2 line-clamp-1">
                {shoe.name}
              </h3>

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

              <button
                className="w-full mt-3 py-2 text-sm font-medium text-[#FF6B35] border border-[#FF6B35] rounded-lg hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  console.log("Quick view:", shoe.name);
                }}
              >
                Quick View
              </button>
            </div>
          ))}
        </div>

        {showRightButton && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
        )}
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>Drag to scroll</span>
        <span className="text-xs text-gray-400">{shoesData.length} items</span>
      </div>
    </div>
  );
};

export default BestSellers;
