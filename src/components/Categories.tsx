const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Running Shoes",
      icon: "👟",
      image: "/categories/running.jpg",
      count: 24,
      bgColor: "bg-blue-500",
      lightBg: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 2,
      name: "Casual Sneakers",
      icon: "👞",
      image: "/categories/casual.jpg",
      count: 18,
      bgColor: "bg-green-500",
      lightBg: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      id: 3,
      name: "Formal Shoes",
      icon: "👢",
      image: "/categories/formal.jpg",
      count: 12,
      bgColor: "bg-purple-500",
      lightBg: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      id: 4,
      name: "Sports Shoes",
      icon: "⚽",
      image: "/categories/sports.jpg",
      count: 15,
      bgColor: "bg-orange-500",
      lightBg: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      id: 5,
      name: "Jackets",
      icon: "🧥",
      image: "/categories/jackets.jpg",
      count: 22,
      bgColor: "bg-red-500",
      lightBg: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
    },
    {
      id: 6,
      name: "Shirts",
      icon: "👔",
      image: "/categories/shirts.jpg",
      count: 30,
      bgColor: "bg-indigo-500",
      lightBg: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
    },
    {
      id: 7,
      name: "T-Shirts",
      icon: "👕",
      image: "/categories/tshirts.jpg",
      count: 45,
      bgColor: "bg-pink-500",
      lightBg: "bg-pink-50",
      textColor: "text-pink-600",
      borderColor: "border-pink-200",
    },
    {
      id: 8,
      name: "Pants",
      icon: "👖",
      image: "/categories/pants.jpg",
      count: 28,
      bgColor: "bg-cyan-500",
      lightBg: "bg-cyan-50",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
    },
    {
      id: 9,
      name: "Trousers",
      icon: "👖",
      image: "/categories/trousers.jpg",
      count: 20,
      bgColor: "bg-emerald-500",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
    },
    {
      id: 10,
      name: "Lower",
      icon: "🩳",
      image: "/categories/lower.jpg",
      count: 16,
      bgColor: "bg-amber-500",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
    {
      id: 11,
      name: "Jeans",
      icon: "👖",
      image: "/categories/jeans.jpg",
      count: 25,
      bgColor: "bg-blue-600",
      lightBg: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 12,
      name: "Hoodies",
      icon: "🧶",
      image: "/categories/hoodies.jpg",
      count: 19,
      bgColor: "bg-violet-500",
      lightBg: "bg-violet-50",
      textColor: "text-violet-600",
      borderColor: "border-violet-200",
    },
    {
      id: 13,
      name: "Sweaters",
      icon: "🧥",
      image: "/categories/sweaters.jpg",
      count: 14,
      bgColor: "bg-rose-500",
      lightBg: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-200",
    },
    {
      id: 14,
      name: "Shorts",
      icon: "🩳",
      image: "/categories/shorts.jpg",
      count: 17,
      bgColor: "bg-lime-500",
      lightBg: "bg-lime-50",
      textColor: "text-lime-600",
      borderColor: "border-lime-200",
    },
    {
      id: 15,
      name: "Track Pants",
      icon: "🏃",
      image: "/categories/trackpants.jpg",
      count: 21,
      bgColor: "bg-teal-500",
      lightBg: "bg-teal-50",
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
    },
    {
      id: 16,
      name: "Accessories",
      icon: "🧢",
      image: "/categories/accessories.jpg",
      count: 35,
      bgColor: "bg-gray-600",
      lightBg: "bg-gray-50",
      textColor: "text-gray-600",
      borderColor: "border-gray-200",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Section Header with Gradient */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Shop by{" "}
          <span className="bg-linear-to-r from-[#FF6B35] to-[#FF8C5A] text-transparent bg-clip-text">
            Categories
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of products across different categories
        </p>
      </div>

      {/* Colorful Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Background Color Layer */}
            <div
              className={`absolute inset-0 ${category.bgColor} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
            ></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              ></div>
            </div>

            {/* Content Container */}
            <div className="relative h-56 flex flex-col items-center justify-center text-white p-6">
              {/* Icon with Background */}
              <div
                className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              {/* Category Name */}
              <h3 className="font-bold text-xl mb-1 text-center">
                {category.name}
              </h3>

              {/* Item Count */}
              <p className="text-white/80 text-sm mb-4">
                {category.count} {category.count === 1 ? "Item" : "Items"}
              </p>

              {/* Shop Now Button */}
              <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30">
                Shop Now →
              </button>
            </div>

            {/* Bottom Border Animation */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        ))}
      </div>

      {/* Alternative Card Style - Option 2 */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Popular Categories
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.slice(0, 6).map((category) => (
            <div
              key={`popular-${category.id}`}
              className={`${category.lightBg} rounded-xl p-4 text-center cursor-pointer border ${category.borderColor} hover:shadow-md transition-all duration-300 group`}
            >
              <div
                className={`text-4xl mb-2 group-hover:scale-125 transition-transform duration-300`}
              >
                {category.icon}
              </div>
              <h4 className={`font-semibold ${category.textColor}`}>
                {category.name}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {category.count} items
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Categories with Images */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Collections
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category) => (
            <div
              key={`featured-${category.id}`}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Placeholder for actual images - replace with real ones */}
              <div
                className={`absolute inset-0 ${category.bgColor} opacity-90`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                  {category.icon}
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-1">{category.name}</h4>
                <p className="text-white/80 mb-3">
                  {category.count} items available
                </p>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
