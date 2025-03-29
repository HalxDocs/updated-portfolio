document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // CV Popup Functionality
    const cvButtons = document.querySelectorAll('#cv-btn, #cv-btn2, #cv-btn3');
    const cvPopup = document.getElementById('cv-popup');
    const closeCV = document.getElementById('close-cv');
    
    cvButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            cvPopup.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeCV.addEventListener('click', function() {
        cvPopup.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
    
    // Close popup when clicking outside
    cvPopup.addEventListener('click', function(e) {
        if (e.target === cvPopup) {
            cvPopup.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Changing text in hero section
    const titles = ['Frontend Developer', 'Web Designer', 'UI/UX Developer', 'Full Stack Developer'];
    let currentIndex = 0;
    const changingTitle = document.querySelector('.changing-title');
    
    function changeTitle() {
        currentIndex = (currentIndex + 1) % titles.length;
        changingTitle.style.opacity = '0';
        changingTitle.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            changingTitle.textContent = titles[currentIndex];
            changingTitle.style.opacity = '1';
            changingTitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    setInterval(changeTitle, 3000);
    
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll reveal animation
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Add reveal class to elements
    document.querySelectorAll('.service-card, .skill-item, .project-card, .about-image, .about-text').forEach(el => {
        el.classList.add('reveal');
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});