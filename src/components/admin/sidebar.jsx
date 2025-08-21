"use client"
import { BarChart3, Users, BookOpen, Calendar, Settings, Home, Award, X } from "lucide-react"

export default function AdminSidebar({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) {
  const sidebarItems = [
    { id: "dashboard", name: "Dashboard", icon: Home },
    { id: "ads", name: "Ads", icon: BookOpen },
    { id: "users", name: "Users", icon: Users },
    { id: "categories", name: "Categories", icon: Award },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "reports", name: "Reports", icon: Calendar },
    { id: "settings", name: "Settings", icon: Settings },
  ]

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
            </svg>
          </div>
          <div className="text-xl font-bold">
            <span className="text-blue-600">OLX</span>
            <span className="text-orange-500">Admin</span>
          </div>
        </div>
        <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 rounded-md hover:bg-gray-100">
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="mt-6 px-3">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors duration-200 mb-1 ${
              activeTab === item.id
                ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
