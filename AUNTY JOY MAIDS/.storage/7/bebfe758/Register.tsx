import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Users, Shield, CreditCard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PaymentModal from '@/components/PaymentModal';

export default function Register() {
  const [formData, setFormData] = useState({
    userType: 'employer',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    age: '',
    experience: '',
    maritalStatus: '',
    children: '',
    church: '',
    village: '',
    salary: '',
    description: ''
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!consentChecked) {
      toast.error('Please consent to data collection');
      return;
    }

    // Show payment modal
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    // Save user data
    const userData = {
      ...formData,
      id: Date.now().toString(),
      registrationDate: new Date().toISOString(),
      paymentStatus: 'paid'
    };

    localStorage.setItem('user', JSON.stringify(userData));
    toast.success('Registration successful! Welcome to YouCEE!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">YouCEE</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Join Our Platform</h2>
          <p className="text-gray-600">Register as an employer or maid</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>
              Fill in your details to get started. Registration fee: $20
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="userType">I am registering as:</Label>
                <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employer">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Employer - Looking for a maid</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="maid">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span>Maid - Looking for employment</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Maid-specific fields */}
              {formData.userType === 'maid' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        type="number"
                        placeholder="Years of experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maritalStatus">Marital Status</Label>
                      <Select value={formData.maritalStatus} onValueChange={(value) => handleInputChange('maritalStatus', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="divorced">Divorced</SelectItem>
                          <SelectItem value="widowed">Widowed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children">Number of Children</Label>
                      <Input
                        id="children"
                        type="number"
                        placeholder="Number of children"
                        value={formData.children}
                        onChange={(e) => handleInputChange('children', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="church">Church</Label>
                      <Input
                        id="church"
                        placeholder="Church name"
                        value={formData.church}
                        onChange={(e) => handleInputChange('church', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="village">Village/Area</Label>
                      <Input
                        id="village"
                        placeholder="Village or area"
                        value={formData.village}
                        onChange={(e) => handleInputChange('village', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Expected Salary (USD)</Label>
                    <Input
                      id="salary"
                      type="number"
                      placeholder="Expected monthly salary"
                      value={formData.salary}
                      onChange={(e) => handleInputChange('salary', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">About Yourself</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell employers about your experience, skills, and what makes you a great maid..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                    />
                  </div>
                </>
              )}

              {/* Data Consent */}
              <div className="flex items-start space-x-2 p-4 bg-gray-50 rounded-lg">
                <Checkbox
                  id="consent"
                  checked={consentChecked}
                  onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                />
                <div className="text-sm">
                  <Label htmlFor="consent" className="font-medium">
                    Data Collection Consent *
                  </Label>
                  <p className="text-gray-600 mt-1">
                    I consent to YouCEE collecting and processing my personal data for the purpose of 
                    providing maid recruitment services. This includes storing my profile information, 
                    contact details, and any uploaded documents in accordance with data protection laws.
                  </p>
                </div>
              </div>

              {/* Registration Fee Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <h3 className="font-medium text-blue-900">Registration Fee: $20</h3>
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  One-time registration fee includes full access to the platform, profile creation, 
                  and connection with {formData.userType === 'employer' ? 'maids' : 'employers'}. 
                  Second visits are only $10.
                </p>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                Proceed to Payment - $20
              </Button>

              {/* Links */}
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Sign in here
                  </Link>
                </p>
                <Link to="/" className="text-sm text-blue-600 hover:underline block">
                  ← Back to Home
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Payment Modal */}
        {showPayment && (
          <PaymentModal
            isOpen={showPayment}
            onClose={() => setShowPayment(false)}
            onSuccess={handlePaymentSuccess}
            amount={20}
            userType={formData.userType}
          />
        )}
      </div>
    </div>
  );
}