window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
    document.body.style.overflow = ''; 
});

document.addEventListener('DOMContentLoaded', () => {
    
    document.body.style.overflow = 'hidden';

   
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => {
                btn.classList.remove('active-tab');
            });
            button.classList.add('active-tab');

            tabPanels.forEach(panel => {
                panel.classList.add('hidden', 'opacity-0');
            });

            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.remove('hidden');
                setTimeout(() => {
                    targetPanel.classList.remove('opacity-0');
                }, 50);
            }
        });
    });

   
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const answer = toggle.nextElementSibling;
            const icon = toggle.querySelector('.faq-icon');
            const isOpening = answer.classList.contains('max-h-0');

            faqToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    otherToggle.nextElementSibling.classList.add('max-h-0');
                    otherToggle.nextElementSibling.classList.remove('max-h-[500px]', 'pb-6');
                    otherToggle.querySelector('.faq-icon').classList.remove('rotate-45');
                }
            });

            if (isOpening) {
                answer.classList.remove('max-h-0');
                answer.classList.add('max-h-[500px]', 'pb-6'); 
                icon.classList.add('rotate-45');
            } else {
                answer.classList.add('max-h-0');
                answer.classList.remove('max-h-[500px]', 'pb-6');
                icon.classList.remove('rotate-45');
            }
        });
    });

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(el => observer.observe(el));

   
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        mobileMenu.classList.toggle('hidden');
        
        if (mobileMenu.classList.contains('hidden')) {
            menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
        } else {
            menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`;
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
        });
    });

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
            }
        }
    });
});