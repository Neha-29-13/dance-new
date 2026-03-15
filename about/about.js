 
     
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
 

        const introObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.main-img-box').style.transform = "translateX(0)";
            entry.target.querySelector('.secondary-img-box').style.transform = "translateY(0)";
            entry.target.querySelector('.main-img-box').style.opacity = "1";
            entry.target.querySelector('.secondary-img-box').style.opacity = "1";
        }
    });
}, { threshold: 0.3 });

const target = document.querySelector('.image-stack');
if (target) {
    target.querySelector('.main-img-box').style.transform = "translateX(-50px)";
    target.querySelector('.secondary-img-box').style.transform = "translateY(50px)";
    target.querySelector('.main-img-box').style.opacity = "0";
    target.querySelector('.secondary-img-box').style.opacity = "0";
    target.querySelector('.main-img-box').style.transition = "all 1s ease";
    target.querySelector('.secondary-img-box').style.transition = "all 1s ease 0.3s";
    introObserver.observe(target);
}


const whoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            entry.target.querySelector('.who-image-box').style.transform = "translateX(0)";
            entry.target.querySelector('.who-image-box').style.opacity = "1";
            
            entry.target.querySelector('.who-content').style.transform = "translateX(0)";
            entry.target.querySelector('.who-content').style.opacity = "1";
        }
    });
}, { threshold: 0.3 });

const whoSection = document.querySelector('.who-we-are-container');
if (whoSection) {
    const img = whoSection.querySelector('.who-image-box');
    const content = whoSection.querySelector('.who-content');
    
   
    img.style.opacity = "0";
    img.style.transform = "translateX(-50px)";
    img.style.transition = "all 0.8s ease-out";
    
    content.style.opacity = "0";
    content.style.transform = "translateX(50px)";
    content.style.transition = "all 0.8s ease-out 0.2s";
    
    whoObserver.observe(whoSection);
}


document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.decorative-card');
    

    let angle = 0;
    function float() {
        angle += 0.02;
        const yOffset = Math.sin(angle) * 10;
        if (card) {
            card.style.transform = `translateY(${yOffset}px)`;
        }
        requestAnimationFrame(float);
    }
    float();
});


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.team-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            
            cards.forEach(c => c.classList.remove('expanded'));
        });
    });
});