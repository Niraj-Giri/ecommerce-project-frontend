import { useEffect, useState } from "react";
import categoryService from "../service/CategoryService";
import type { CategoryResponse } from "../types/category/CategoryResponse";


const GRADIENT_COLORS = [
  "from-violet-500 to-purple-700",
  "from-pink-500 to-rose-700",
  "from-sky-500 to-blue-700",
  "from-emerald-500 to-teal-700",
  "from-amber-500 to-orange-700",
  "from-indigo-500 to-blue-700",
  "from-fuchsia-500 to-pink-700",
  "from-cyan-500 to-sky-700",
];

// Category icons map 
const CATEGORY_ICONS: Record<string, string> = {
  electronics: "💻",
  fashion: "👗",
  clothing: "👕",
  shoes: "👟",
  books: "📚",
  home: "🏠",
  sports: "⚽",
  beauty: "💄",
  toys: "🧸",
  food: "🍔",
  grocery: "🛒",
  mobile: "📱",
  laptop: "💻",
  furniture: "🪑",
  jewelry: "💍",
  watches: "⌚",
  bags: "👜",
  appliances: "🔌",
  default: "🛍️",
};

function getCategoryIcon(name: string): string {
  const lower = name.toLowerCase();
  for (const key of Object.keys(CATEGORY_ICONS)) {
    if (lower.includes(key)) return CATEGORY_ICONS[key];
  }
  return CATEGORY_ICONS["default"];
}

function HomePage() {
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await categoryService.getAllCategories();
        setCategories(response.data ?? []);
      } catch (err) {
        setError("Failed to load categories. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛒</span>
          <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            ShopZone
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition-colors text-sm">Products</button>
          <button className="text-gray-300 hover:text-white transition-colors text-sm">Orders</button>
          <button className="bg-violet-600 hover:bg-violet-500 transition-colors px-4 py-1.5 rounded-full text-sm font-medium">
            Cart 🛍️
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative overflow-hidden px-6 py-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-transparent to-pink-900/30 pointer-events-none" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />
        <h1 className="relative text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-violet-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
          Shop Everything You Love
        </h1>
        <p className="relative text-gray-400 text-lg max-w-xl mx-auto">
          Discover thousands of products across all categories — all in one place.
        </p>
        <div className="relative mt-6 flex gap-3 justify-center">
          <button className="bg-violet-600 hover:bg-violet-500 active:scale-95 transition-all px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-violet-900/50">
            Shop Now
          </button>
          <button className="border border-white/20 hover:border-white/40 hover:bg-white/10 active:scale-95 transition-all px-6 py-2.5 rounded-full font-semibold text-sm">
            Browse Deals
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Shop by Category</h2>
            <p className="text-gray-400 text-sm mt-1">Browse our wide range of categories</p>
          </div>
          <button className="text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium">
            View All →
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-800/60 rounded-2xl h-36 border border-white/5"
              />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="text-5xl mb-4">⚠️</span>
            <p className="text-red-400 font-medium text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-violet-600 hover:bg-violet-500 transition-colors px-5 py-2 rounded-full text-sm font-semibold"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && categories.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="text-5xl mb-4">📭</span>
            <p className="text-gray-400 text-lg">No categories found.</p>
          </div>
        )}

        {/* Category Cards */}
        {!loading && !error && categories.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((cat, index) => {
              const gradient = GRADIENT_COLORS[index % GRADIENT_COLORS.length];
              const icon = getCategoryIcon(cat.name);
              return (
                <button
                  key={cat.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-800/50 hover:border-white/25 hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer text-left shadow-md hover:shadow-xl hover:shadow-black/40"
                >
                  {/* Image or Gradient Background */}
                  {cat.imageUrl ? (
                    <div className="h-24 w-full overflow-hidden">
                      <img
                        src={cat.imageUrl}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className={`h-24 w-full bg-gradient-to-br ${gradient} flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-500`}
                    >
                      {icon}
                    </div>
                  )}

                  {/* Card Footer */}
                  <div className="px-3 py-2.5">
                    <p className="text-white font-semibold text-sm truncate">{cat.name}</p>
                    {cat.parentId === null && (
                      <span className="text-xs text-violet-400 font-medium">Main Category</span>
                    )}
                    {cat.parentId !== null && (
                      <span className="text-xs text-gray-400">Sub Category</span>
                    )}
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-2xl`} />
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;