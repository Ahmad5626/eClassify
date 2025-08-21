"use client"
import { Filter, Download, Eye, Edit, Trash2 } from "lucide-react"

const ads = [
  {
    id: 1,
    title: "2020 Honda Civic - Excellent Condition",
    seller: "John Smith",
    category: "Cars",
    price: "$15,000",
    location: "New York",
    status: "active",
    views: 245,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    title: "3BR Apartment Downtown",
    seller: "Sarah Johnson",
    category: "Properties",
    price: "$2,500/month",
    location: "Los Angeles",
    status: "pending",
    views: 189,
    createdAt: "2024-01-12",
  },
  {
    id: 3,
    title: "iPhone 14 Pro Max - Like New",
    seller: "Mike Chen",
    category: "Electronics",
    price: "$900",
    location: "Chicago",
    status: "active",
    views: 312,
    createdAt: "2024-01-10",
  },
  {
    id: 4,
    title: "Vintage Leather Sofa",
    seller: "Emma Wilson",
    category: "Furniture",
    price: "$450",
    location: "Miami",
    status: "sold",
    views: 156,
    createdAt: "2024-01-08",
  },
]

export default function AdsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Ads Management</h2>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ad Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Seller
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ads.map((ad) => (
                <tr key={ad.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{ad.title}</div>
                      <div className="text-sm text-gray-500">
                        {ad.location} • {ad.createdAt}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ad.seller}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ad.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ad.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ad.views}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        ad.status === "active"
                          ? "bg-green-100 text-green-800"
                          : ad.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {ad.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {/* <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button> */}
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  )
}
