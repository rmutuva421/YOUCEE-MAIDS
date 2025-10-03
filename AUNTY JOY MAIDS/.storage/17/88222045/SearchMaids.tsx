import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Filter, MapPin, Star, Calendar, Phone, Mail, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockMaids } from '@/lib/mockData';

export default function SearchMaids() {
  const [searchFilters, setSearchFilters] = useState({
    name: '',
    age: '',
    experience: '',
    maritalStatus: '',
    children: '',
    church: '',
    village: '',
    minSalary: '',
    maxSalary: ''
  });
  const [filteredMaids, setFilteredMaids] = useState(mockMaids);

  const handleFilterChange = (field: string, value: string) => {
    const newFilters = { ...searchFilters, [field]: value };
    setSearchFilters(newFilters);
    
    // Apply filters
    const filtered = mockMaids.filter(maid => {
      if (newFilters.name && !maid.name.toLowerCase().includes(newFilters.name.toLowerCase())) return false;
      if (newFilters.age && maid.age !== parseInt(newFilters.age)) return false;
      if (newFilters.experience && maid.experience < parseInt(newFilters.experience)) return false;
      if (newFilters.maritalStatus && maid.maritalStatus !== newFilters.maritalStatus) return false;
      if (newFilters.children && maid.children !== parseInt(newFilters.children)) return false;
      if (newFilters.church && !maid.church.toLowerCase().includes(newFilters.church.toLowerCase())) return false;
      if (newFilters.village && !maid.village.toLowerCase().includes(newFilters.village.toLowerCase())) return false;
      if (newFilters.minSalary && maid.expectedSalary < parseInt(newFilters.minSalary)) return false;
      if (newFilters.maxSalary && maid.expectedSalary > parseInt(newFilters.maxSalary)) return false;
      return true;
    });
    
    setFilteredMaids(filtered);
  };

  const clearFilters = () => {
    setSearchFilters({
      name: '',
      age: '',
      experience: '',
      maritalStatus: '',
      children: '',
      church: '',
      village: '',
      minSalary: '',
      maxSalary: ''
    });
    setFilteredMaids(mockMaids);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-blue-600">YouCEE</span>
            </Link>
            <nav className="flex space-x-4">
              <Link to="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Professional Maids</h1>
          <p className="text-gray-600">Search and filter through our vetted maid professionals</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Search Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Name Search */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Search by name"
                    value={searchFilters.name}
                    onChange={(e) => handleFilterChange('name', e.target.value)}
                  />
                </div>

                {/* Age Filter */}
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Select value={searchFilters.age} onValueChange={(value) => handleFilterChange('age', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18">18 years</SelectItem>
                      <SelectItem value="25">25 years</SelectItem>
                      <SelectItem value="30">30 years</SelectItem>
                      <SelectItem value="35">35 years</SelectItem>
                      <SelectItem value="40">40+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Filter */}
                <div className="space-y-2">
                  <Label htmlFor="experience">Minimum Experience (years)</Label>
                  <Select value={searchFilters.experience} onValueChange={(value) => handleFilterChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1+ years</SelectItem>
                      <SelectItem value="3">3+ years</SelectItem>
                      <SelectItem value="5">5+ years</SelectItem>
                      <SelectItem value="10">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Marital Status */}
                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">Marital Status</Label>
                  <Select value={searchFilters.maritalStatus} onValueChange={(value) => handleFilterChange('maritalStatus', value)}>
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

                {/* Number of Children */}
                <div className="space-y-2">
                  <Label htmlFor="children">Number of Children</Label>
                  <Select value={searchFilters.children} onValueChange={(value) => handleFilterChange('children', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No children</SelectItem>
                      <SelectItem value="1">1 child</SelectItem>
                      <SelectItem value="2">2 children</SelectItem>
                      <SelectItem value="3">3+ children</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Church */}
                <div className="space-y-2">
                  <Label htmlFor="church">Church</Label>
                  <Input
                    id="church"
                    placeholder="Search by church"
                    value={searchFilters.church}
                    onChange={(e) => handleFilterChange('church', e.target.value)}
                  />
                </div>

                {/* Village/Area */}
                <div className="space-y-2">
                  <Label htmlFor="village">Village/Area</Label>
                  <Input
                    id="village"
                    placeholder="Search by area"
                    value={searchFilters.village}
                    onChange={(e) => handleFilterChange('village', e.target.value)}
                  />
                </div>

                {/* Salary Range */}
                <div className="space-y-2">
                  <Label>Salary Range (USD)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min"
                      type="number"
                      value={searchFilters.minSalary}
                      onChange={(e) => handleFilterChange('minSalary', e.target.value)}
                    />
                    <Input
                      placeholder="Max"
                      type="number"
                      value={searchFilters.maxSalary}
                      onChange={(e) => handleFilterChange('maxSalary', e.target.value)}
                    />
                  </div>
                </div>

                <Button onClick={clearFilters} variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Available Maids</h2>
                <p className="text-gray-600">{filteredMaids.length} maids found</p>
              </div>
              <Select defaultValue="rating">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experience</SelectItem>
                  <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              {filteredMaids.map((maid) => (
                <Card key={maid.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <Avatar className="w-24 h-24">
                          <AvatarImage src={maid.photo} alt={maid.name} />
                          <AvatarFallback>{maid.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </div>

                      {/* Main Info */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold">{maid.name}</h3>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{maid.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-600">{maid.description}</p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Age:</span>
                            <p className="font-medium">{maid.age} years</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Experience:</span>
                            <p className="font-medium">{maid.experience} years</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Status:</span>
                            <p className="font-medium capitalize">{maid.maritalStatus}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Children:</span>
                            <p className="font-medium">{maid.children}</p>
                          </div>
                        </div>

                        {/* Location & Church */}
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span>{maid.village}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span>{maid.church}</span>
                          </div>
                        </div>

                        {/* Skills & Badges */}
                        <div className="flex flex-wrap gap-2">
                          {maid.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                          {maid.verified && <Badge className="bg-green-100 text-green-800">Verified</Badge>}
                          {maid.policeCleared && <Badge className="bg-blue-100 text-blue-800">Police Cleared</Badge>}
                        </div>
                      </div>

                      {/* Action Panel */}
                      <div className="flex-shrink-0 space-y-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">${maid.expectedSalary}</div>
                          <div className="text-sm text-gray-500">per month</div>
                        </div>
                        
                        <div className="space-y-2">
                          <Button className="w-full">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Interview
                          </Button>
                          <Button variant="outline" className="w-full">
                            View Full Profile
                          </Button>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMaids.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No maids found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search filters to find more results.</p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}