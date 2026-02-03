# 🚀 Quick Deployment Guide to Vercel

Follow these simple steps to get your portfolio live on the internet!

## Step 1: Prepare Your Images

1. Open the `images` folder
2. Add your 9 images with the exact names listed in `IMAGE-INSTRUCTIONS.txt`
3. Make sure all images are in JPG format

## Step 2: Install Vercel CLI

Open your terminal (Git Bash) and run:

```bash
npm install -g vercel
```

## Step 3: Deploy Your Website

### First Time Deployment:

1. **Login to Vercel**:
   ```bash
   vercel login
   ```
   This will open a browser window to authenticate

2. **Deploy**:
   ```bash
   vercel
   ```
   
   Answer the prompts:
   - Set up and deploy? **Y**
   - Which scope? **Select your account**
   - Link to existing project? **N**
   - What's your project's name? **salma-portfolio** (or choose your own)
   - In which directory is your code located? **./** (just press Enter)
   
3. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Your Website is Live! 🎉

After deployment, Vercel will give you a URL like:
`https://salma-portfolio.vercel.app`

## Step 4: Share Your Portfolio

Copy the URL and use it in your university applications!

## Alternative Method: Using Vercel Dashboard

If you prefer a visual interface:

1. Go to [vercel.com](https://vercel.com)
2. Sign up or login with GitHub/Google/Email
3. Click "Add New Project"
4. Click "Browse" and select your `student-portfolio` folder
5. Click "Deploy"

That's it! Your portfolio will be live in about 30 seconds.

## Updating Your Portfolio

Whenever you make changes:

```bash
vercel --prod
```

This will update your live website with the new changes.

## Need Help?

- Vercel Documentation: https://vercel.com/docs
- Contact: The deployment is free for personal projects
- Your URL will look like: `your-name.vercel.app`

## Custom Domain (Optional)

Want a custom domain like `salmamaidan.com`?

1. Buy a domain from Namecheap, GoDaddy, or similar
2. Go to your Vercel project settings
3. Add your custom domain
4. Follow the DNS setup instructions

---

Good luck with your university application! 🌟
