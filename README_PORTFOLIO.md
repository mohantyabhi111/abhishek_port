# Abhishek Kumar Mohanty - Portfolio Website

A modern, interactive portfolio website built with React showcasing Full Stack Developer skills and projects.

## 🌟 Features

- **Modern Design**: Clean, professional dark theme with green accent colors
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, hover effects, and animated transitions
- **Comprehensive Sections**:
  - Hero section with professional introduction
  - About section highlighting key competencies
  - Skills section organized by technology categories
  - Featured projects with detailed descriptions
  - Education credentials
  - Achievements and certifications
  - Contact form with validation
  - Professional footer with social links

## 🛠️ Tech Stack

- **Frontend**: React.js
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation

## 📦 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing section
│   │   ├── Header.jsx            # Navigation bar
│   │   ├── About.jsx             # About section
│   │   ├── Skills.jsx            # Technical skills
│   │   ├── Projects.jsx          # Project showcase
│   │   ├── Education.jsx         # Academic background
│   │   ├── Achievements.jsx      # Awards & certifications
│   │   ├── Contact.jsx           # Contact form
│   │   ├── Footer.jsx            # Footer section
│   │   └── ui/                   # Shadcn UI components
│   ├── data/
│   │   └── mock.js              # Portfolio data (currently mock)
│   ├── hooks/
│   │   └── use-toast.js         # Toast notification hook
│   ├── App.js                   # Main app component
│   ├── App.css                  # Global styles
│   └── index.css                # Tailwind imports
```

## 🎨 Design Features

- **Color Scheme**: 
  - Primary Background: `#0f0f10` (Dark gray/black)
  - Card Background: `#1a1a1b` (Lighter dark)
  - Accent Color: `#00ff88` (Modern green)
  - Text: White/Gray hierarchy

- **Typography**: Inter font family for clean, modern look
- **Components**: Shadcn UI for consistent, accessible components
- **Icons**: Lucide React for modern, scalable icons

## 🚀 Running the Application

The application is already running at: `http://localhost:3000`

To restart the frontend:
```bash
sudo supervisorctl restart frontend
```

## 📝 Portfolio Content

### Personal Information
- **Name**: Abhishek Kumar Mohanty
- **Title**: Full Stack Developer (MERN Stack Specialist)
- **Email**: abhishek123cv@gmail.com
- **Location**: Tiruchirappalli, Tamil Nadu, India

### Featured Projects
1. **Insight Flow** - Blog Application (MERN Stack)
2. **ConnectSphere** - Social Media Platform
3. **ClimaCast** - Weather Application

### Key Skills
- **Frontend**: React.js, Redux, Next.js, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js, REST APIs
- **Databases**: MongoDB, MySQL, SQL
- **Languages**: Java, Python, JavaScript, C++
- **Tools**: Git, GitHub, VS Code

### Education
- **Institution**: IIIT Tiruchirappalli
- **Degree**: B.Tech in Electronics and Communication Engineering
- **CGPA**: 8.3/10.0
- **Duration**: December 2021 - October 2025

### Achievements
- Flipkart Grid 6.0 Finalist
- 5 Star Python Certified (HackerRank)
- Multiple Web Development Certifications

## 🔄 Current Implementation

This is a **frontend-only portfolio** with mock data stored in `/app/frontend/src/data/mock.js`. All interactions are client-side:

- Contact form shows success toast on submission (no backend integration)
- All data is stored in the mock.js file
- Ready for backend integration if needed in the future

## ✨ Interactive Features

- ✅ Smooth scroll navigation
- ✅ Sticky header with transparency effect
- ✅ Hover animations on cards and buttons
- ✅ Mobile-responsive hamburger menu
- ✅ Form validation and submission feedback
- ✅ Toast notifications
- ✅ Social media links (LinkedIn, GitHub, Email)
- ✅ Professional project showcase with images

## 📱 Mobile Optimization

- Fully responsive design with breakpoints
- Mobile-friendly navigation menu
- Touch-optimized interactive elements
- Optimized images and assets

## 🎯 Next Steps (Optional Future Enhancements)

1. **Backend Integration**: Connect contact form to email service
2. **Blog/CMS**: Add a blog section with content management
3. **Analytics**: Integrate Google Analytics or similar
4. **Resume Download**: Add downloadable PDF resume
5. **Project Filters**: Add technology-based filtering for projects
6. **Dark/Light Mode Toggle**: Add theme switcher

## 📄 License

Personal portfolio website © 2025 Abhishek Kumar Mohanty

---

**Built with ❤️ using React and modern web technologies**
