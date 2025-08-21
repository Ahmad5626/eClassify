"use client"

import { useState } from "react"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"
import DashboardStats from "@/components/admin/dashboard-stats"
import AdsManagement from "@/components/admin/ads-management"
import UsersManagement from "@/components/admin/users-management"

export default function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")

  

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <DashboardStats />
         
          </div>
        )
      case "ads":
        return <AdsManagement />
      case "users":
        return <UsersManagement />
      case "Packages":
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Packages Management</h3>
            <p className="text-gray-600">Manage ad Packages, sub Packages, and category settings.</p>
          </div>
        )
      case "analytics":
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600">View detailed analytics and performance metrics.</p>
          </div>
        )
      case "reports":
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reports</h3>
            <p className="text-gray-600">Generate and download various reports.</p>
          </div>
        )
      case "settings":
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Settings</h3>
            <p className="text-gray-600">Configure system settings and preferences.</p>
          </div>
        )
      default:
        return (
          <div className="space-y-6">
            <DashboardStats />
            
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader activeTab={activeTab} setSidebarOpen={setSidebarOpen} />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}
