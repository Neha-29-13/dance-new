 
     
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
 

        window.addEventListener('scroll', () => {
    const joinSection = document.querySelector('.join-world-section');
    if (joinSection) {
        let offset = window.pageYOffset;
        
        joinSection.style.backgroundPositionY = (offset * 0.1) + "px";
    }
});


const joinObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
            joinObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const joinContent = document.querySelector('.join-content');
if (joinContent) {
    joinContent.style.opacity = "0";
    joinContent.style.transform = "translateX(-30px)";
    joinContent.style.transition = "all 0.8s ease-out";
    joinObserver.observe(joinContent);
}


const classObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const content = entry.target.querySelector('.card-float-content');
            content.style.opacity = "1";
            content.style.transform = "translateY(-50%) translateX(0)";
            classObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.floating-card').forEach(card => {
    const content = card.querySelector('.card-float-content');
   
    content.style.opacity = "0";
    content.style.transform = "translateY(-50%) translateX(20px)";
    content.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    classObserver.observe(card);
});


document.querySelectorAll('.step-tab').forEach(tab => {
    tab.addEventListener('click', function() {
       
        document.querySelectorAll('.step-tab').forEach(t => t.classList.remove('active'));
     
        this.classList.add('active');
        
     
        const desc = document.querySelector('.technic-description');
        desc.style.opacity = "0";
        setTimeout(() => {
            desc.style.opacity = "1";
        }, 300);
    });
});


const regObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
            regObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const regContent = document.querySelector('.registration-content');
if (regContent) {
    regContent.style.opacity = "0";
    regContent.style.transform = "translateX(40px)";
    regContent.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    regObserver.observe(regContent);
}
