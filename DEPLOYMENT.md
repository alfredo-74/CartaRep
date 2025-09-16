# CartaRep Lighting Consultancy - Netlify Deployment Guide

## 🚀 Quick Start Deployment

This guide explains how to deploy the CartaRep lighting consultancy website to Netlify.

## 📁 Repository Structure

- **Frontend**: Vite + React application (deployed to Netlify)
- **Backend**: Express.js server with PostgreSQL and SendGrid (requires separate deployment)
- **Assets**: Attached lighting product images and fonts in `attached_assets/` folder

## 🔧 Prerequisites

- GitHub repository connected: https://github.com/alfredo-74/CartaRep
- Netlify account with GitHub integration
- PostgreSQL database (if deploying backend)
- SendGrid account for email functionality (if deploying backend)

## 📋 Deployment Options

### Option 1: Frontend-Only Deployment (Recommended for Netlify)

Deploy only the static frontend to Netlify and optionally host the backend elsewhere.

### Option 2: Full-Stack Deployment

Deploy frontend to Netlify and backend to a service like Heroku, Railway, or Render.

## 🎯 Step-by-Step Netlify Deployment

### 1. Connect Repository to Netlify

1. Log in to [Netlify](https://app.netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select the `CartaRep` repository
5. Configure build settings (auto-populated from netlify.toml):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Node version**: 20 (set in netlify.toml)

### 2. Configure Environment Variables

In Netlify Dashboard > Site settings > Environment variables, add:

#### For Frontend-Only Deployment:
```bash
# If backend is hosted separately
VITE_API_URL=https://your-backend-api.com

# Optional: Analytics, Maps, etc.
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

#### For Backend Integration (if applicable):
```bash
# Database connection (for serverless functions)
DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require

# Email service
SENDGRID_API_KEY=SG.your-sendgrid-api-key
```

### 3. Deploy the Site

1. Click "Deploy site" in Netlify
2. Wait for the build to complete (2-3 minutes)
3. Your site will be available at: `https://[your-site-name].netlify.app`

### 4. Custom Domain Setup (Optional)

1. Go to Domain settings in Netlify
2. Add custom domain: `www.cartarep.com` or your domain
3. Follow Netlify's DNS configuration guide
4. Enable HTTPS (automatic with Netlify)

## 🔌 Backend Deployment Options

Since Netlify only hosts static sites, deploy the backend separately:

### Option A: Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and initialize
railway login
railway init

# Deploy
railway up

# Set environment variables in Railway dashboard
DATABASE_URL=your-postgres-url
SENDGRID_API_KEY=your-sendgrid-key
```

### Option B: Heroku
```bash
# Create Heroku app
heroku create cartarep-backend

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set SENDGRID_API_KEY=your-key

# Deploy
git push heroku main
```

### Option C: Render
1. Connect GitHub repository to Render
2. Create a new Web Service
3. Set environment variables in dashboard
4. Deploy automatically on push

## 🛠️ Build Configuration

The `netlify.toml` file includes:

- **Build settings**: Node 20, production build command
- **Redirects**: SPA routing support
- **Headers**: Security headers and cache control
- **Asset optimization**: Long-term caching for fonts and images

## 📦 Important Files

| File | Purpose |
|------|---------|
| `netlify.toml` | Netlify build and deployment configuration |
| `.env.example` | Environment variable documentation |
| `.gitignore` | Excludes build outputs and sensitive files |
| `attached_assets/` | Product images and fonts (included in build) |

## 🔍 Troubleshooting

### Build Failures

1. **Missing dependencies**: Ensure all packages are in `package.json`
2. **Image import errors**: Check that all imported images exist in `attached_assets/`
3. **Environment variables**: Verify all required variables are set in Netlify

### Runtime Issues

1. **API calls failing**: Check `VITE_API_URL` is set correctly
2. **Images not loading**: Ensure `attached_assets/` is included in the build
3. **Routing issues**: Verify SPA redirects in `netlify.toml`

### Common Commands

```bash
# Test production build locally
npm run build
npm run preview

# Check build output size
du -sh dist/public

# Verify all assets are included
ls -la dist/public/assets/
```

## 📊 Performance Optimization

The deployment is optimized with:

- **Asset caching**: 1-year cache for fonts and images
- **Code splitting**: Automatic with Vite
- **Image optimization**: Compressed JPEGs for lighting products
- **Lazy loading**: React components load on demand
- **Security headers**: X-Frame-Options, CSP, etc.

## 🔐 Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **API Keys**: Use different keys for development/production
3. **Database**: Use SSL connections in production
4. **Headers**: Security headers configured in `netlify.toml`

## 📝 Maintenance

### Updating Content
1. Update images in `attached_assets/`
2. Commit changes to GitHub
3. Netlify auto-deploys on push to main branch

### Updating Dependencies
```bash
# Update packages
npm update

# Test build
npm run build

# Commit and push
git add package*.json
git commit -m "Update dependencies"
git push
```

## 🆘 Support

- **Netlify Docs**: https://docs.netlify.com
- **Build Logs**: Available in Netlify dashboard
- **Support Forum**: https://answers.netlify.com

## 📄 License

This deployment configuration is part of the CartaRep project.

---

Last updated: January 2025