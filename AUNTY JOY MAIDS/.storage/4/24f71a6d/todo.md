# YouCEE Employment Recruitment Services - MVP Todo

## Core Files to Create (Max 8 files limit - focusing on essential MVP features)

### 1. **src/pages/Home.tsx** - Landing page with AI maid images, hero section, services overview
### 2. **src/pages/Login.tsx** - Multi-user login (Employers, Maids, Admin) with role selection
### 3. **src/pages/Register.tsx** - Registration with payment integration and consent checkbox
### 4. **src/pages/Dashboard.tsx** - Role-based dashboard (different views for employers/maids/admin)
### 5. **src/pages/SearchMaids.tsx** - Advanced search and filtering for maids
### 6. **src/pages/Profile.tsx** - User profile management with document uploads
### 7. **src/components/PaymentModal.tsx** - Payment integration component for all platforms
### 8. **src/lib/mockData.ts** - Mock data for maids, employers, and system functionality

## MVP Features Implementation Priority:
1. **Landing Page** - Hero section with AI maid images, services, pricing, contact info
2. **Authentication System** - Login/Register with role selection (Employer/Maid/Admin)
3. **Payment Integration** - Modal with all payment options (PayNow, OneMoney, etc.)
4. **Search Functionality** - Filter maids by criteria (name, age, experience, etc.)
5. **User Dashboards** - Role-based interfaces with key actions
6. **Profile Management** - Basic profile with document upload simulation
7. **Social Media Links** - Footer integration for all platforms
8. **SEO Optimization** - Meta tags and structured data

## Simplified for MVP (to be enhanced later):
- Mock database instead of MySQL (localStorage for demo)
- Simulated payment processing (no real transactions)
- Static AI-generated images (placeholder service)
- Basic language toggle (English/Local)
- Contact forms instead of live chat
- Email notifications instead of SMS/WhatsApp

## Technology Stack:
- Frontend: React + TypeScript + Tailwind CSS + Shadcn/ui
- State Management: React Context + localStorage
- Routing: React Router
- Forms: React Hook Form
- Icons: Lucide React
- Styling: Tailwind CSS with custom components

## File Structure:
```
src/
├── pages/
│   ├── Home.tsx (Landing page)
│   ├── Login.tsx (Multi-role login)
│   ├── Register.tsx (Registration with payment)
│   ├── Dashboard.tsx (Role-based dashboard)
│   ├── SearchMaids.tsx (Maid search/filter)
│   └── Profile.tsx (User profile)
├── components/
│   └── PaymentModal.tsx (Payment integration)
└── lib/
    └── mockData.ts (Sample data)
```

This MVP focuses on core functionality while staying within the 8-file limit and ensuring a working demonstration of the key features.