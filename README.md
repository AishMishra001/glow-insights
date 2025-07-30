# ADmyBRAND Insights - Modern Analytics Dashboard

A sophisticated, real-time analytics dashboard built with React, TypeScript, and modern web technologies. This application provides comprehensive insights into marketing campaigns, audience analytics, and business performance metrics.

![ADmyBRAND Insights Dashboard](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-purple)
![Vite](https://img.shields.io/badge/Vite-4.4-orange)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Enhanced user experience with CSS animations and transitions
- **Glass Morphism** - Modern glass effect design elements
- **Typography System** - Consistent and beautiful typography throughout the app

### 📊 **Analytics Dashboard**
- **Real-time Metrics** - Live performance indicators and KPIs
- **Interactive Charts** - Revenue, traffic, and channel analytics
- **Campaign Management** - Track and analyze marketing campaigns
- **Audience Insights** - Detailed audience demographics and behavior
- **Data Sources** - Connect and manage multiple data integrations

### 🔧 **Technical Features**
- **TypeScript** - Full type safety and better development experience
- **React Query** - Efficient data fetching and caching
- **React Router** - Client-side routing with nested routes
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality, accessible UI components
- **Lucide Icons** - Beautiful, customizable icons

### 🚀 **Performance & UX**
- **Skeleton Loading** - Smooth loading states for better perceived performance
- **Lazy Loading** - Optimized component loading
- **Error Boundaries** - Graceful error handling
- **Accessibility** - WCAG compliant design
- **SEO Optimized** - Search engine friendly

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Re-usable UI components
- **Lucide React** - Icon library

### State Management & Data
- **React Query (TanStack Query)** - Server state management
- **React Router** - Client-side routing
- **Context API** - Local state management

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/glow-insights.git
   cd glow-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
glow-insights/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── dashboard/      # Dashboard-specific components
│   │   ├── layout/         # Layout components (Sidebar, Header)
│   │   ├── theme/          # Theme provider and toggle
│   │   └── ui/             # Base UI components (shadcn/ui)
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── data/               # Mock data and API utilities
│   ├── lib/                # Utility functions
│   ├── App.tsx            # Main app component
│   └── main.tsx           # App entry point
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Key Components

### Dashboard Components
- **MetricCard** - Display key performance indicators
- **RevenueChart** - Revenue analytics visualization
- **TrafficChart** - Website traffic analysis
- **ChannelsChart** - Marketing channel performance
- **CampaignTable** - Campaign management table

### Layout Components
- **AppLayout** - Main application layout
- **AppSidebar** - Navigation sidebar with collapsible design
- **DashboardHeader** - Dashboard page header

### Theme System
- **ThemeProvider** - Theme context and management
- **ThemeToggle** - Theme switching component

### Loading States
- **Skeleton Components** - Loading placeholders for various UI elements
- **LoadingProvider** - Global loading state management

## 🎨 Theme System

The application features a sophisticated theme system with:

### Color Palette
- **Primary**: Electric Blue (#0066FF)
- **Secondary**: Sophisticated Purple (#6B46C1)
- **Success**: Electric Green (#10B981)
- **Warning**: Vibrant Orange (#F59E0B)
- **Destructive**: Red (#EF4444)

### Theme Modes
- **Dark Theme** - Default theme with dark backgrounds
- **Light Theme** - Alternative light mode
- **System Theme** - Automatically follows OS preference

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=ADmyBRAND Insights
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing and typography
- Custom animations and keyframes
- Glass morphism utilities

## 📊 Data Sources

The dashboard supports integration with:
- **Google Analytics** - Website analytics
- **Facebook Ads** - Advertising metrics
- **Shopify** - E-commerce data
- **Mailchimp** - Email marketing
- **HubSpot** - CRM data
- **Stripe** - Payment processing

## 🎯 Features in Detail

### Dashboard Analytics
- Real-time revenue tracking
- Traffic source analysis
- Campaign performance metrics
- Audience demographics
- Conversion rate optimization

### Campaign Management
- Campaign creation and editing
- Performance tracking
- A/B testing results
- Budget allocation
- ROI analysis

### Audience Insights
- Demographic breakdown
- Geographic distribution
- Behavioral patterns
- Engagement metrics
- Segmentation tools

### Data Integration
- Multiple platform connections
- Real-time data synchronization
- Error handling and retry logic
- Data validation and cleaning

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Add proper error handling
- Include loading states
- Write responsive code
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** - For the excellent UI component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set
- **React Query** - For efficient data fetching
- **Vite** - For the fast build tool

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Email: support@admybrand.com
- Documentation: [docs.admybrand.com](https://docs.admybrand.com)

---

**Built with ❤️ by the ADmyBRAND Team**
