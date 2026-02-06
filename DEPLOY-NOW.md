# 🚀 Deploy Your Portfolio to Vercel - Simple Steps

## Method 1: Using Vercel Website (EASIEST - 2 Minutes!)

### Step 1: Go to Vercel
Open your browser and go to: **https://vercel.com**

### Step 2: Sign Up
Click **"Sign Up"** and choose one of these options:
- Sign up with **GitHub** (recommended)
- Sign up with **GitLab**
- Sign up with **Email**

### Step 3: Create New Project
After logging in:
1. Click the **"Add New..."** button (top right)
2. Select **"Project"**

### Step 4: Import Your Project
You have 2 options:

**Option A - Drag & Drop (Easiest):**
1. Click **"Browse"** or drag your entire `student-portfolio` folder
2. Drop it into the upload area

**Option B - From GitHub (if you pushed to GitHub):**
1. Click **"Import Git Repository"**
2. Select your `student-portfolio` repo
3. Click **"Import"**

### Step 5: Configure Project
Vercel will auto-detect settings. Just:
1. **Project Name:** Type `salma-portfolio` (or your preferred name)
2. **Framework Preset:** Leave as "Other" or "Static"
3. Click **"Deploy"**

### Step 6: Wait (30 seconds)
Vercel will build and deploy your site. You'll see:
- Building... ⏳
- Success! ✅

### Step 7: Get Your URL
Once done, you'll see:
```
🎉 Your site is live at:
https://salma-portfolio-xxx.vercel.app
```

**Copy this URL** - this is your portfolio link!

---

## Method 2: Using Command Line (For Advanced Users)

### Step 1: Install Vercel CLI
Open Git Bash or Terminal:
```bash
npm install -g vercel
```

### Step 2: Navigate to Your Project
```bash
cd /c/Users/DELL/OneDrive/Desktop/student-portfolio
```

### Step 3: Login to Vercel
```bash
vercel login
```
- This will open a browser window
- Click "Confirm" to login

### Step 4: Deploy
```bash
vercel
```

Answer the prompts:
- Set up and deploy? → **Y** (press Enter)
- Which scope? → Select your account (press Enter)
- Link to existing project? → **N** (press Enter)
- What's your project's name? → **salma-portfolio** (or press Enter for default)
- In which directory is your code located? → **./** (press Enter)

### Step 5: Deploy to Production
```bash
vercel --prod
```

Done! Your URL will appear in the terminal.

---

## 🎯 After Deployment

### Share Your Portfolio:
✅ **Copy your URL:** `https://salma-portfolio-xxx.vercel.app`

### Use it in:
- University applications
- Your CV/Resume
- Email signature
- Social media bio
- LinkedIn profile

### Test Your Portfolio:
1. Open the URL in your browser
2. Click on slideshow items (nursing home, Asian Youth Games, etc.)
3. Test swipe on mobile
4. Try all filter buttons (All, Arts, Projects, Volunteer)

---

## 🔄 Making Updates Later

If you need to change anything:

### Method 1 (Website):
1. Go to vercel.com/dashboard
2. Find your project
3. Click **"Redeploy"**
4. Upload updated files

### Method 2 (Command Line):
```bash
cd /c/Users/DELL/OneDrive/Desktop/student-portfolio
vercel --prod
```

---

## 💡 Pro Tips

### Custom Domain (Optional):
Want `salmamaidan.com` instead of `vercel.app`?
1. Buy domain from Namecheap ($10/year)
2. Go to Vercel dashboard → Settings → Domains
3. Add your domain
4. Follow DNS instructions

### Preview Before Production:
Test changes first:
```bash
vercel
```
This gives you a preview URL to test before going live.

---

## 🆘 Troubleshooting

**"npm not found"?**
- Install Node.js first from: https://nodejs.org

**Build failed?**
- Make sure all image files are in the `images` folder
- Check that filenames match exactly

**Images not showing?**
- Verify all 27 images are in `images` folder
- Check file extensions are `.jpg`

**Need help?**
- Vercel docs: https://vercel.com/docs
- Or use the website method (easier!)

---

## ✅ Quick Checklist Before Deploying

- [ ] All 27 images are in `images` folder
- [ ] Tested locally (opened index.html)
- [ ] All slideshows work
- [ ] Filter buttons work
- [ ] Mobile looks good

---

## 🎉 Ready to Go Live?

**Recommended:** Use Method 1 (Vercel Website) - It's the easiest!

**Time needed:** 2-3 minutes

**Result:** Your professional portfolio live on the internet!

---

**Good luck with your university application! 🌟**
