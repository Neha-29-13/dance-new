 
     
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
 
const blogObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
            blogObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const blogContent = document.querySelector('.blog-content');
if (blogContent) {
    blogContent.style.opacity = "0";
    blogContent.style.transform = "translateX(-30px)";
    blogContent.style.transition = "all 0.8s ease-out";
    blogObserver.observe(blogContent);
}

       

const postsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 100);
            postsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.post-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    postsObserver.observe(card);
});


document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const icon = header.querySelector('i');
        
      
        item.classList.toggle('active');
        
        if (item.classList.contains('active')) {
            icon.classList.replace('fa-plus', 'fa-minus');
        } else {
            icon.classList.replace('fa-minus', 'fa-plus');
        }
        
       
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('i').classList.replace('fa-minus', 'fa-plus');
            }
        });
    });
});


const sidebarObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateX(0)";
            }, index * 200);
            sidebarObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.sidebar-card, .sidebar-cta-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateX(20px)";
    card.style.transition = "all 0.6s ease-out";
    sidebarObserver.observe(card);
});
