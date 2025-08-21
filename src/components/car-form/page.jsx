"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Nissan",
  "Hyundai",
  "Kia",
  "Mazda",
  "Subaru",
  "Lexus",
  "Infiniti",
  "Acura",
  "Lamborghini",
  "Ferrari",
  "Porsche",
  "Jaguar",
  "Land Rover",
  "Volvo",
]

const carModels = {
  Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Prius", "Tacoma", "Tundra"],
  Honda: ["Civic", "Accord", "CR-V", "Pilot", "Fit", "Ridgeline", "Passport"],
  BMW: ["3 Series", "5 Series", "7 Series", "X3", "X5", "X7", "i3", "i8"],
  "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLS", "A-Class"],
  Lamborghini: ["Huracan", "Aventador", "Urus", "Gallardo", "Murcielago"],
  Ferrari: ["488", "F8", "Portofino", "Roma", "SF90", "812"],
  Ford: ["F-150", "Mustang", "Explorer", "Escape", "Edge", "Bronco"],
  Chevrolet: ["Silverado", "Equinox", "Malibu", "Camaro", "Corvette", "Tahoe"],
}

const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid", "CNG", "LPG"]
const transmissionTypes = ["Manual", "Automatic", "CVT", "Semi-Automatic"]
const bodyTypes = ["Sedan", "Hatchback", "SUV", "Coupe", "Convertible", "Wagon", "Pickup", "Van"]

export default function CarForm() {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    fuelType: "",
    transmission: "",
    bodyType: "",
    color: "",
    engineCapacity: "",
    owners: "",
    location: "",
    description: "",
    features: [],
  })

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand)
    setFormData((prev) => ({ ...prev, brand, model: "" }))
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFeatureChange = (feature, checked) => {
    setFormData((prev) => ({
      ...prev,
      features: checked ? [...prev.features, feature] : prev.features.filter((f) => f !== feature),
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Car form data:", formData)
    // Handle form submission here
  }

  const carFeatures = [
    "Air Conditioning",
    "Power Steering",
    "Power Windows",
    "ABS",
    "Airbags",
    "Alloy Wheels",
    "Fog Lights",
    "Music System",
    "Central Locking",
    "Sunroof",
    "Leather Seats",
    "GPS Navigation",
    "Bluetooth",
    "Parking Sensors",
    "Backup Camera",
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="brand">Car Brand *</Label>
            <Select value={selectedBrand} onValueChange={handleBrandChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select car brand" />
              </SelectTrigger>
              <SelectContent>
                {carBrands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Car Model *</Label>
            <Select
              value={formData.model}
              onValueChange={(value) => handleInputChange("model", value)}
              disabled={!selectedBrand}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select car model" />
              </SelectTrigger>
              <SelectContent>
                {selectedBrand &&
                  carModels[selectedBrand]?.map((model) => (
                    <SelectItem key={model} value={model}>
                      {model}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Year *</Label>
            <Input
              id="year"
              type="number"
              placeholder="e.g., 2020"
              value={formData.year}
              onChange={(e) => handleInputChange("year", e.target.value)}
              min="1990"
              max="2024"
            />
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
            <Label htmlFor="mileage">Mileage (km) *</Label>
            <Input
              id="mileage"
              type="number"
              placeholder="e.g., 50000"
              value={formData.mileage}
              onChange={(e) => handleInputChange("mileage", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              placeholder="Enter your city"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vehicle Specifications</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fuelType">Fuel Type *</Label>
            <Select value={formData.fuelType} onValueChange={(value) => handleInputChange("fuelType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select fuel type" />
              </SelectTrigger>
              <SelectContent>
                {fuelTypes.map((fuel) => (
                  <SelectItem key={fuel} value={fuel}>
                    {fuel}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="transmission">Transmission *</Label>
            <Select value={formData.transmission} onValueChange={(value) => handleInputChange("transmission", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select transmission" />
              </SelectTrigger>
              <SelectContent>
                {transmissionTypes.map((trans) => (
                  <SelectItem key={trans} value={trans}>
                    {trans}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bodyType">Body Type *</Label>
            <Select value={formData.bodyType} onValueChange={(value) => handleInputChange("bodyType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select body type" />
              </SelectTrigger>
              <SelectContent>
                {bodyTypes.map((body) => (
                  <SelectItem key={body} value={body}>
                    {body}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              placeholder="e.g., Red, Blue, White"
              value={formData.color}
              onChange={(e) => handleInputChange("color", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="engineCapacity">Engine Capacity (CC)</Label>
            <Input
              id="engineCapacity"
              type="number"
              placeholder="e.g., 1500"
              value={formData.engineCapacity}
              onChange={(e) => handleInputChange("engineCapacity", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="owners">Number of Owners</Label>
            <Select value={formData.owners} onValueChange={(value) => handleInputChange("owners", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select owners" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1st Owner</SelectItem>
                <SelectItem value="2">2nd Owner</SelectItem>
                <SelectItem value="3">3rd Owner</SelectItem>
                <SelectItem value="4+">4+ Owners</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {carFeatures.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  checked={formData.features.includes(feature)}
                  onCheckedChange={(checked) => handleFeatureChange(feature, checked)}
                />
                <Label htmlFor={feature} className="text-sm">
                  {feature}
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
            <Label htmlFor="description">Additional Details</Label>
            <Textarea
              id="description"
              placeholder="Describe your car's condition, any modifications, service history, etc."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          Post Car Ad
        </Button>
        <Button type="button" variant="outline" className="flex-1 bg-transparent">
          Save as Draft
        </Button>
      </div>
    </form>
  )
}
