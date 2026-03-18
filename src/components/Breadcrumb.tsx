import { Home, NavArrowRight } from "iconoir-react";
import React, { useState } from "react";

export interface BreadcrumbItem {
  name: string;
  href: string | null;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  totalCount?: number;
  accentColor?: string;
  onViewChange?: (view: "grid" | "list") => void;
}

// ─── HomeIcon ─────────────────────────────────────────────────────────────────

const HomeIcon: React.FC = () => <Home />;

// ─── ChevronRight ─────────────────────────────────────────────────────────────

const ChevronRight: React.FC = () => (
  // <svg
  //   width="14"
  //   height="14"
  //   fill="none"
  //   viewBox="0 0 24 24"
  //   stroke="#C0BDB8"
  //   strokeWidth={2}
  //   className="mx-1.5 flex-shrink-0"
  // >
  //   <polyline points="9 18 15 12 9 6" />
  // </svg>
  <NavArrowRight className="size-3.5 shrink-0 text-gray-500" />
);

// ─── GridIcon / ListIcon ──────────────────────────────────────────────────────

const GridIcon: React.FC<{ active: boolean }> = ({ active }) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill={active ? "#fff" : "#888"}
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const ListIcon: React.FC = () => (
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
);

// ─── Breadcrumb Component ─────────────────────────────────────────────────────

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  totalCount,
  accentColor = "#FF6B35",
  onViewChange,
}) => {
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleViewChange = (view: "grid" | "list") => {
    setActiveView(view);
    onViewChange?.(view);
  };

  // Create dynamic styles for hover color since Tailwind doesn't support dynamic values at runtime
  const getLinkStyle = (index: number) => {
    if (hoveredIndex === index) {
      return { color: accentColor };
    }
    return {};
  };

  return (
    <div className="bg-white border-b border-[#EDEAE5] px-6">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center h-12 gap-0 overflow-x-auto"
        >
          {/* ── Crumb Items ── */}
          {items.map((item, i) => (
            <div key={item.name} className="flex items-center shrink-0">
              {/* Separator */}
              {i > 0 && <ChevronRight />}

              {/* Linked crumb */}
              {item.href !== null ? (
                <a
                  href={item.href}
                  aria-current={undefined}
                  className={`
                    text-xs font-normal whitespace-nowrap flex items-center gap-1.5
                    transition-colors duration-200 no-underline
                    ${i === 0 ? "text-[#888]" : "text-[#666]"}
                  `}
                  style={getLinkStyle(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {i === 0 && <HomeIcon />}
                  {item.name}
                </a>
              ) : (
                /* Active / current crumb — not a link */
                <span
                  aria-current="page"
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap"
                  style={{
                    color: accentColor,
                    backgroundColor: `${accentColor}1A`, // ~10% opacity
                  }}
                >
                  {item.name}
                </span>
              )}
            </div>
          ))}

          {/* ── Right Side: Count + View Toggle ── */}
          <div className="ml-auto flex items-center gap-4 shrink-0 pl-4">
            {totalCount !== undefined && (
              <span className="text-xs text-[#999] whitespace-nowrap">
                {totalCount.toLocaleString()} products found
              </span>
            )}

            <div className="flex gap-1">
              {(["grid", "list"] as const).map((view) => (
                <button
                  key={view}
                  aria-label={`${view} view`}
                  aria-pressed={activeView === view}
                  onClick={() => handleViewChange(view)}
                  className={`
                    rounded-md px-2 py-1 cursor-pointer flex items-center
                    transition-all duration-200 border
                    ${
                      activeView === view
                        ? "border-transparent"
                        : "border-[#E0DDD8]"
                    }
                  `}
                  style={{
                    backgroundColor:
                      activeView === view ? accentColor : "transparent",
                  }}
                >
                  {view === "grid" ? (
                    <GridIcon active={activeView === "grid"} />
                  ) : (
                    <ListIcon />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
