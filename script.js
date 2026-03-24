/* ========================================
   GYM WEBSITE - JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // PRELOADER
    // ========================================
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 2000); // Preloader visible for 2 seconds
    });
    
    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.querySelector('.navbar');
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        // Navbar background on scroll
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll to top button visibility
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // ========================================
    // SMOOTH SCROLLING FOR NAV LINKS
    // ========================================
    const navLinks = document.querySelectorAll('.nav-links a, .nav-cta a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('active');
            }
        });
    });
    
    // ========================================
    // MOBILE HAMBURGER MENU
    // ========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinksContainer.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
        }
    });
    
    // ========================================
    // ACTIVE NAV LINK BASED ON SCROLL POSITION
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ========================================
    // SCROLL REVEAL ANIMATIONS (Intersection Observer)
    // ========================================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .scale-reveal, .text-reveal, .fade-in-up, .zoom-in, .slide-in-left, .slide-in-right, .rotate-in');
    
    // Set initial state for animation elements
    revealElements.forEach(element => {
        element.setAttribute('data-animate', 'true');
    });
    
    // Use Intersection Observer for scroll-triggered animations
    const revealObserverOptions = {
        root: null,
        rootMargin: '-100px 0px -100px 0px', // Trigger when element is 100px from top/bottom
        threshold: 0.1 // Trigger when 10% of element is visible
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element entered viewport - add active class
                entry.target.classList.add('active');
                entry.target.removeAttribute('data-animate');
            } else {
                // Element left viewport - remove active class so it can replay
                entry.target.classList.remove('active');
                entry.target.setAttribute('data-animate', 'true');
            }
        });
    }, revealObserverOptions);
    
    // Observe all reveal elements
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // ========================================
    // HERO STATS COUNTER ANIMATION
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    const animateStats = () => {
        const heroSection = document.querySelector('.hero');
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        
        if (window.scrollY >= heroSection.offsetTop && !statsAnimated) {
            statsAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const increment = target / 50;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        stat.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 30);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                updateCounter();
            });
        }
    };
    
    window.addEventListener('scroll', animateStats);
    
    // ========================================
    // TESTIMONIALS SLIDER
    // ========================================
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    const totalSlides = testimonialCards.length;
    
    // Create dots
    testimonialCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateSlider() {
        testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play slider every 5 seconds
    setInterval(nextSlide, 5000);
    
    // ========================================
    // TOUCH SWIPE SUPPORT FOR TESTIMONIALS
    // ========================================
    let touchStartX = 0;
    let touchEndX = 0;
    
    testimonialTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    testimonialTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchStartX - touchEndX > swipeThreshold) {
            nextSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            prevSlide();
        }
    }
    
    // ========================================
    // CONTACT FORM VALIDATION
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.querySelector('.form-success');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        // Validate Name
        const nameError = document.querySelector('#name + .error-message');
        if (name === '') {
            showError('name', 'Name is required', nameError);
            isValid = false;
        } else if (name.length < 2) {
            showError('name', 'Name must be at least 2 characters', nameError);
            isValid = false;
        } else {
            clearError('name', nameError);
        }
        
        // Validate Email
        const emailError = document.querySelector('#email + .error-message');
        if (email === '') {
            showError('email', 'Email is required', emailError);
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email', emailError);
            isValid = false;
        } else {
            clearError('email', emailError);
        }
        
        // Validate Subject
        const subjectError = document.querySelector('#subject + .error-message');
        if (subject === '') {
            showError('subject', 'Please select a subject', subjectError);
            isValid = false;
        } else {
            clearError('subject', subjectError);
        }
        
        // Validate Message
        const messageError = document.querySelector('#message + .error-message');
        if (message === '') {
            showError('message', 'Message is required', messageError);
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters', messageError);
            isValid = false;
        } else {
            clearError('message', messageError);
        }
        
        // If form is valid, show success message
        if (isValid) {
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
                formSuccess.classList.add('show');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            }, 2000);
        }
    });
    
    function showError(inputId, errorMessage, errorElement) {
        const input = document.getElementById(inputId);
        input.classList.add('error');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('show');
    }
    
    function clearError(inputId, errorElement) {
        const input = document.getElementById(inputId);
        input.classList.remove('error');
        errorElement.classList.remove('show');
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Real-time validation on input
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const errorElement = this.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-message')) {
                if (this.value.trim() !== '') {
                    clearError(this.id, errorElement);
                }
            }
        });
    });
    
    // ========================================
    // SMOOTH SCROLL REVEAL WITH STAGGER
    // ========================================
    const serviceCards = document.querySelectorAll('.service-card');
    const trainerCards = document.querySelectorAll('.trainer-card');
    const planCards = document.querySelectorAll('.plan-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add reveal classes and stagger delays dynamically
    serviceCards.forEach((card, index) => {
        card.classList.add('reveal');
        if (index < 6) { // Only first 6 items
            card.style.transitionDelay = `${(index % 3) * 0.15}s`;
        }
    });
    
    trainerCards.forEach((card, index) => {
        card.classList.add('reveal');
        if (index < 4) { // Only first 4 items
            card.style.transitionDelay = `${index * 0.15}s`;
        }
    });
    
    planCards.forEach((card, index) => {
        card.classList.add('reveal');
        if (index < 3) { // Only first 3 items
            card.style.transitionDelay = `${index * 0.15}s`;
        }
    });
    
    galleryItems.forEach((item, index) => {
        item.classList.add('scale-reveal');
        if (index < 6) { // Only first 6 items
            item.style.transitionDelay = `${(index % 3) * 0.1}s`;
        }
    });
    
    // ========================================
    // PARALLAX EFFECT FOR HERO SECTION
    // ========================================
    const heroOverlay = document.querySelector('.hero-overlay');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        if (scrolled < window.innerHeight) {
            heroOverlay.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // ========================================
    // MAGNIFIC POPUP FOR GALLERY (Simple Lightbox)
    // ========================================
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    galleryImages.forEach(img => {
        img.parentElement.addEventListener('click', () => {
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'gallery-modal';
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                cursor: pointer;
                animation: fadeIn 0.3s ease;
            `;
            
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 10px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
            `;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            // Close modal on click
            modal.addEventListener('click', () => {
                modal.style.animation = 'fadeOut 0.3s ease forwards';
                setTimeout(() => {
                    modal.remove();
                }, 300);
            });
        });
    });
    
    // ========================================
    // HOVER EFFECT FOR SERVICE CARDS (3D Tilt)
    // ========================================
    const cards = document.querySelectorAll('.service-card, .plan-card, .trainer-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ========================================
    // NEWSLETTER FORM SUBMISSION
    // ========================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                const button = newsletterForm.querySelector('button');
                const originalHTML = button.innerHTML;
                
                button.innerHTML = '<i class="fas fa-check"></i>';
                emailInput.value = '';
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                }, 2000);
            }
        });
    }
    
    // ========================================
    // TYPING EFFECT FOR HERO TITLE (Optional Enhancement)
    // ========================================
    const heroTitleLines = document.querySelectorAll('.hero-title .line');
    
    // You can add a typing effect here if desired
    // Currently using CSS fade-in animations
    
    // ========================================
    // BMI CALCULATOR FUNCTIONALITY
    // ========================================
    const calculateBtn = document.getElementById('calculateBtn');
    const bmiResult = document.getElementById('bmiResult');
    const bmiValue = document.getElementById('bmiValue');
    const bmiStatus = document.getElementById('bmiStatus');
    const bmiMessage = document.getElementById('bmiMessage');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateBMI);
    }
    
    function calculateBMI() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        
        // Validate inputs
        if (!weight || !height || !age) {
            alert('Please fill in all fields with valid values.');
            return;
        }
        
        if (weight < 1 || weight > 300) {
            alert('Please enter a valid weight between 1 and 300 kg.');
            return;
        }
        
        if (height < 50 || height > 250) {
            alert('Please enter a valid height between 50 and 250 cm.');
            return;
        }
        
        // Calculate BMI: weight (kg) / (height (m))^2
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        
        // Determine status and message
        let status, message, color;
        
        if (bmi < 18.5) {
            status = 'Underweight';
            message = `You're below the ideal weight range. Consider consulting a nutritionist to develop a healthy eating plan that includes nutrient-dense foods.`;
            color = '#3498db';
        } else if (bmi >= 18.5 && bmi < 25) {
            status = 'Normal Weight';
            message = `Great job! You're in the healthy weight range. Maintain your current lifestyle with regular exercise and balanced nutrition.`;
            color = '#2ecc71';
        } else if (bmi >= 25 && bmi < 30) {
            status = 'Overweight';
            message = `You're slightly above the ideal weight. Consider increasing physical activity and adopting a balanced diet to reach a healthier weight.`;
            color = '#f39c12';
        } else {
            status = 'Obese';
            message = `Your BMI indicates obesity. We recommend consulting healthcare professionals for a personalized weight management program.`;
            color = '#e74c3c';
        }
        
        // Display results with animation
        bmiValue.textContent = bmi;
        bmiStatus.textContent = status;
        bmiMessage.textContent = message;
        bmiStatus.style.color = color;
        
        // Show result box with animation
        bmiResult.classList.add('show');
        
        // Scroll to result
        setTimeout(() => {
            bmiResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }
    
    // ========================================
    // PERFORMANCE OPTIMIZATION
    // ========================================
    
    // Debounce function for scroll events (used elsewhere if needed)
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ========================================
    // LAZY LOADING FOR IMAGES
    // ========================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        // Observe all images that should be lazy loaded
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    console.log('Iron Forge Gym - Website Loaded Successfully! 💪');
});

// ========================================
// ADDITIONAL UTILITY FUNCTIONS
// ========================================

// Smooth scroll for external links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add loading class to images when they load
document.querySelectorAll('img').forEach(img => {
    if (img.complete) {
        img.classList.add('loaded');
    } else {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    }
});

// Handle keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
        
        // Close gallery modal if open
        const modal = document.querySelector('.gallery-modal');
        if (modal) {
            modal.click();
        }
    }
});
