// --- LOGIKA LOADING ---
function startLoader() {
    const percentage = document.getElementById('load-percentage');
    const fill = document.getElementById('load-fill');
    const wrapper = document.getElementById('loader-wrapper');
    let count = 0;
    
    const interval = setInterval(() => {
        count++;
        percentage.innerText = count + "%";
        fill.style.width = count + "%";
        
        if(count >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                wrapper.classList.add('loader-hidden');
            }, 500);
        }
    }, 20); // Kecepatan loading (ms)
}
window.addEventListener('DOMContentLoaded', startLoader);

// Logika Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    let theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    themeToggle.classList.replace(theme === 'dark' ? 'fa-moon' : 'fa-sun', theme === 'dark' ? 'fa-sun' : 'fa-moon');
    localStorage.setItem('theme', theme);
});

// Logika Back to Top
const backTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) { backTop.classList.add('show'); }
    else { backTop.classList.remove('show'); }
});

// Logika Scroll Spy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Logika Animasi Reveal (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));