import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Search, Calendar, FileText, Settings, LogOut, Plus, Eye, Download } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  userType: string;
  name: string;
  firstName?: string;
  lastName?: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/');
  };

  if (!user) return null;

  const renderEmployerDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Maids</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12 new this week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 this week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">5 pending review</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your maid search and applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/search">
              <Button className="w-full h-20 flex flex-col space-y-2">
                <Search className="h-6 w-6" />
                <span>Search Maids</span>
              </Button>
            </Link>
            <Button className="w-full h-20 flex flex-col space-y-2" variant="outline">
              <Calendar className="h-6 w-6" />
              <span>Schedule Interview</span>
            </Button>
            <Button className="w-full h-20 flex flex-col space-y-2" variant="outline">
              <FileText className="h-6 w-6" />
              <span>View Applications</span>
            </Button>
            <Button className="w-full h-20 flex flex-col space-y-2" variant="outline">
              <Download className="h-6 w-6" />
              <span>Download Forms</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New maid application received</p>
                <p className="text-xs text-gray-500">Mary Chipo applied for your position - 2 hours ago</p>
              </div>
              <Badge variant="secondary">New</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Interview scheduled</p>
                <p className="text-xs text-gray-500">Meeting with Grace Mukamuri tomorrow at 2 PM</p>
              </div>
              <Badge variant="outline">Scheduled</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Police clearance uploaded</p>
                <p className="text-xs text-gray-500">Sarah Moyo submitted clearance certificate</p>
              </div>
              <Badge variant="outline">Review</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderMaidDashboard = () => (
    <div className="space-y-6">
      {/* Profile Status */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Status</CardTitle>
          <CardDescription>Complete your profile to get more opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Basic Information</span>
              <Badge className="bg-green-100 text-green-800">Complete</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Profile Photo</span>
              <Badge variant="outline">Upload Required</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>National ID/Passport</span>
              <Badge variant="outline">Upload Required</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Police Clearance</span>
              <Badge variant="outline">Upload Required</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/profile">
              <Button className="w-full h-20 flex flex-col space-y-2">
                <Settings className="h-6 w-6" />
                <span>Update Profile</span>
              </Button>
            </Link>
            <Button className="w-full h-20 flex flex-col space-y-2" variant="outline">
              <Plus className="h-6 w-6" />
              <span>Upload Documents</span>
            </Button>
            <Button className="w-full h-20 flex flex-col space-y-2" variant="outline">
              <Eye className="h-6 w-6" />
              <span>View Applications</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Job Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle>Latest Job Opportunities</CardTitle>
          <CardDescription>New positions from employers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">House Maid - Borrowdale</h3>
                <Badge className="bg-green-100 text-green-800">$180/month</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Looking for experienced maid for 4-bedroom house. Must be reliable and have references.
              </p>
              <div className="flex space-x-2">
                <Button size="sm">Apply Now</Button>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Live-in Maid - Highlands</h3>
                <Badge className="bg-green-100 text-green-800">$220/month</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Family of 4 seeking live-in maid. Own room provided. Experience with children preferred.
              </p>
              <div className="flex space-x-2">
                <Button size="sm">Apply Now</Button>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Second Visit Notice for Maids */}
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-purple-900">Second Visit Discount</CardTitle>
          <CardDescription className="text-purple-700">
            Special pricing for returning maids
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-purple-800 mb-4">
            If your first employment doesn't work out within a month, you can search for new opportunities 
            at a reduced price of only $10 instead of the regular $20 registration fee.
          </p>
          <Badge className="bg-purple-100 text-purple-800">
            50% Discount for Second Visit
          </Badge>
        </CardContent>
      </Card>
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="space-y-6">
      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+23 this week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Maids</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">756</div>
            <p className="text-xs text-muted-foreground">+12 new registrations</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">491</div>
            <p className="text-xs text-muted-foreground">+11 new registrations</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,940</div>
            <p className="text-xs text-muted-foreground">+$680 this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="w-full h-20 flex flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Manage Users</span>
            </Button>
            <Button className="w-full h-20 flex flex-col space-y-2" variant="outline">
              <Plus className="h-6 w-6" />
              <span>Post Job</span>
            </Button>
            <Button className="w-full h-20 flex flex-col space-y-2" variant="outline">
              <FileText className="h-6 w-6" />
              <span>View Reports</span>
            </Button>
            <Button className="w-full h-20 flex flex-col space-y-2" variant="outline">
              <Settings className="h-6 w-6" />
              <span>System Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Registrations */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Registrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Mary Chipo</p>
                <p className="text-sm text-gray-500">Maid • Registered 2 hours ago</p>
              </div>
              <Badge className="bg-green-100 text-green-800">Paid</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">John Smith</p>
                <p className="text-sm text-gray-500">Employer • Registered 5 hours ago</p>
              </div>
              <Badge className="bg-green-100 text-green-800">Paid</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Grace Mukamuri</p>
                <p className="text-sm text-gray-500">Maid • Registered 1 day ago</p>
              </div>
              <Badge className="bg-green-100 text-green-800">Paid</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">YouCEE</span>
              </Link>
              <Badge variant="outline" className="capitalize">
                {user.userType} Dashboard
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user.firstName || user.name}
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {user.userType === 'employer' && 'Employer Dashboard'}
            {user.userType === 'maid' && 'Maid Dashboard'}
            {user.userType === 'admin' && 'Admin Dashboard'}
          </h1>
          <p className="text-gray-600">
            {user.userType === 'employer' && 'Find and manage your maid applications'}
            {user.userType === 'maid' && 'Manage your profile and find job opportunities'}
            {user.userType === 'admin' && 'Manage the platform and monitor activities'}
          </p>
        </div>

        {user.userType === 'employer' && renderEmployerDashboard()}
        {user.userType === 'maid' && renderMaidDashboard()}
        {user.userType === 'admin' && renderAdminDashboard()}
      </main>
    </div>
  );
}