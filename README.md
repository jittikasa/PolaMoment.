# PolaMoment Privacy Policy Website

This is a simple static website for PolaMoment's privacy policy, designed to be deployed on Netlify.

## Deployment Instructions

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Deploy manually"
3. Drag and drop this entire `web-privacy` folder
4. Your site will be live at a random URL like `random-name-123.netlify.app`
5. (Optional) Change the site name in Settings → Site details → Change site name
6. Use this URL as your Privacy Policy URL in App Store Connect

### Option 2: Deploy via GitHub

1. Create a new GitHub repository
2. Upload the contents of this `web-privacy` folder
3. Go to Netlify → "Add new site" → "Import an existing project"
4. Connect your GitHub account and select the repository
5. Deploy!

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to this folder
cd web-privacy

# Deploy
netlify deploy --prod
```

## Custom Domain (Optional)

If you have a custom domain:
1. In Netlify, go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions
4. Your privacy policy will be at `yourdomain.com` or `privacy.yourdomain.com`

## Files Included

- `index.html` - Privacy policy webpage with PolaMoment branding
- `netlify.toml` - Netlify configuration with redirects and security headers
- `README.md` - This file

## After Deployment

Once deployed, copy your Netlify URL and use it in:
1. App Store Connect → App Information → Privacy Policy URL
2. TestFlight metadata

Example URL format: `https://polamoment-privacy.netlify.app`
