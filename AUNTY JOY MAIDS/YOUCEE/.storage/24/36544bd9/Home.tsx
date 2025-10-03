import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Users, Shield, Clock, Phone, Mail, MapPin, Facebook, Twitter, Instagram, MessageCircle, Linkedin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      tagline: 'Professional Maid Services 24/7',
      heroTitle: 'We have a list of well vetted maids who are',
      professionals: 'professionals',
      heroSubtitle: 'to suit your needs',
      heroDescription: 'Try us for superb services. We help thousands of people find well-trained maids who are well groomed to suit your needs.',
      findMaid: 'Find a Maid - $20',
      registerMaid: 'Register as Maid - $20',
      ourServices: 'Our Services',
      servicesDescription: "We're here to find a new maid/employer for you. Available 365 days, 24/7.",
      forEmployers: 'For Employers',
      employerDesc: 'Find vetted, professional maids',
      forMaids: 'For Maids',
      maidDesc: 'Connect with employers safely',
      trainingServices: 'Training Services',
      trainingDesc: 'Professional maid training',
      ourCharges: 'Our Charges',
      employers: 'Employers',
      maids: 'Maids',
      secondVisit: 'Second Visit (Maids Only)',
      oneTimeReg: 'One-time registration fee',
      reducedPrice: 'Reduced price for returning maids',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      paymentMethods: 'Payment Methods',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us'
    },
    sn: {
      tagline: 'Masevhisi Evashandi 24/7',
      heroTitle: 'Tine rondedzero yevashandi vakaongororwa vari',
      professionals: 'nyanzvi',
      heroSubtitle: 'vanokukwanira',
      heroDescription: 'Tiedze masevhisi akanaka. Tinobatsira zviuru zvevanhu kuwana vashandi vakadzidziswa vakanaka vanokukwanira.',
      findMaid: 'Tsvaga Mushandi - $20',
      registerMaid: 'Nyoresa Semushandi - $20',
      ourServices: 'Masevhisi Edu',
      servicesDescription: 'Tiri pano kutsvagira mushandi/muridzi. Tinoshanda mazuva 365, 24/7.',
      forEmployers: 'Kune Varidzi',
      employerDesc: 'Wana vashandi vakaongororwa, nyanzvi',
      forMaids: 'Kune Vashandi',
      maidDesc: 'Batana nevaridzi zvakachengeteka',
      trainingServices: 'Masevhisi Ekudzidzisa',
      trainingDesc: 'Kudzidzisa vashandi nyanzvi',
      ourCharges: 'Mitengo Yedu',
      employers: 'Varidzi',
      maids: 'Vashandi',
      secondVisit: 'Kushanya Kwechipiri (Vashandi Chete)',
      oneTimeReg: 'Mari yekujoina kamwe chete',
      reducedPrice: 'Mutengo wakaderedzwa kuvashandi vanodzoka',
      aboutUs: 'Nezvedu',
      contactUs: 'Batirana Nesu',
      paymentMethods: 'Nzira Dzekubhadhara',
      quickLinks: 'Zvinonhanyisa',
      followUs: 'Titeverei'
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Language Selection Modal Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <Card className="w-96 mx-4">
          <CardHeader className="text-center">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <CardTitle>Choose Your Language / Sarudza Mutauro Wako</CardTitle>
            <CardDescription>Select your preferred language to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇬🇧 English</SelectItem>
                <SelectItem value="sn">🇿🇼 Shona</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              className="w-full mt-4" 
              onClick={() => {
                document.querySelector('.fixed')?.remove();
              }}
            >
              Continue / Enderera
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-600">YouCEE</h1>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
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
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/search" className="text-gray-600 hover:text-blue-600">
              {language === 'en' ? 'Find Maids' : 'Tsvaga Vashandi'}
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">
                {language === 'en' ? 'Get Started' : 'Tanga'}
              </Button>
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
                {t.tagline}
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                {t.heroTitle} <span className="text-blue-600">{t.professionals}</span> {t.heroSubtitle}
              </h1>
              <p className="text-xl text-gray-600">
                {t.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                    {t.findMaid}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
                    {t.registerMaid}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.ourServices}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.servicesDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>{t.forEmployers}</CardTitle>
                <CardDescription>{t.employerDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {language === 'en' ? 'Search by experience, age, location' : 'Tsvaga neruzivo, zera, nzvimbo'}</li>
                  <li>• {language === 'en' ? 'View detailed profiles and photos' : 'Ona profile dzakakwana nemifananidzo'}</li>
                  <li>• {language === 'en' ? 'Schedule appointments' : 'Ronga misangano'}</li>
                  <li>• {language === 'en' ? 'Police clearance verification' : 'Kuongororwa kwepolice clearance'}</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-green-100 text-green-800">$20 {language === 'en' ? 'Registration' : 'Kunyoresa'}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>{t.forMaids}</CardTitle>
                <CardDescription>{t.maidDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {language === 'en' ? 'Create professional profile' : 'Gadzira profile yenyanzvi'}</li>
                  <li>• {language === 'en' ? 'Upload credentials and photos' : 'Isa zvitupa nemifananidzo'}</li>
                  <li>• {language === 'en' ? 'Set salary expectations' : 'Isa mari yaunotarisira'}</li>
                  <li>• {language === 'en' ? 'Police clearance upload' : 'Isa police clearance'}</li>
                  <li>• {language === 'en' ? 'Direct employer contact' : 'Taura nevaridzi zvakananga'}</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-green-100 text-green-800">$20 {language === 'en' ? 'Registration' : 'Kunyoresa'}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>{t.trainingServices}</CardTitle>
                <CardDescription>{t.trainingDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {language === 'en' ? 'Ideal for busy employers' : 'Zvakanakira varidzi vakabatikana'}</li>
                  <li>• {language === 'en' ? 'Complete training programs' : 'Zvirongwa zvekudzidzisa zvakakwana'}</li>
                  <li>• {language === 'en' ? 'Follow-up services' : 'Masevhisi ekutevera'}</li>
                  <li>• {language === 'en' ? 'Leave everything to us' : 'Siya zvese kwatiri'}</li>
                  <li>• {language === 'en' ? 'Professional certification' : 'Zvitupa zvenyanzvi'}</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-blue-100 text-blue-800">$10 {language === 'en' ? 'Second Visit' : 'Kushanya Kwechipiri'}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.ourCharges}</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl">{t.employers}</CardTitle>
                <div className="text-4xl font-bold text-blue-600">$20</div>
                <CardDescription>{t.oneTimeReg}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl">{t.maids}</CardTitle>
                <div className="text-4xl font-bold text-green-600">$20</div>
                <CardDescription>{t.oneTimeReg}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">{t.secondVisit}</CardTitle>
                <div className="text-4xl font-bold text-purple-600">$10</div>
                <CardDescription>{t.reducedPrice}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.aboutUs}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {language === 'en' 
                ? 'We help thousands of people like you find well trained maids who are well groomed to suit your needs. We leverage our presence to produce great outcomes for the Employers and Maids we work with. With teams all across Harare, we can support you no matter where you need us.'
                : 'Tinobatsira zviuru zvevanhu sewe kuwana vashandi vakadzidziswa vakanaka vanokukwanira. Tinoshandisa kuvapo kwedu kuburitsa mhedzisiro yakanaka kuvaridzi nevashandi vatinoshandisa navo. Nezvikwata zvese muHarare, tinogona kukutsigira chero kwaunotida.'
              }
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'en'
                ? 'We understand your needs, and work hard to connect you with professional maids who are thoroughly vetted by the Zimbabwe Republic Police (ZRP). We foster a strong relationship with you and go beyond expectations to bring great Maids to your homes.'
                : 'Tinonzwisisa zvaunoda, uye tinoshanda nesimba kukubatanidza nevashandi venyanzvi vakaongororwa neZimbabwe Republic Police (ZRP). Tinovandudza hukama hwakasimba newe uye tinodarika zvaunotarisira kuuyisa vashandi vakanaka kumusha kwako.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.contactUs}</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>9139 Budiriro 5B Harare</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+263 77 119 6936</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+263 71 660 7886</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+263 78 005 9502</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>info@youcee.co.zw</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.paymentMethods}</h3>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div>PayNow: +263 77 119 6936</div>
                <div>Ecocash: +263 77 119 6936</div>
                <div>OneMoney: +263 71 660 7886</div>
                <div>Omari: +263 77 119 6936</div>
                <div>InnBucks: +263 77 119 6936</div>
                <div>PayPal: Available</div>
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
                {language === 'en' 
                  ? 'Professional maid recruitment services available 24/7, 365 days a year.'
                  : 'Masevhisi ekutsvaga vashandi anoshanda 24/7, mazuva 365 pagore.'
                }
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{language === 'en' ? 'Services' : 'Masevhisi'}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{language === 'en' ? 'Maid Recruitment' : 'Kutsvaga Vashandi'}</li>
                <li>{language === 'en' ? 'Training Services' : 'Masevhisi Ekudzidzisa'}</li>
                <li>{language === 'en' ? 'Background Verification' : 'Kuongororwa Kwemamiriro'}</li>
                <li>{language === 'en' ? 'Appointment Scheduling' : 'Kuronga Misangano'}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.quickLinks}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/search" className="hover:text-white">{language === 'en' ? 'Find Maids' : 'Tsvaga Vashandi'}</Link></li>
                <li><Link to="/register" className="hover:text-white">{language === 'en' ? 'Register' : 'Nyoresa'}</Link></li>
                <li><Link to="/login" className="hover:text-white">Login</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.followUs}</h4>
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