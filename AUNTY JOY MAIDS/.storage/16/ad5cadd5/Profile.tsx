import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, FileText, Shield, Camera, Users, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  userType: string;
  name: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  age?: string;
  experience?: string;
  maritalStatus?: string;
  children?: string;
  church?: string;
  village?: string;
  salary?: string;
  description?: string;
  skills?: string[];
  preferredDays?: string[];
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    maritalStatus: '',
    children: '',
    church: '',
    village: '',
    salary: '',
    description: '',
    skills: [] as string[],
    preferredDays: [] as string[]
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    const parsedUser: User = JSON.parse(userData);
    setUser(parsedUser);
    
    // Load profile data
    setProfileData({
      firstName: parsedUser.firstName || '',
      lastName: parsedUser.lastName || '',
      email: parsedUser.email || '',
      phone: parsedUser.phone || '',
      age: parsedUser.age || '',
      experience: parsedUser.experience || '',
      maritalStatus: parsedUser.maritalStatus || '',
      children: parsedUser.children || '',
      church: parsedUser.church || '',
      village: parsedUser.village || '',
      salary: parsedUser.salary || '',
      description: parsedUser.description || '',
      skills: parsedUser.skills || [],
      preferredDays: parsedUser.preferredDays || []
    });
  }, [navigate]);

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    const updatedUser = { ...user, ...profileData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    toast.success('Profile updated successfully!');
  };

  const handleFileUpload = (type: string) => {
    // Simulate file upload
    toast.success(`${type} uploaded successfully!`);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-blue-600">YouCEE</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your profile information and documents</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="relative inline-block">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                    <AvatarFallback>
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
                    onClick={() => handleFileUpload('Profile Photo')}
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle>{profileData.firstName} {profileData.lastName}</CardTitle>
                <CardDescription className="capitalize">{user.userType}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Profile Completion</span>
                    <Badge variant="outline">75%</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Basic Info</span>
                      <Badge className="bg-green-100 text-green-800">Complete</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Profile Photo</span>
                      <Badge variant="outline">Missing</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Documents</span>
                      <Badge variant="outline">Missing</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats for Maids */}
            {user.userType === 'maid' && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Profile Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Profile Views</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Applications Sent</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Interviews Scheduled</span>
                      <span className="font-medium">1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Main Profile Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    {user.userType === 'maid' && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="age">Age</Label>
                            <Input
                              id="age"
                              type="number"
                              value={profileData.age}
                              onChange={(e) => handleInputChange('age', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="experience">Years of Experience</Label>
                            <Input
                              id="experience"
                              type="number"
                              value={profileData.experience}
                              onChange={(e) => handleInputChange('experience', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="maritalStatus">Marital Status</Label>
                            <Select value={profileData.maritalStatus} onValueChange={(value) => handleInputChange('maritalStatus', value)}>
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
                              value={profileData.children}
                              onChange={(e) => handleInputChange('children', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="church">Church</Label>
                            <Input
                              id="church"
                              value={profileData.church}
                              onChange={(e) => handleInputChange('church', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="village">Village/Area</Label>
                            <Input
                              id="village"
                              value={profileData.village}
                              onChange={(e) => handleInputChange('village', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="salary">Expected Salary (USD per month)</Label>
                          <Input
                            id="salary"
                            type="number"
                            value={profileData.salary}
                            onChange={(e) => handleInputChange('salary', e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">About Yourself</Label>
                          <Textarea
                            id="description"
                            rows={4}
                            value={profileData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            placeholder="Tell employers about your experience, skills, and what makes you a great maid..."
                          />
                        </div>
                      </>
                    )}

                    <Button onClick={handleSaveProfile} className="w-full">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Documents */}
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Documents & Verification</CardTitle>
                    <CardDescription>Upload required documents for verification</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* National ID/Passport */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <div>
                            <h3 className="font-medium">National ID / Passport</h3>
                            <p className="text-sm text-gray-600">Required for identity verification</p>
                          </div>
                        </div>
                        <Badge variant="outline">Not Uploaded</Badge>
                      </div>
                      <Button onClick={() => handleFileUpload('National ID')} className="w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Document
                      </Button>
                    </div>

                    {/* Police Clearance */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Shield className="h-5 w-5 text-green-600" />
                          <div>
                            <h3 className="font-medium">Police Clearance Certificate</h3>
                            <p className="text-sm text-gray-600">Required for background verification</p>
                          </div>
                        </div>
                        <Badge variant="outline">Not Uploaded</Badge>
                      </div>
                      <Button onClick={() => handleFileUpload('Police Clearance')} className="w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Certificate
                      </Button>
                    </div>

                    {/* References */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Users className="h-5 w-5 text-purple-600" />
                          <div>
                            <h3 className="font-medium">References</h3>
                            <p className="text-sm text-gray-600">Previous employer references (optional)</p>
                          </div>
                        </div>
                        <Badge variant="outline">Optional</Badge>
                      </div>
                      <Button onClick={() => handleFileUpload('References')} variant="outline" className="w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload References
                      </Button>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> All documents are securely stored and only shared with potential employers 
                        after your consent. Documents help build trust and increase your chances of getting hired.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences */}
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Work Preferences</CardTitle>
                    <CardDescription>Set your work preferences and availability</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {user.userType === 'maid' && (
                      <>
                        <div className="space-y-2">
                          <Label>Preferred Working Days</Label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                              <label key={day} className="flex items-center space-x-2">
                                <input type="checkbox" className="rounded" />
                                <span className="text-sm">{day}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Work Type Preferences</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {['Live-in', 'Live-out', 'Part-time', 'Full-time', 'Weekends only', 'Emergency calls'].map((type) => (
                              <label key={type} className="flex items-center space-x-2">
                                <input type="checkbox" className="rounded" />
                                <span className="text-sm">{type}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Household Size Preference</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">Small (1-2 people)</SelectItem>
                              <SelectItem value="medium">Medium (3-4 people)</SelectItem>
                              <SelectItem value="large">Large (5+ people)</SelectItem>
                              <SelectItem value="any">Any size</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Special Skills</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {['Cooking', 'Childcare', 'Elderly care', 'Pet care', 'Gardening', 'Laundry', 'Ironing', 'Deep cleaning'].map((skill) => (
                              <label key={skill} className="flex items-center space-x-2">
                                <input type="checkbox" className="rounded" />
                                <span className="text-sm">{skill}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    <Button onClick={handleSaveProfile} className="w-full">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}