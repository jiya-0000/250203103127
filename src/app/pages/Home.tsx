import { Link } from "react-router";
import { Clock, Truck, Award, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Gourmet Burger",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1632898658030-ead731d252d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZGVsaWNpb3VzJTIwZm9vZHxlbnwxfHx8fDE3NzMxMjgyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Main Course"
    },
    {
      id: 2,
      name: "Fresh Pizza",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1724232865752-4af928d13989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGl0YWxpYW4lMjByZXN0YXVyYW50fGVufDF8fHx8MTc3MzA1OTE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Main Course"
    },
    {
      id: 3,
      name: "Sushi Platter",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzMwOTk0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Specialty"
    },
    {
      id: 4,
      name: "Healthy Salad Bowl",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1615865417491-9941019fbc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBib3dsfGVufDF8fHx8MTc3MzExNDI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Healthy"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Quality Food",
      description: "Only the freshest ingredients in every dish"
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Free Shipping",
      description: "Free delivery on orders over $25"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1644910542295-edda15d295ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwZmFybWVyJTIwbWFya2V0fGVufDF8fHx8MTc3MzEyODIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fresh organic vegetables"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Fresh Food <br />
              <span className="text-orange-500">Delivered Fast</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience the taste of quality with our curated selection of delicious meals made from the finest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                Order Now
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Dishes</h2>
            <p className="text-xl text-gray-600">Our most popular items</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-orange-500">{product.category}</span>
                  <h3 className="text-xl mt-2 mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-gray-900">${product.price}</span>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
            >
              View Full Menu
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">Ready to Order?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers enjoying delicious food every day
          </p>
          <Link
            to="/menu"
            className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block"
          >
            Browse Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
