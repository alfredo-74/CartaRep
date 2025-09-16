# Overview

This is a full-stack React application for CartaRep, a design consultancy agency in London specializing in bespoke lighting project specifications. The application serves as a company portfolio website showcasing their services, projects, brand partnerships, and contact information. It features a modern, visually appealing design with neon-themed styling, animated components, and a responsive layout.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for type safety and modern component patterns
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack React Query** for server state management and API data fetching
- **Tailwind CSS** with custom CSS variables for consistent theming and responsive design
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable UI components

## Backend Architecture
- **Express.js** server with TypeScript for API endpoints and static file serving
- **In-memory storage** implementation with interface-based design allowing easy swapping to database storage
- **Middleware-based request logging** for API monitoring and debugging
- **Development/production environment** handling with conditional Vite integration

## Data Storage Solutions
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- **Neon Database** integration for serverless PostgreSQL hosting
- **Memory storage fallback** for development and testing purposes
- **User management** with basic CRUD operations defined in storage interface

## Styling and Design System
- **CSS custom properties** for consistent theming across light/dark modes
- **Neon-themed color palette** with cyan primary and magenta secondary colors
- **Custom animations** including fade-in-up effects and floating shapes
- **Responsive design** with mobile-first approach using Tailwind breakpoints
- **Glass morphism effects** for modern card components

## Build and Deployment
- **ESBuild** for production server bundling with external package handling
- **Vite build pipeline** for optimized client bundle with code splitting
- **TypeScript compilation** with strict mode and path mapping
- **Development server** with hot reload and error overlay integration

## Third-party Integrations
- **Google Fonts** integration for Inter and Orbitron typography
- **Unsplash images** for project portfolio and brand showcase
- **Radix UI** for accessible component primitives
- **Lucide React** for consistent icon library

# External Dependencies

## Core Framework Dependencies
- **React 18** - Frontend framework with hooks and concurrent features
- **Express.js** - Backend web framework for API and static serving
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Build tool and development server

## Database and ORM
- **Drizzle ORM** - Type-safe database toolkit with PostgreSQL dialect
- **@neondatabase/serverless** - Serverless PostgreSQL database driver
- **Drizzle Zod** - Schema validation integration

## UI and Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives library
- **shadcn/ui** - Pre-built component library with Tailwind integration
- **Lucide React** - Icon library
- **class-variance-authority** - Type-safe component variants

## State Management and Data Fetching
- **TanStack React Query** - Server state management and caching
- **Wouter** - Lightweight routing library

## Development Tools
- **ESBuild** - Fast JavaScript bundler for production builds
- **PostCSS** with Autoprefixer - CSS processing and vendor prefixes
- **React Hook Form** with Zod resolvers - Form handling and validation

## External Services
- **Neon Database** - Serverless PostgreSQL hosting
- **Google Fonts** - Web font delivery
- **Unsplash** - Stock photography for portfolio images