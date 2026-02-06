// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(255, 107, 157, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(255, 107, 157, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.skill-card, .education-card, .activity-card, .business-card, .gallery-item, .contact-card'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Gallery Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            // Hide all items first
            item.classList.add('hide');
            
            // Show items based on filter
            setTimeout(() => {
                if (filterValue === 'all') {
                    item.classList.remove('hide');
                } else if (item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                }
            }, 100);
        });
    });
});

// Lightbox Gallery System
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxCounter = document.querySelector('.lightbox-counter');

// Image galleries data
const galleries = {
    // Volunteer Galleries
    nursing: [
        { src: 'images/nursing1.jpg', caption: 'Nursing Home Activities - Photo 1' },
        { src: 'images/nursing2.jpg', caption: 'Nursing Home Activities - Photo 2' },
        { src: 'images/nursing3.jpg', caption: 'Nursing Home Activities - Photo 3' }
    ],
    uob: [
        { src: 'images/uob1.jpg', caption: 'UoB Media Club Visit - Photo 1' },
        { src: 'images/uob2.jpg', caption: 'UoB Media Club Visit - Photo 2' }
    ],
    ayg: [
        { src: 'images/ayg1.jpg', caption: 'Asian Youth Games - Photo 1' },
        { src: 'images/ayg2.jpg', caption: 'Asian Youth Games - Photo 2' },
        { src: 'images/ayg3.jpg', caption: 'Asian Youth Games - Photo 3' },
        { src: 'images/ayg4.jpg', caption: 'Asian Youth Games - Photo 4' }
    ],
    // Business Project Galleries
    littlesweet: [
        { src: 'images/littlesweet1.jpg', caption: 'Little Sweet BH - Product 1' },
        { src: 'images/littlesweet2.jpg', caption: 'Little Sweet BH - Product 2' },
        { src: 'images/littlesweet3.jpg', caption: 'Little Sweet BH - Product 3' }
    ],
    sweetcreations: [
        { src: 'images/sweet1.jpg', caption: 'Sweet Creations - Photo 1' },
        { src: 'images/sweet2.jpg', caption: 'Sweet Creations - Photo 2' },
        { src: 'images/sweet3.jpg', caption: 'Sweet Creations - Photo 3' }
    ]
};

let currentGallery = null;
let currentIndex = 0;

// Open lightbox
galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const galleryName = item.getAttribute('data-gallery');
        
        if (galleryName && galleries[galleryName]) {
            currentGallery = galleries[galleryName];
            currentIndex = parseInt(item.getAttribute('data-index')) || 0;
            openLightbox();
        }
    });
});

function openLightbox() {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    showImage();
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

function showImage() {
    if (!currentGallery) return;
    
    const image = currentGallery[currentIndex];
    lightboxImg.src = image.src;
    lightboxImg.alt = image.caption;
    lightboxCaption.textContent = image.caption;
    lightboxCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
}

function nextImage() {
    if (!currentGallery) return;
    currentIndex = (currentIndex + 1) % currentGallery.length;
    showImage();
}

function prevImage() {
    if (!currentGallery) return;
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    showImage();
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            nextImage();
        } else {
            // Swipe right - previous image
            prevImage();
        }
    }
}
