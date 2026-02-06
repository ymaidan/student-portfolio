# 🌸 Salma Yaser Maidan - Portfolio Website

A beautiful, modern portfolio website with interactive slideshows showcasing education, volunteering activities, business ventures, and art gallery.

**Live Demo:** (Add your Vercel URL here after deployment)

## ✨ Features

- **Interactive Gallery Filters**: All, Arts, Projects, Volunteer
- **5 Slideshow Galleries**: Full-screen lightbox with swipe navigation
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful pink/purple gradients with feminine aesthetic
- **Smooth Animations**: Engaging scroll animations and transitions
- **28 Images**: Comprehensive showcase of your talents
- **Mobile Optimized**: Swipe gestures on touch devices

## 📁 Project Structure

```
student-portfolio/
├── index.html          # Main HTML file
├── style.css          # Styling
├── script.js          # JavaScript functionality
├── images/            # Image directory
│   ├── profile1.jpg   # Main profile photo
│   ├── profile2.jpg   # Additional profile photo
│   ├── sketch1.jpg    # Eye sketch
│   ├── sketch2.jpg    # Portrait sketch
│   ├── sketch3.jpg    # Profile sketch
│   ├── sketch4.jpg    # Multiple sketches
│   ├── horse-painting.jpg      # Horse painting
│   ├── cultural-painting.jpg   # Cultural scene painting
│   └── whale-painting.jpg      # Whale painting
├── vercel.json        # Vercel deployment config
├── package.json       # Project metadata
└── README.md          # This file
```

## 🖼️ Adding Your Images

You need **28 images total**. Check `FINAL-IMAGE-LIST.md` for the complete guide.

### Quick Summary:

**Profile (2):** `profile1.jpg`, `profile2.jpg`

**Arts (8):** Sketches and paintings you already have

**Projects (10):**
- Little Sweet BH slideshow (3): `littlesweet1-3.jpg`
- Sweet Creations slideshow (3): `sweet1-3.jpg`
- N00_OVA products (4): `project1-4.jpg`

**Volunteer (11):**
- Nursing Home slideshow (3): `nursing1-3.jpg`
- UoB Media Club slideshow (2): `uob1-2.jpg`
- Asian Youth Games slideshow (4): `ayg1-4.jpg`
- Other activities (2): `volunteer1-2.jpg`

See `images/IMAGE-INSTRUCTIONS.txt` for detailed list.

## 🚀 Deployment to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the website**:
   ```bash
   vercel
   ```
   
4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository or drag & drop the project folder
4. Vercel will automatically detect the settings
5. Click "Deploy"

Your website will be live at: `https://your-project-name.vercel.app`

### Updating Your Portfolio:
Whenever you make changes, just run:
```bash
vercel --prod
```

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #c44569;
    --accent-color: #ffc8dd;
    /* ... more colors */
}
```

### Content
Edit the text directly in `index.html`

### Fonts
Current fonts used:
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

## 📱 Social Links

- Little Sweet BH: [@little_sweet_bh](https://www.instagram.com/little_sweet_bh/)
- N00_OVA Art: [@n00_ova](https://www.instagram.com/n00_ova/)

## 📧 Contact

- **Email**: salmamaida921@gmail.com
- **Phone**: +973 38998550
- **Location**: Sanad, Bahrain

## 📄 License

This project is open source and available under the MIT License.

---

Made with 💖 for university applications
