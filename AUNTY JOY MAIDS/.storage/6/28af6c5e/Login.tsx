import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Shield, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('employer');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    // Mock authentication - in real app, this would call an API
    const userData = {
      email,
      userType,
      name: userType === 'employer' ? 'John Employer' : userType === 'maid' ? 'Mary Maid' : 'Admin User',
      id: Date.now().toString()
    };

    localStorage.setItem('user', JSON.stringify(userData));
    toast.success('Login successful!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">YouCEE</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Choose your account type and enter your credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="userType">Account Type</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employer">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Employer</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="maid">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span>Maid</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="admin">
                      <div className="flex items-center space-x-2">
                        <Settings className="h-4 w-4" />
                        <span>Administrator</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Sign In
              </Button>

              {/* Demo Credentials */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Demo Credentials:</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>Employer: employer@demo.com / password123</p>
                  <p>Maid: maid@demo.com / password123</p>
                  <p>Admin: admin@demo.com / password123</p>
                </div>
              </div>

              {/* Links */}
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-blue-600 hover:underline">
                    Register here
                  </Link>
                </p>
                <Link to="/" className="text-sm text-blue-600 hover:underline block">
                  ← Back to Home
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Social Login Options */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-center">Quick Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" size="sm" className="text-xs">
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                WhatsApp
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}