import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, CreditCard, Globe, Upload } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PaymentModal from '@/components/PaymentModal';

export default function Register() {
  const [language, setLanguage] = useState('en');
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
    ruralArea: '',
    salary: '',
    description: '',
    documents: {
      nationalId: null as File | null,
      policeCleared: null as File | null,
      references: null as File | null
    }
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const translations = {
    en: {
      title: 'Join Our Platform',
      subtitle: 'Register as an employer or maid',
      createAccount: 'Create Your Account',
      registrationFee: 'Fill in your details to get started. Registration fee: $20',
      registeringAs: 'I am registering as:',
      employer: 'Employer - Looking for a maid',
      maid: 'Maid - Looking for employment',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email (Optional)',
      phone: 'Phone Number',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      age: 'Age',
      experience: 'Years of Experience',
      maritalStatus: 'Marital Status',
      children: 'Number of Children',
      church: 'Church',
      ruralArea: 'Rural Area',
      salary: 'Expected Salary (USD)',
      description: 'About Yourself',
      uploadDocs: 'Upload Documents',
      nationalId: 'National ID/Passport',
      policeCleared: 'Police Clearance',
      references: 'References (Optional)',
      consent: 'Data Collection Consent',
      consentText: 'I consent to YouCEE collecting and processing my personal data for the purpose of providing maid recruitment services.',
      proceedPayment: 'Proceed to Payment - $20'
    },
    sn: {
      title: 'Joina Platform Yedu',
      subtitle: 'Nyoresa se muridzi kana mushandi',
      createAccount: 'Gadzira Account Yako',
      registrationFee: 'Zadza ruzivo rwako. Mari yekujoina: $20',
      registeringAs: 'Ndiri kunyoresa se:',
      employer: 'Muridzi - Ndiri kutsvaga mushandi',
      maid: 'Mushandi - Ndiri kutsvaga basa',
      firstName: 'Zita Rekutanga',
      lastName: 'Zita Remhuri',
      email: 'Email (Haisina Kudiwa)',
      phone: 'Nhamba Yefoni',
      password: 'Password',
      confirmPassword: 'Simbisa Password',
      age: 'Zera',
      experience: 'Makore Eruzivo',
      maritalStatus: 'Mamiriro Ewanano',
      children: 'Uwandu Hwevana',
      church: 'Kereke',
      ruralArea: 'Dunhu Rekumaruwa',
      salary: 'Mari Yaunotarisira (USD)',
      description: 'Nezve Iwe',
      uploadDocs: 'Isa Magwaro',
      nationalId: 'ID/Passport',
      policeCleared: 'Police Clearance',
      references: 'Mareferenzi (Haisina Kudiwa)',
      consent: 'Mvumo Yekutora Data',
      consentText: 'Ndinobvuma YouCEE kutora nekushandisa ruzivo rwangu kuti vandipe masevhisi ekutsvaga vashandi.',
      proceedPayment: 'Enda Kubhadhara - $20'
    }
  };

  const t = translations[language as keyof typeof translations];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (docType: keyof typeof formData.documents, file: File) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, [docType]: file }
    }));
    toast.success(`${docType} uploaded successfully!`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.password) {
      toast.error(language === 'en' ? 'Please fill in all required fields' : 'Zadza minda yese inodiwa');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error(language === 'en' ? 'Passwords do not match' : 'Password hadzifanane');
      return;
    }

    if (!consentChecked) {
      toast.error(language === 'en' ? 'Please consent to data collection' : 'Bvuma kutorwa kwedata');
      return;
    }

    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    const userData = {
      ...formData,
      id: Date.now().toString(),
      registrationDate: new Date().toISOString(),
      paymentStatus: 'paid'
    };

    localStorage.setItem('user', JSON.stringify(userData));
    toast.success(language === 'en' ? 'Registration successful! Welcome to YouCEE!' : 'Kunyoresa kwabudirira! Wakagamuchirwa kuYouCEE!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header with Language Toggle */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-blue-600">YouCEE</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-600" />
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="sn">Shona</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t.createAccount}</CardTitle>
            <CardDescription>{t.registrationFee}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="userType">{t.registeringAs}</Label>
                <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employer">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{t.employer}</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="maid">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span>{t.maid}</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t.firstName} *</Label>
                  <Input
                    id="firstName"
                    placeholder={t.firstName}
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t.lastName} *</Label>
                  <Input
                    id="lastName"
                    placeholder={t.lastName}
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.email}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phone} *</Label>
                  <Input
                    id="phone"
                    placeholder={t.phone}
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">{t.password} *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t.password}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t.confirmPassword} *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={t.confirmPassword}
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
                      <Label htmlFor="age">{t.age}</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder={t.age}
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">{t.experience}</Label>
                      <Input
                        id="experience"
                        type="number"
                        placeholder={t.experience}
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maritalStatus">{t.maritalStatus}</Label>
                      <Select value={formData.maritalStatus} onValueChange={(value) => handleInputChange('maritalStatus', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">{language === 'en' ? 'Single' : 'Asina murume'}</SelectItem>
                          <SelectItem value="married">{language === 'en' ? 'Married' : 'Akaroora'}</SelectItem>
                          <SelectItem value="divorced">{language === 'en' ? 'Divorced' : 'Akarambana'}</SelectItem>
                          <SelectItem value="widowed">{language === 'en' ? 'Widowed' : 'Chirikadzi'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children">{t.children}</Label>
                      <Input
                        id="children"
                        type="number"
                        placeholder={t.children}
                        value={formData.children}
                        onChange={(e) => handleInputChange('children', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="church">{t.church}</Label>
                      <Input
                        id="church"
                        placeholder={t.church}
                        value={formData.church}
                        onChange={(e) => handleInputChange('church', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ruralArea">{t.ruralArea}</Label>
                      <Input
                        id="ruralArea"
                        placeholder={t.ruralArea}
                        value={formData.ruralArea}
                        onChange={(e) => handleInputChange('ruralArea', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">{t.salary}</Label>
                    <Input
                      id="salary"
                      type="number"
                      placeholder={t.salary}
                      value={formData.salary}
                      onChange={(e) => handleInputChange('salary', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">{t.description}</Label>
                    <Textarea
                      id="description"
                      placeholder={language === 'en' ? 'Tell employers about your experience...' : 'Udza varidzi nezve ruzivo rwako...'}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                    />
                  </div>

                  {/* Document Upload Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">{t.uploadDocs}</h3>
                    
                    <div className="grid gap-4">
                      {/* National ID */}
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Label className="font-medium">{t.nationalId} *</Label>
                          {formData.documents.nationalId && (
                            <Badge className="bg-green-100 text-green-800">Uploaded</Badge>
                          )}
                        </div>
                        <Input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload('nationalId', file);
                          }}
                        />
                      </div>

                      {/* Police Clearance */}
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Label className="font-medium">{t.policeCleared} *</Label>
                          {formData.documents.policeCleared && (
                            <Badge className="bg-green-100 text-green-800">Uploaded</Badge>
                          )}
                        </div>
                        <Input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload('policeCleared', file);
                          }}
                        />
                      </div>

                      {/* References */}
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Label className="font-medium">{t.references}</Label>
                          {formData.documents.references && (
                            <Badge className="bg-green-100 text-green-800">Uploaded</Badge>
                          )}
                        </div>
                        <Input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload('references', file);
                          }}
                        />
                      </div>
                    </div>
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
                    {t.consent} *
                  </Label>
                  <p className="text-gray-600 mt-1">
                    {t.consentText}
                  </p>
                </div>
              </div>

              {/* Registration Fee Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  <h3 className="font-medium text-blue-900">
                    {language === 'en' ? 'Registration Fee: $20' : 'Mari Yekujoina: $20'}
                  </h3>
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  {language === 'en' 
                    ? 'One-time registration fee includes full access to the platform, profile creation, and connection with employers/maids. Second visits are only $10.'
                    : 'Mari yekujoina kamwe chete inosanganisira kuwana platform, kugadzira profile, nekubatana nevamwe. Kushanya kwechipiri $10 chete.'
                  }
                </p>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                {t.proceedPayment}
              </Button>

              {/* Links */}
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  {language === 'en' ? 'Already have an account?' : 'Une account here?'}{' '}
                  <Link to="/login" className="text-blue-600 hover:underline">
                    {language === 'en' ? 'Sign in here' : 'Pinda pano'}
                  </Link>
                </p>
                <Link to="/" className="text-sm text-blue-600 hover:underline block">
                  ← {language === 'en' ? 'Back to Home' : 'Dzokera kuHome'}
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