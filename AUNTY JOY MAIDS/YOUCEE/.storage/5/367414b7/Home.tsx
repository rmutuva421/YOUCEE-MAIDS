import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Shield, Clock, Phone, Mail, MapPin, Facebook, Twitter, Instagram, MessageCircle, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">YouCEE</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/search" className="text-gray-600 hover:text-blue-600">Find Maids</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section with AI Maid Images */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                Professional Maid Services 24/7
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                We have a list of well vetted maids who are 
                <span className="text-blue-600"> professionals</span> to suit your needs
              </h1>
              <p className="text-xl text-gray-600">
                Try us for superb services. We help thousands of people find well-trained maids who are well groomed to suit your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                    Find a Maid - $20
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
                    Register as Maid - $20
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* AI Generated Maid Images Placeholder */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face" 
                  alt="Professional Maid" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&crop=face" 
                  alt="Experienced Maid" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1594824804732-5f7d0e45f9d8?w=300&h=400&fit=crop&crop=face" 
                  alt="Trained Maid" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=400&fit=crop&crop=face" 
                  alt="Professional Cleaner" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to find a new maid/employer for you. Available 365 days, 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>For Employers</CardTitle>
                <CardDescription>Find vetted, professional maids</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Search by experience, age, location</li>
                  <li>• View detailed profiles and photos</li>
                  <li>• Schedule appointments</li>
                  <li>• Police clearance verification</li>
                  <li>• Lease agreement management</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-green-100 text-green-800">$20 Registration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>For Maids</CardTitle>
                <CardDescription>Connect with employers safely</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Create professional profile</li>
                  <li>• Upload credentials and photos</li>
                  <li>• Set salary expectations</li>
                  <li>• Police clearance upload</li>
                  <li>• Direct employer contact</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-green-100 text-green-800">$20 Registration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Training Services</CardTitle>
                <CardDescription>Professional maid training</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Ideal for busy employers</li>
                  <li>• Complete training programs</li>
                  <li>• Follow-up services</li>
                  <li>• Leave everything to us</li>
                  <li>• Professional certification</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-blue-100 text-blue-800">$10 Second Visit</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Charges</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl">Employers</CardTitle>
                <div className="text-4xl font-bold text-blue-600">$20</div>
                <CardDescription>One-time registration fee</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl">Maids</CardTitle>
                <div className="text-4xl font-bold text-green-600">$20</div>
                <CardDescription>One-time registration fee</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Second Visit</CardTitle>
                <div className="text-4xl font-bold text-purple-600">$10</div>
                <CardDescription>Reduced price for returning users</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We help thousands of people like you find well trained maids who are well groomed to suit your needs. 
              We leverage our presence to produce great outcomes for the Employers and Maids we work with. 
              With teams all across Harare, we can support you no matter where you need us.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand your needs, and work hard to connect you with professional maids who are thoroughly 
              vetted by the Zimbabwe Republic Police (ZRP). We foster a strong relationship with you and go beyond 
              expectations to bring great Maids to your homes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>9139 Budiriro 5B Harare</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+263 77 123 424</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>info@youcee.co.zw</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>PayNow: +263 77 123 424</div>
                <div>OneMoney: +263 716 123 132</div>
                <div>Omari: +263 77 123 424</div>
                <div>InnBucks: 077 123 424</div>
                <div className="col-span-2">PayPal: Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-6 w-6" />
                <span className="text-xl font-bold">YouCEE</span>
              </div>
              <p className="text-gray-400">
                Professional maid recruitment services available 24/7, 365 days a year.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Maid Recruitment</li>
                <li>Training Services</li>
                <li>Background Verification</li>
                <li>Appointment Scheduling</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/search" className="hover:text-white">Find Maids</Link></li>
                <li><Link to="/register" className="hover:text-white">Register</Link></li>
                <li><Link to="/login" className="hover:text-white">Login</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <MessageCircle className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YouCEE Employment Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}