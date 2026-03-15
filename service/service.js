 
     
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        const html = document.documentElement;
 
        themeToggle.addEventListener('click', () => {
            const isLight = html.getAttribute('data-theme') === 'light';
            html.setAttribute('data-theme', isLight ? 'dark' : 'light');
            themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
            localStorage.setItem('theme', isLight ? 'dark' : 'light');
        });
 
       
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
 
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const spans = hamburger.querySelectorAll('span');
            if(navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
 
     
        document.querySelectorAll('.nav-item').forEach(item => {
            const link = item.querySelector('.nav-link');
            if (item.querySelector('.dropdown-menu')) {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth < 1024) {
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                });
            }
        });
 document.addEventListener('DOMContentLoaded', () => {
    const bookBtn = document.querySelector('.book-class-btn');
    
    // Initial state
    bookBtn.style.opacity = "0";
    bookBtn.style.transform = "scale(0.8)";
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "scale(1)";
            }
        });
    }, { threshold: 0.5 });

    observer.observe(bookBtn);
});


const advObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 100);
            advObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.adv-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.6s ease-out";
    advObserver.observe(item);
});


const galleryCards = document.querySelectorAll('.dance-card');
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 100);
            galleryObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

galleryCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    galleryObserver.observe(card);
});


const eventObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 150);
            eventObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.event-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease-out";
    eventObserver.observe(card);
});

const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.5 });

const ctaContent = document.querySelector('.cta-container');
if (ctaContent) {
    ctaContent.style.opacity = "0";
    ctaContent.style.transform = "translateY(30px)";
    ctaContent.style.transition = "all 0.8s ease-out";
    ctaObserver.observe(ctaContent);
}
