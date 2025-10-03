// Mock data for the YouCEE recruitment platform

export interface Maid {
  id: string;
  name: string;
  age: number;
  experience: number;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  children: number;
  church: string;
  village: string; // This represents rural area now
  expectedSalary: number;
  description: string;
  skills: string[];
  rating: number;
  photo: string;
  verified: boolean;
  policeCleared: boolean;
  phone: string;
  email: string;
  preferredDays: string[];
  workType: string[];
}

export const mockMaids: Maid[] = [
  {
    id: '1',
    name: 'Mary Chipo Mukamuri',
    age: 28,
    experience: 5,
    maritalStatus: 'married',
    children: 2,
    church: 'Methodist Church',
    village: 'Budiriro Rural Area',
    expectedSalary: 180,
    description: 'Experienced maid with excellent cooking and childcare skills. I have worked with families for over 5 years and understand the importance of maintaining a clean, organized home. I am reliable, trustworthy, and love working with children.',
    skills: ['Cooking', 'Childcare', 'Laundry', 'Deep Cleaning', 'Ironing'],
    rating: 4.8,
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face',
    verified: true,
    policeCleared: true,
    phone: '+263 77 123 4567',
    email: 'mary.chipo@email.com',
    preferredDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    workType: ['Live-out', 'Full-time']
  },
  {
    id: '2',
    name: 'Grace Tendai Moyo',
    age: 35,
    experience: 8,
    maritalStatus: 'single',
    children: 0,
    church: 'Catholic Church',
    village: 'Mbare Rural District',
    expectedSalary: 220,
    description: 'Professional house manager with extensive experience in large households. Specialized in organizing, deep cleaning, and managing household schedules. I take pride in my attention to detail and ability to maintain high standards.',
    skills: ['Deep Cleaning', 'Organization', 'Cooking', 'Laundry', 'Gardening', 'Pet Care'],
    rating: 4.9,
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&crop=face',
    verified: true,
    policeCleared: true,
    phone: '+263 71 234 5678',
    email: 'grace.moyo@email.com',
    preferredDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    workType: ['Live-in', 'Full-time']
  },
  {
    id: '3',
    name: 'Sarah Blessing Ncube',
    age: 24,
    experience: 3,
    maritalStatus: 'single',
    children: 1,
    church: 'Pentecostal Church',
    village: 'Chitungwiza Rural Area',
    expectedSalary: 150,
    description: 'Young and energetic maid with a passion for creating comfortable living spaces. I am quick to learn new tasks and adapt to family routines. My experience includes working with busy families who need reliable domestic support.',
    skills: ['Cleaning', 'Cooking', 'Childcare', 'Laundry'],
    rating: 4.5,
    photo: 'https://images.unsplash.com/photo-1594824804732-5f7d0e45f9d8?w=300&h=400&fit=crop&crop=face',
    verified: true,
    policeCleared: true,
    phone: '+263 78 345 6789',
    email: 'sarah.ncube@email.com',
    preferredDays: ['Monday', 'Wednesday', 'Friday'],
    workType: ['Part-time', 'Live-out']
  },
  {
    id: '4',
    name: 'Patience Chidamba',
    age: 42,
    experience: 12,
    maritalStatus: 'widowed',
    children: 3,
    church: 'Anglican Church',
    village: 'Highfield Rural District',
    expectedSalary: 200,
    description: 'Experienced and mature domestic worker with over a decade of service. I specialize in elderly care and have worked with families who need compassionate, reliable support. My references speak to my integrity and dedication.',
    skills: ['Elderly Care', 'Cooking', 'Medication Reminders', 'Cleaning', 'Companionship'],
    rating: 4.7,
    photo: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=400&fit=crop&crop=face',
    verified: true,
    policeCleared: true,
    phone: '+263 77 456 7890',
    email: 'patience.chidamba@email.com',
    preferredDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    workType: ['Live-in', 'Full-time', 'Elderly Care']
  },
  {
    id: '5',
    name: 'Fortunate Madziva',
    age: 30,
    experience: 6,
    maritalStatus: 'married',
    children: 1,
    church: 'Seventh Day Adventist',
    village: 'Warren Park Rural Area',
    expectedSalary: 190,
    description: 'Dedicated professional with strong organizational skills and attention to detail. I have experience managing households of various sizes and pride myself on creating systems that make daily life easier for families.',
    skills: ['Organization', 'Cooking', 'Childcare', 'Cleaning', 'Laundry', 'Ironing'],
    rating: 4.6,
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop&crop=face',
    verified: true,
    policeCleared: true,
    phone: '+263 71 567 8901',
    email: 'fortunate.madziva@email.com',
    preferredDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    workType: ['Live-out', 'Full-time']
  },
  {
    id: '6',
    name: 'Chipo Mutasa',
    age: 26,
    experience: 4,
    maritalStatus: 'single',
    children: 0,
    church: 'Baptist Church',
    village: 'Kuwadzana Rural District',
    expectedSalary: 170,
    description: 'Enthusiastic and reliable domestic worker who takes pride in maintaining beautiful homes. I am particularly skilled in cooking traditional and modern meals, and I enjoy creating welcoming environments for families.',
    skills: ['Cooking', 'Baking', 'Cleaning', 'Laundry', 'Gardening'],
    rating: 4.4,
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop&crop=face',
    verified: true,
    policeCleared: false,
    phone: '+263 78 678 9012',
    email: 'chipo.mutasa@email.com',
    preferredDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    workType: ['Live-out', 'Part-time']
  }
];

