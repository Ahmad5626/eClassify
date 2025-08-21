"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Phone, MapPin, Share2, Edit3, Star, ShoppingBag } from "lucide-react"
import Header from "@/components/Header"

export default function ProfilePage() {
  const [user] = useState({
    id: 1,
    name: "Ahmad Raza",
    email: "ahmad.raza@example.com",
    phone: "+92 300 1234567",
    location: "Varanasi, Uttar Pradesh, India",
    avatar: "https://i.pravatar.cc/300",
    memberSince: "Aug 2020",
    followers: 0,
    following: 0,
    adsPosted: 0,
    isVerified: true,
    rating: 4.8,
    completedDeals: 15,
  })

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${user.name}'s Profile`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Profile link copied to clipboard!")
    }
  }

  return (
    <>
    <Header/>
        <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Profile Info */}
            <div className="flex items-center gap-4">
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{user.name}</h1>
                  {user.isVerified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Phone className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Member since {user.memberSince}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {user.location}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  {/* <span className="text-gray-600">
                    <Users className="h-4 w-4 inline mr-1" />
                    {user.followers} Followers
                  </span>
                  <span className="text-gray-600">{user.following} Following</span> */}
                  {/* {user.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{user.rating}</span>
                      <span className="text-gray-500">({user.completedDeals} deals)</span>
                    </div>
                  )} */}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 ml-auto">
              <Button variant="outline" onClick={handleShare} className="flex items-center gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Share Profile
              </Button>
              <Link href="/edit-profile">
                <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                  <Edit3 className="h-4 w-4" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Stats */}
          {/* <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Profile Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Ads Posted</span>
                    <span className="font-semibold">{user.adsPosted}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Profile Views</span>
                    <span className="font-semibold">127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Rate</span>
                    <span className="font-semibold">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Avg. Response Time</span>
                    <span className="font-semibold">2 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Verification Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Phone Number Verified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">Email Not Verified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">ID Not Verified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}

          {/* Right Column - Ads Section */}
          <div className="lg:col-span-4">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src="./assets/img/no-publications.webp"
                    alt="No ads illustration"
                    className="mx-auto h-48 w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">You haven't listed anything yet</h3>
                <p className="text-gray-600 mb-6">Let go of what you don't use anymore</p>
                <Link href="/post">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Start selling
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}
