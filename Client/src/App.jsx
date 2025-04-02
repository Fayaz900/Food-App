import { useState } from "react";
// import { MapPin, Phone } from "lucide-react"

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState("drinks");

  const menuData = {
    food: [
      {
        name: "STEAK & EGGS",
        price: "$28",
        description: "8oz flat iron steak, two eggs any style, roasted potatoes, toast"
      },
      {
        name: "AVOCADO TOAST",
        price: "$14",
        description: "Sourdough bread, smashed avocado, cherry tomatoes, micro greens, poached egg"
      },
      {
        name: "BREAKFAST BURRITO",
        price: "$16",
        description: "Scrambled eggs, chorizo, potatoes, cheese, pico de gallo, avocado crema"
      }
    ],
    drinks: [
      {
        name: "CINNAMON TOAST CRUNCH",
        price: "$16",
        description: "Vanilla vodka, rumchata, cinnamon whisky, cream, baileys, egg white, cinnamon"
      },
      {
        name: "MOET SPRITZ",
        price: "$20",
        description: "Aperol, moet, soda, orange\nServed with Fever-Tapper"
      },
      {
        name: "BAR 42 MARY",
        price: "$14",
        description: "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, mary fixings"
      }
    ],
    brunch: [
      {
        name: "MIMOSA FLIGHT",
        price: "$18",
        description: "Four mini mimosas with different juices: orange, grapefruit, pineapple, cranberry"
      },
      {
        name: "BELLINI",
        price: "$12",
        description: "Prosecco, peach puree, garnished with fresh peach slice"
      },
      {
        name: "BLOODY MARIA",
        price: "$15",
        description: "Tequila, bloody mary mix, lime, jalapeño, served with bacon garnish"
      }
    ]
  };

  const getButtonClass = (category) => {
    return `px-8 py-2 ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-black border border-gray-800'} hover:bg-gray-900 transition`;
  };

  const getCategoryTitle = () => {
    switch(activeCategory) {
      case 'food':
        return 'FOOD SPECIALTIES';
      case 'drinks':
        return 'BRUNCH COCKTAILS';
      case 'brunch':
        return 'BRUNCH SPECIALS';
      default:
        return 'MENU';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-blue-500 font-bold flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              width={40}
              className="object-contain mr-3"
            />
            <span>DEEP NET</span>
            <span className="ml-1">SOFT</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 uppercase text-sm">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-blue-500">
            Menu
          </a>
          <a href="#" className="hover:text-blue-500">
            Make a Reservation
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact Us
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Menu Title - Full Width Background with Black Fade */}
        <div className="relative w-full overflow-hidden">
          {/* Background image container with black overlay */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-black/70 z-0 w-full"
              style={{ 
                backgroundImage: "url('/src/assets/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "400px"
              }}
            />
            {/* Additional black fade overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 z-0"></div>
          </div>
          
          {/* Content container */}
          <div className="relative z-10 container mx-auto min-h-[400px] flex flex-col justify-center items-center px-4">
            <h1 className="text-5xl font-bold mb-4">MENU</h1>
            <p className="max-w-2xl mx-auto text-gray-300 text-sm text-center">
              Please take a look at our menu for food, drinks, and brunch. If you'd like to place an order, click the
              "Order Online" button located below the menu.
            </p>
          </div>
        </div>

        {/* Menu Categories with Black Overlay - Modified for full width */}
        <div className="w-full relative py-8">
          {/* Background with overlay */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-black/60 z-0 w-full"
              style={{ 
                backgroundImage: "url('/src/assets/background2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/90 z-0"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-center mb-12 mt-8">
              <div className="inline-flex">
                <button 
                  onClick={() => setActiveCategory('food')}
                  className={getButtonClass('food')}
                >
                  FOOD
                </button>
                <button 
                  onClick={() => setActiveCategory('drinks')}
                  className={getButtonClass('drinks')}
                >
                  DRINKS
                </button>
                <button 
                  onClick={() => setActiveCategory('brunch')}
                  className={getButtonClass('brunch')}
                >
                  BRUNCH
                </button>
              </div>
            </div>

            {/* Menu Content - Removed max-width constraint */}
            <div className="relative w-full px-4">
              {/* Menu Section */}
              <div className="border border-white py-8 relative bg-black/70 backdrop-blur-sm mx-auto" style={{ maxWidth: '900px' }}>
                {/* Top Left Drink */}
                <div className="absolute -top-20 -left-22 hidden lg:block">
                  <img
                    src="/src/assets/drink2.png"
                    alt="Cocktail"
                    width={110}
                    height={150}
                    className="object-contain"
                  />
                </div>
                {/* Bottom Left Drink */}
                <div className="absolute -bottom-5 -right-12 hidden lg:block">
                  <img
                    src="/src/assets/drink1.png"
                    alt="Cocktail"
                    width={110}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-center text-2xl font-bold mb-8 relative">
                  <span className="bg-black px-4">{getCategoryTitle()}</span>
                  <div className="absolute w-full h-px bg-white top-1/2 left-0 -z-10"></div>
                </h2>

                <div className="space-y-8 m-6">
                  {/* Menu Items */}
                  {menuData[activeCategory].map((item, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-white pb-4">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <h3 className="font-bold">{item.name}</h3>
                          <div className="flex items-center">
                            <div className="border-b border-dotted border-white flex-1 mx-2"></div>
                            <span className="font-bold">{item.price}</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-800 pt-8">
          <div className="text-center">
            <h3 className="uppercase text-sm font-bold mb-4 text-blue-500">Connect with us</h3>
            <div className="flex justify-center items-center mb-2">
              {/* <Phone className="w-4 h-4 mr-2 text-blue-500" /> */}
              <span className="text-sm">+1 (123) 456-7890</span>
            </div>
            <p className="text-sm text-gray-400">info@deepnetsoft.com</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="text-blue-500 font-bold flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              width={40}
              className="object-contain mr-3"
            />
              <span>DEEP NET</span>
              <span className="ml-1">SOFT</span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="uppercase text-sm font-bold mb-4 text-blue-500">Find us</h3>
            <div className="flex justify-center items-center">
              {/* <MapPin className="w-4 h-4 mr-2 text-blue-500" /> */}
              <span className="text-sm">123 Main Ave, Phoenix, AZ 85001, Arizona</span>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8">
          <p>© 2025 DeepNetSoft Solutions. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}