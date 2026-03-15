 
     
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
 

        const priceCards = document.querySelectorAll('.price-card');

const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

priceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    priceObserver.observe(card);
});


document.querySelectorAll('.pay-btn, .pill-btn-alt').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.querySelector('i').style.transform = 'translateX(5px)';
        btn.querySelector('i').style.transition = '0.3s';
    });
    btn.addEventListener('mouseleave', () => {
        btn.querySelector('i').style.transform = 'translateX(0)';
    });
});


const membershipObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const buttons = entry.target.querySelectorAll('button');
            buttons.forEach((btn, index) => {
                setTimeout(() => {
                    btn.style.opacity = "1";
                    btn.style.transform = "translateX(0)";
                }, index * 200);
            });
            membershipObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const membershipSection = document.querySelector('.membership-actions');
if (membershipSection) {
    const buttons = membershipSection.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.style.opacity = "0";
        btn.style.transform = "translateX(30px)";
        btn.style.transition = "all 0.6s ease-out";
    });
    membershipObserver.observe(membershipSection);
}
