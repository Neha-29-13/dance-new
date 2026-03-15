 
     
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
 
       
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
        }
 
document.querySelector('.subscribe-btn')?.addEventListener('click', function() {
    const input = this.previousElementSibling;
    if(input.value.includes('@')) {
        this.innerText = "SUCCESS!";
        input.value = "";
        setTimeout(() => this.innerText = "SUBSCRIBE NOW", 3000);
    }
});



      window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero-title');
    const desc = document.querySelector('.hero-description');
    
    // Initial state
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    desc.style.opacity = '0';
    
    // Animate in
    setTimeout(() => {
        title.style.transition = 'all 1s ease-out';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        desc.style.transition = 'opacity 1s ease-out';
        desc.style.opacity = '0.9';
    }, 800);
});

const studioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          
            const info = entry.target.querySelector('.studio-info');
            info.style.opacity = '1';
            info.style.transform = 'translateX(0)';
            
            
            const visual = entry.target.querySelector('.studio-visual');
            visual.style.opacity = '1';
            visual.style.transform = 'scale(1)';
        }
    });
}, { threshold: 0.2 });


const wrapper = document.querySelector('.studio-wrapper');
if (wrapper) {
    const info = wrapper.querySelector('.studio-info');
    const visual = wrapper.querySelector('.studio-visual');
    
    info.style.opacity = '0';
    info.style.transform = 'translateX(-30px)';
    info.style.transition = 'all 0.8s ease-out';
    
    visual.style.opacity = '0';
    visual.style.transform = 'scale(0.95)';
    visual.style.transition = 'all 1s ease-out 0.2s';
    
    studioObserver.observe(wrapper);
}
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "scale(1)";
            }, index * 50); // Staggered effect
            galleryObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "scale(0.9)";
    item.style.transition = "all 0.5s ease-out";
    galleryObserver.observe(item);
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 150);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.f-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});





document.getElementById('mailing-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    
    btn.innerText = "THANK YOU!";
    btn.style.background = "#8e44ad";
    
    this.reset();
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = "linear-gradient(to right, #b184b9, #d0a2d8)";
    }, 3000);
});
