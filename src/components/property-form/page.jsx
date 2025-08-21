"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const propertyTypes = ["Apartment", "House", "Villa", "Plot", "Commercial", "Office", "Shop", "Warehouse"]
const listingTypes = ["For Sale", "For Rent", "PG/Hostel"]
const furnishingTypes = ["Fully Furnished", "Semi Furnished", "Unfurnished"]
const facingDirections = ["North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"]

export default function PropertyForm() {
  const [formData, setFormData] = useState({
    propertyType: "",
    listingType: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    balconies: "",
    furnishing: "",
    floor: "",
    totalFloors: "",
    age: "",
    facing: "",
    location: "",
    address: "",
    description: "",
    amenities: [],
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAmenityChange = (amenity, checked) => {
    setFormData((prev) => ({
      ...prev,
      amenities: checked ? [...prev.amenities, amenity] : prev.amenities.filter((a) => a !== amenity),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Property form data:", formData)
    // Handle form submission here
  }

  const propertyAmenities = [
    "Swimming Pool",
    "Gym",
    "Parking",
    "Security",
    "Lift",
    "Power Backup",
    "Garden",
    "Playground",
    "Club House",
    "Intercom",
    "Gas Pipeline",
    "Water Supply",
    "Maintenance Staff",
    "Visitor Parking",
    "CCTV",
    "Fire Safety",
    "Waste Disposal",
    "Internet/Wi-Fi",
    "Air Conditioning",
    "Modular Kitchen",
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Property Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="propertyType">Property Type *</Label>
            <Select value={formData.propertyType} onValueChange={(value) => handleInputChange("propertyType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="listingType">Listing Type *</Label>
            <Select value={formData.listingType} onValueChange={(value) => handleInputChange("listingType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select listing type" />
              </SelectTrigger>
              <SelectContent>
                {listingTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price *</Label>
            <Input
              id="price"
              type="number"
              placeholder="Enter price"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Area (sq ft) *</Label>
            <Input
              id="area"
              type="number"
              placeholder="e.g., 1200"
              value={formData.area}
              onChange={(e) => handleInputChange("area", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange("bedrooms", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 BHK</SelectItem>
                <SelectItem value="2">2 BHK</SelectItem>
                <SelectItem value="3">3 BHK</SelectItem>
                <SelectItem value="4">4 BHK</SelectItem>
                <SelectItem value="5+">5+ BHK</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bathrooms">Bathrooms</Label>
            <Select value={formData.bathrooms} onValueChange={(value) => handleInputChange("bathrooms", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5+">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="balconies">Balconies</Label>
            <Select value={formData.balconies} onValueChange={(value) => handleInputChange("balconies", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select balconies" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4+">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="furnishing">Furnishing</Label>
            <Select value={formData.furnishing} onValueChange={(value) => handleInputChange("furnishing", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select furnishing" />
              </SelectTrigger>
              <SelectContent>
                {furnishingTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Building Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="floor">Floor</Label>
            <Input
              id="floor"
              type="number"
              placeholder="e.g., 5"
              value={formData.floor}
              onChange={(e) => handleInputChange("floor", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalFloors">Total Floors</Label>
            <Input
              id="totalFloors"
              type="number"
              placeholder="e.g., 10"
              value={formData.totalFloors}
              onChange={(e) => handleInputChange("totalFloors", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Property Age</Label>
            <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select age" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1">0-1 years</SelectItem>
                <SelectItem value="1-5">1-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10-15">10-15 years</SelectItem>
                <SelectItem value="15+">15+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="facing">Facing</Label>
            <Select value={formData.facing} onValueChange={(value) => handleInputChange("facing", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select facing" />
              </SelectTrigger>
              <SelectContent>
                {facingDirections.map((direction) => (
                  <SelectItem key={direction} value={direction}>
                    {direction}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location">City/Location *</Label>
            <Input
              id="location"
              placeholder="Enter city or locality"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Full Address</Label>
            <Textarea
              id="address"
              placeholder="Enter complete address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Amenities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {propertyAmenities.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity}
                  checked={formData.amenities.includes(amenity)}
                  onCheckedChange={(checked) => handleAmenityChange(amenity, checked)}
                />
                <Label htmlFor={amenity} className="text-sm">
                  {amenity}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="description">Property Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your property, nearby landmarks, transportation, etc."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          Post Property Ad
        </Button>
        <Button type="button" variant="outline" className="flex-1 bg-transparent">
          Save as Draft
        </Button>
      </div>
    </form>
  )
}
