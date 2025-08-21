"use client"

import { useState } from "react"
import { Search, MapPin, Menu, X, ChevronDown, Globe, Plus, PlusCircle, PlusIcon,  } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  const categories = [
    "Cars",
     "Property",
  ]

  const mainCategories = [
    "Cars",
    "Property",
    
  ]

  return (
    <header className="bg-white shadow-sm ">
      {/* Top Header */}
      <div className="border-b border-gray-200 ">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">eC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">eClassify</h1>
                <p className="text-xs text-gray-500 -mt-1">Buy & Sell Anything</p>
              </div>
            </div>
            <button className="hidden lg:flex items-center text-gray-600 hover:text-gray-900">
                <MapPin className="h-4 w-4 mr-1" />
                Add Location
              </button>


            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8 ">
              <div className="flex  w-full">
                {/* Category Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="flex items-center px-4 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-md text-gray-700 hover:bg-gray-200 whitespace-nowrap"
                  >
                    {selectedCategory}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </button>

                  {isCategoryOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-gray-300 rounded-md shadow-lg z-50 mt-1">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category)
                            setIsCategoryOpen(false)
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Input */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search any advertisement..."
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Search Button */}
                <button className="px-6 py-2 bg-primary text-white rounded-r-md hover:bg-cyan-600 flex items-center">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </button>
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              {/* Add Location - Hidden on mobile */}
              
              {/* Auth Links - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900 font-bold">Login</button>
             
              </div>

              {/* Add Listing Button */}
              <Link href="/post">
              <button className="hidden md:flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-cyan-600 ">
                <PlusIcon className="h-4 w-4 mr-2 font-bold" /> SELL
              </button>
                </Link>

              {/* Language Selector - Hidden on mobile */}
              {/* <div className="hidden lg:flex items-center space-x-1">
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">en</span>
                <ChevronDown className="h-3 w-3 text-gray-600" />
              </div> */}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden border-b border-gray-200 p-4 ">
        <div className="flex ">
          <div className="relative flex-1">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center px-3 py-2  bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-sm text-gray-700 hover:bg-gray-200"
            >
              <span className="truncate max-w-20 text-[8px]">{selectedCategory}</span>
              <ChevronDown className="ml-1 h-4 w-4 flex-shrink-0" />
            </button>

            {isCategoryOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 mt-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsCategoryOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-3 text-[8px] py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />

          <button className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-cyan-600">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white">
          <div className="px-4 py-2 space-y-2">
            <button className="flex items-center w-full text-left py-2 text-gray-600 hover:text-gray-900">
              <MapPin className="h-4 w-4 mr-2" />
              Add Location
            </button>
            <button className="block w-full text-left py-2 text-gray-600 hover:text-gray-900">Login</button>
            {/* <button className="block w-full text-left py-2 text-gray-600 hover:text-gray-900">Register</button> */}
            <button className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-cyan-600 mt-2 flex items-center">
              <PlusIcon className="h-4 w-4 mr-2" /> SELL
            </button>
            {/* <div className="flex items-center py-2 text-gray-600">
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm">English</span>
            </div> */}
          </div>
        </div>
      )}

      {/* Category Navigation */}
      {/* <div className="hidden lg:block border-b border-gray-200 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-8 h-12 overflow-x-auto">
            {mainCategories.map((category) => (
              <button
                key={category}
                className="text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm font-medium flex items-center"
              >
                {category}
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
            ))}
          </nav>
        </div>
      </div> */}

      {/* Mobile Category Navigation */}
      <div className="lg:hidden border-b border-gray-200">
        <div className="px-4 py-2">
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
            {mainCategories.map((category) => (
              <button
                key={category}
                className="text-gray-600 hover:text-gray-900 whitespace-nowrap text-sm font-medium py-2"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
