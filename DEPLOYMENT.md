# 🚀 Deployment Guide

This guide will help you deploy your landing page application to various platforms.

## 📋 Pre-Deployment Checklist

### 1. Environment Variables
Create a `.env.local` file with your actual credentials:

```bash
# Copy the example file
cp env.example .env.local
```

Then fill in your actual values:
- Firebase configuration
- Google Analytics ID
- Mixpanel token
- App URL

### 2. Firebase Setup
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Enable Storage
4. Get your configuration keys
5. Update your `.env.local` file

### 3. Analytics Setup
1. **Google Analytics 4**: Create a GA4 property and get your Measurement ID
2. **Mixpanel**: Create a project and get your project token
3. Update your `.env.local` file

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS settings
   - Update `NEXT_PUBLIC_APP_URL` in environment variables

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add all variables from `.env.local`

### Option 3: AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Base directory: `/`
   - Output directory: `.next`
3. Add environment variables

### Option 4: Railway

1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically

## 🔧 Post-Deployment

### 1. Test Your Deployment
- Visit your deployed URL
- Test all functionality:
  - Contact form
  - Theme toggle
  - Responsive design
  - Analytics tracking

### 2. Firebase Security Rules
Update your Firestore rules for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact-submissions/{document} {
      allow read, write: if true; // Adjust based on your needs
    }
  }
}
```

### 3. Performance Optimization
- Run Lighthouse audit
- Optimize images
- Enable compression
- Set up CDN if needed

## 📊 Monitoring

### 1. Analytics
- Verify Google Analytics is tracking
- Check Mixpanel events
- Monitor user behavior

### 2. Error Tracking
Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

### 3. Performance Monitoring
- Vercel Analytics (if using Vercel)
- Google PageSpeed Insights
- WebPageTest

## 🔒 Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **Firebase Rules**: Review and tighten security rules
3. **HTTPS**: Ensure your domain uses HTTPS
4. **CSP Headers**: Consider adding Content Security Policy headers

## 🚨 Troubleshooting

### Common Issues

1. **Styles not loading**
   - Check TailwindCSS configuration
   - Verify PostCSS setup
   - Clear build cache

2. **Firebase connection issues**
   - Verify environment variables
   - Check Firebase project settings
   - Review security rules

3. **Analytics not working**
   - Verify tracking IDs
   - Check browser console for errors
   - Test in incognito mode

### Getting Help

- Check the [README.md](./README.md) for detailed setup instructions
- Review Next.js documentation
- Check Firebase documentation
- Open an issue on GitHub

## 🎉 Success!

Once deployed, your landing page should be:
- ✅ Fast and responsive
- ✅ SEO optimized
- ✅ Analytics enabled
- ✅ Form submissions working
- ✅ Dark mode functional
- ✅ Mobile-friendly

Happy deploying! 🚀
