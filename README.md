# IT-Med Healthcare Management Dashboard

A comprehensive healthcare management and monitoring dashboard for the Republic of Uzbekistan's Primary Healthcare (PHC) system. This application provides real-time insights into healthcare metrics, population health statistics, and administrative data management.

## 🏥 Project Overview

IT-Med is a modern web application designed to monitor and manage healthcare system efficiency across Uzbekistan. The dashboard provides comprehensive analytics and reporting capabilities for healthcare administrators, medical professionals, and government officials.

### Key Features

- **Population Health Monitoring**: Track maternal and child mortality rates, age demographics, and gender distribution
- **Healthcare Infrastructure Analytics**: Monitor medical institutions, family clinics, and healthcare worker density
- **Service Coverage Tracking**: Analyze prenatal care, consultation rates, and healthcare service delivery
- **Human Resources Management**: Monitor medical staff distribution, training programs, and workforce analytics
- **Data Import & Management**: Bulk data import capabilities with validation and processing
- **Multi-language Support**: Available in English, Russian, and Uzbek languages
- **Real-time Analytics**: Interactive charts and visualizations for data insights

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js (v18+)
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd med-project
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

### Development

Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the project for production:
```bash
bun run build
```

Preview the production build:
```bash
bun run preview
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with SWC compiler
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling

### State Management & Data Fetching
- **React Query (TanStack Query)** - Server state management with caching
- **Axios** - HTTP client for API requests

### Routing & Navigation
- **React Router v6** - Client-side routing with nested routes

### Internationalization
- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next
- **i18next-browser-languagedetector** - Automatic language detection

### UI Components & Icons
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - Beautiful SVG icons
- **Lucide React** - Additional icon library
- **Recharts** - Composable charting library for React

### Utilities
- **js-cookie** - Cookie management
- **React Minimal Pie Chart** - Lightweight pie chart component

## 📁 Project Structure

```
src/
├── api/                 # API configuration and endpoints
├── components/          # Reusable UI components
│   ├── avatar/         # User avatar components
│   ├── barchart/       # Bar chart components
│   ├── bottomFlow/     # Bottom navigation flow
│   ├── button/         # Button components
│   ├── card/           # Card components for data display
│   ├── header/         # Header components
│   ├── i18n/           # Internationalization setup
│   ├── inputs/         # Form input components
│   ├── logo/           # Logo components
│   ├── main/           # Main layout components
│   ├── pagination/     # Pagination components
│   ├── piecharts/      # Pie chart components
│   └── sidebar/        # Navigation sidebar
├── data/               # Static data and configurations
├── hooks/              # Custom React hooks
├── modals/             # Modal dialog components
├── pages/              # Page components organized by feature
│   ├── auth/           # Authentication pages
│   └── dashboard/      # Main dashboard pages
│       ├── admin/      # Administration features
│       ├── health/     # Health monitoring
│       ├── home/       # Home dashboard
│       ├── import/     # Data import functionality
│       ├── services/   # Service coverage
│       └── staff/      # Human resources
├── types/              # TypeScript type definitions
└── assets/             # Static assets (images, icons)
```

## 🌐 Supported Languages

The application supports three languages:
- **English** (`en`) - Primary language
- **Russian** (`ru`) - Secondary language  
- **Uzbek** (`uz`) - Local language

Language files are located in `public/locales/` and automatically detected based on browser settings.

## 📊 Dashboard Sections

### 1. General Information (`/home`)
- Population demographics and statistics
- Age and gender distribution
- Medical institution overview
- Service delivery models

### 2. Health and Well-being (`/health`)
- Maternal mortality rates
- Child mortality statistics
- Population health indicators
- Health trend analysis

### 3. Service Coverage (`/service`)
- Prenatal care statistics
- Consultation rates
- Service delivery metrics
- Coverage analysis

### 4. Human Resources (`/staff`)
- Medical worker density
- Staff distribution
- Training programs
- Professional development tracking

### 5. Data Import (`/import`)
- Bulk data import functionality
- Data validation and processing
- Import history and management
- Error handling and reporting

### 6. Administration (`/admin`)
- User management
- System configuration
- Access control
- Administrative tools

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_API_BASE_URL=your_api_base_url
VITE_APP_TITLE=IT-Med Dashboard
```

### API Configuration
API endpoints and configurations are managed in `src/api/api.ts`. Update the base URL and endpoints as needed for your deployment environment.

## 🚀 Deployment

### Docker Deployment
A `Dockerfile` is included for containerized deployment:

```bash
# Build Docker image
docker build -t it-med-dashboard .

# Run container
docker run -p 3000:80 it-med-dashboard
```
