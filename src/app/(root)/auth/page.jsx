"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [showOtp, setShowOtp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSendOtp = () => {
    if (phoneNumber.length >= 10) {
      setShowOtp(true)
      // Here you would integrate with your OTP service
      console.log("[v0] Sending OTP to:", phoneNumber)
    }
  }

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      // Here you would verify the OTP
      console.log("[v0] Verifying OTP:", otp)
    }
  }

  const handleGoogleAuth = () => {
    // Here you would integrate with Google OAuth
    console.log("[v0] Google authentication initiated")
  }

  return (
    <>
    <Header/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            eClassify
          </Link>
          <p className="text-gray-600 mt-2">Welcome back! Please sign in to your account</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Welcome</CardTitle>
            <CardDescription>Sign in or create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 my-4">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* Sign In Tab */}
              <TabsContent value="signin" className="space-y-4">
                <Tabs defaultValue="phone" className="w-full">
                  {/* <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone
                    </TabsTrigger>
                    <TabsTrigger value="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </TabsTrigger>
                  </TabsList> */}

                  {/* Phone Sign In */}
                  <TabsContent value="phone" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-phone">Phone Number</Label>
                      <div className="flex gap-2">
                        <Input
                          id="signin-phone"
                          type="tel"
                          placeholder="+91 (555) 000-0000"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          disabled={showOtp}
                        />
                        {!showOtp && (
                          <Button onClick={handleSendOtp} variant="outline" className="text-primary">
                            Send OTP
                          </Button>
                        )}
                      </div>
                    </div>

                    {showOtp && (
                      <div className="space-y-2">
                        <Label htmlFor="signin-otp">Enter OTP</Label>
                        <div className="flex gap-2">
                          <Input
                            id="signin-otp"
                            type="text"
                            placeholder="000000"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                          <Button onClick={handleVerifyOtp}>Verify</Button>
                        </div>
                        <Button variant="link" className="text-sm" onClick={() => setShowOtp(false)}>
                          Change number
                        </Button>
                      </div>
                    )}
                  </TabsContent>

                  {/* Email Sign In */}
                  {/* <TabsContent value="email" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <Input
                        id="signin-email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password">Password</Label>
                      <Input
                        id="signin-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button className="w-full">Sign In</Button>
                  </TabsContent> */}
                </Tabs>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2 bg-transparent "
                  onClick={handleGoogleAuth}
                >
                  <img src="./assets/img/google.png" alt="Google Logo" className="w-6 h-6" />
                  <span className="text-primary">Continue with Google</span>
                </Button>
              </TabsContent>

              {/* Sign Up Tab */}
              <TabsContent value="signup" className="space-y-4">
                <Tabs defaultValue="phone" className="w-full">
                  {/* <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone
                    </TabsTrigger>
                    <TabsTrigger value="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </TabsTrigger>
                  </TabsList> */}

                  {/* Phone Sign Up */}
                  <TabsContent value="phone" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-phone">Phone Number</Label>
                      <div className="flex gap-2">
                        <Input
                          id="signup-phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          disabled={showOtp}
                        />
                        {!showOtp && (
                          <Button onClick={handleSendOtp} variant="outline">
                            Send OTP
                          </Button>
                        )}
                      </div>
                    </div>

                    {showOtp && (
                      <div className="space-y-2">
                        <Label htmlFor="signup-otp">Enter OTP</Label>
                        <div className="flex gap-2">
                          <Input
                            id="signup-otp"
                            type="text"
                            placeholder="000000"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                          <Button onClick={handleVerifyOtp}>Verify</Button>
                        </div>
                        <Button variant="link" className="text-sm" onClick={() => setShowOtp(false)}>
                          Change number
                        </Button>
                      </div>
                    )}
                  </TabsContent>

                  {/* Email Sign Up */}
                  {/* <TabsContent value="email" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name-email">Full Name</Label>
                      <Input
                        id="signup-name-email"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button className="w-full">Create Account</Button>
                  </TabsContent> */}
                </Tabs>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2 bg-transparent"
                  onClick={handleGoogleAuth}
                >
                <img src="./assets/img/google.png" alt="Google Logo" className="w-6 h-6" />
                  <span className="text-primary">Continue with Google</span>
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
