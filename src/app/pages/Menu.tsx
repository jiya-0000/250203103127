import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Plus } from "lucide-react";

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Main Course", "Salads", "Bakery", "Desserts", "Beverages"];

  const menuItems = [
    {
      id: 1,
      name: "Gourmet Burger",
      price: 12.99,
      category: "Main Course",
      description: "Juicy beef patty with fresh vegetables and special sauce",
      image: "https://images.unsplash.com/photo-1632898658030-ead731d252d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZGVsaWNpb3VzJTIwZm9vZHxlbnwxfHx8fDE3NzMxMjgyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 14.99,
      category: "Main Course",
      description: "Classic Italian pizza with mozzarella and fresh basil",
      image: "https://images.unsplash.com/photo-1724232865752-4af928d13989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGl0YWxpYW4lMjByZXN0YXVyYW50fGVufDF8fHx8MTc3MzA1OTE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      name: "Sushi Platter",
      price: 18.99,
      category: "Main Course",
      description: "Assorted fresh sushi with wasabi and ginger",
      image: "https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzMwOTk0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      name: "Fresh Garden Salad",
      price: 9.99,
      category: "Salads",
      description: "Crisp mixed greens with seasonal vegetables",
      image: "https://images.unsplash.com/photo-1615865417491-9941019fbc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBib3dsfGVufDF8fHx8MTc3MzExNDI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      name: "Artisan Bread Basket",
      price: 6.99,
      category: "Bakery",
      description: "Fresh baked breads and pastries",
      image: "https://images.unsplash.com/photo-1571157577110-493b325fdd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJha2VyeSUyMGJyZWFkJTIwcGFzdHJpZXN8ZW58MXx8fHwxNzczMTEyMzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      name: "Chocolate Cake",
      price: 7.99,
      category: "Desserts",
      description: "Rich chocolate cake with ganache frosting",
      image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMGNob2NvbGF0ZXxlbnwxfHx8fDE3NzMwNTE4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 7,
      name: "Fresh Fruits Platter",
      price: 8.99,
      category: "Desserts",
      description: "Seasonal fresh fruits beautifully arranged",
      image: "https://images.unsplash.com/photo-1607130813443-243737c21f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzEyNzM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 8,
      name: "Premium Coffee",
      price: 4.99,
      category: "Beverages",
      description: "Freshly brewed artisan coffee",
      image: "https://images.unsplash.com/photo-1770565356338-7bf46fabe8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYXJpc3RhJTIwY2FmZXxlbnwxfHx8fDE3NzMwOTM1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600">
            Discover our delicious selection of freshly prepared meals
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-sm text-orange-500">{item.category}</span>
                    <h3 className="text-xl mt-1">{item.name}</h3>
                  </div>
                  <span className="text-2xl text-gray-900">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
