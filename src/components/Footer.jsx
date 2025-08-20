
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      {/* Newsletter/Offer Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-24 relative z-10">
        <div className="bg-primary rounded-xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">UNLOCK 20% OFF YOUR FIRST ORDER</h2>
          <p className="text-green-100 mb-8">Experience the Magic of the eClassify App</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-primary border-white text-white placeholder:text-white focus:border-green-500 focus:ring-green-500"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-md">
             Send
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
               <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">eC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">eClassify</h1>
                <p className="text-xs text-gray-500 -mt-1">Buy & Sell Anything</p>
              </div>
            </div>
            
          </div>
          <p className="text-sm leading-relaxed">
            #1 Canadian top rated online dispensary that meets the consistent needs in every single medical marijuana
            aspect. The team here at TopShelfBC is heavily involved in the Canadian cannabis industry for over 15 years.
            We strive to provide the top quality products, service and care at the lowest prices you'll ever find.
          </p>
        </div>

        {/* Column 2 & 3: Quick Links */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <div>
            <h3 className="text-white font-semibold mb-4">QUICK LINK</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shop All
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Flower
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Edibles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Concentrates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refunds
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 invisible md:visible">MORE</h3> {/* Placeholder for alignment */}
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mushrooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Promotions / Bundles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Reward
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Faq
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Contact Us & More */}
        <div className="space-y-8">
          <div>
            <h3 className="text-white font-semibold mb-4">CONTACT US</h3>
            <p className="text-sm py-4">
              <a href="mailto:info@topshelfbc.cc" className="hover:text-white transition-colors">
                info@topshelfbc.cc
              </a>
            </p>
            
             <p className="text-sm py-4">
              <a href="mailto:info@topshelfbc.cc" className="hover:text-white transition-colors">
                19279348162498
              </a>
            </p>
             <p className="text-sm py-4">
              <a href="mailto:info@topshelfbc.cc" className="hover:text-white transition-colors">
                info@topshelfbc.cc
              </a>
            </p>
          </div>
          
        </div>
      </div>

      {/* Payment Icons */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-700 flex justify-center md:justify-start gap-4">
        <img src="/assets/img/visa.png" alt="Visa" className="h-6" />
        <img src="/assets/img/mastercard.png" alt="Mastercard" className="h-6" />
        <img src="/assets/img/interac.png" alt="Interac" className="h-6" />
        <img src="/assets/img/bitcoin.png" alt="Bitcoin" className="h-6" />
      </div>

      {/* Copyright and Legal Links */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-2 md:mb-0">© 2022 Top Shelf BC. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Out Of Stock
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