export interface Employer {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  householdSize: number;
  requirements: string[];
  budget: number;
  preferredStartDate: string;
}

export const mockEmployers: Employer[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+263 77 111 2222',
    location: 'Borrowdale',
    householdSize: 4,
    requirements: ['Cooking', 'Childcare', 'Cleaning'],
    budget: 200,
    preferredStartDate: '2024-02-01'
  },
  {
    id: '2',
    name: 'Jennifer Wilson',
    email: 'jennifer.wilson@email.com',
    phone: '+263 71 333 4444',
    location: 'Highlands',
    householdSize: 2,
    requirements: ['Elderly Care', 'Cooking', 'Light Cleaning'],
    budget: 180,
    preferredStartDate: '2024-01-15'
  }
];

export interface JobPosting {
  id: string;
  employerId: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  requirements: string[];
  workType: 'live-in' | 'live-out' | 'part-time' | 'full-time';
  postedDate: string;
  applications: number;
}

export const mockJobPostings: JobPosting[] = [
  {
    id: '1',
    employerId: '1',
    title: 'House Maid - Borrowdale',
    description: 'Looking for experienced maid for 4-bedroom house. Must be reliable and have references.',
    location: 'Borrowdale',
    salary: 180,
    requirements: ['Cooking', 'Childcare', 'Cleaning', 'References'],
    workType: 'live-out',
    postedDate: '2024-01-10',
    applications: 12
  },
  {
    id: '2',
    employerId: '2',
    title: 'Live-in Maid - Highlands',
    description: 'Family of 4 seeking live-in maid. Own room provided. Experience with children preferred.',
    location: 'Highlands',
    salary: 220,
    requirements: ['Childcare', 'Cooking', 'Live-in', 'Experience with children'],
    workType: 'live-in',
    postedDate: '2024-01-08',
    applications: 8
  }
];

// FAQ Data for AI Chatbot
export const faqData = [
  {
    question: "How much does it cost to register?",
    answer: "Registration costs $20 for both employers and maids. This is a one-time fee that gives you full access to the platform. Second visits are only $10."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept PayNow (+263 77 123 424), OneMoney (+263 716 123 132), Omari (+263 77 123 424), InnBucks (077 123 424), and PayPal."
  },
  {
    question: "Are all maids background checked?",
    answer: "Yes, all maids must provide police clearance certificates from the Zimbabwe Republic Police (ZRP) for background verification."
  },
  {
    question: "What documents do I need to register?",
    answer: "You need a valid National ID or Passport. Maids also need to upload police clearance certificates and can optionally provide references."
  },
  {
    question: "How do I schedule an interview?",
    answer: "Once you find a suitable maid, you can schedule an interview directly through the platform. We'll send SMS and WhatsApp notifications to both parties."
  },
  {
    question: "What if I'm not satisfied with a maid?",
    answer: "If employment doesn't work out within the first month, you can search again at a reduced price of $10 for your second visit."
  },
  {
    question: "Do you provide training services?",
    answer: "Yes, we offer professional maid training services ideal for busy employers who want us to handle the training and follow-up."
  },
  {
    question: "What are your operating hours?",
    answer: "Our services are available 365 days a year, 24/7. You can register and search for maids anytime."
  }
];