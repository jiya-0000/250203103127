import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Users, Heart, Award, Leaf } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Heart className="w-10 h-10 text-orange-500" />,
      title: "Made with Love",
      description: "Every dish is prepared with passion and care by our expert chefs"
    },
    {
      icon: <Leaf className="w-10 h-10 text-orange-500" />,
      title: "Fresh Ingredients",
      description: "We source only the finest, locally-grown organic ingredients"
    },
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: "Quality First",
      description: "Our commitment to excellence ensures every meal is perfect"
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Community Focus",
      description: "Supporting local farmers and giving back to our community"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1644910542295-edda15d295ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwZmFybWVyJTIwbWFya2V0fGVufDF8fHx8MTc3MzEyODIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About us"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl text-white mb-4">About FoodHub</h1>
            <p className="text-xl text-gray-200">Serving quality food since 2020</p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2020, FoodHub began with a simple mission: to bring fresh, 
                delicious food to people's doorsteps while supporting local farmers and producers.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as a small family-run business has grown into a beloved 
                community staple, serving thousands of happy customers every day.
              </p>
              <p className="text-lg text-gray-700">
                We're committed to sustainability, quality, and making every meal 
                a memorable experience. Thank you for being part of our journey!
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571157577110-493b325fdd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJha2VyeSUyMGJyZWFkJTIwcGFzdHJpZXN8ZW58MXx8fHwxNzczMTEyMzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh bakery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What makes us different</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-lg">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">10K+</div>
              <div className="text-xl text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl mb-2">500+</div>
              <div className="text-xl text-orange-100">Menu Items</div>
            </div>
            <div>
              <div className="text-5xl mb-2">50+</div>
              <div className="text-xl text-orange-100">Expert Chefs</div>
            </div>
            <div>
              <div className="text-5xl mb-2">6</div>
              <div className="text-xl text-orange-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
