// Lucide konlarını başlat
lucide.createIcons();

// Mobil Menü İşlemleri
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

// Toggle Menü
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // İkon değişimi
    const icon = navLinks.classList.contains('active') ? 'x' : 'menu';
    mobileMenuBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
    lucide.createIcons();
});

// Scroll Efekti - Navbar Arkaplanı
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Mobil menü açıkken bir linke tıklanırsa menüyü kapat
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = `<i data-lucide="menu"></i>`;
            lucide.createIcons();
        }
    });
});

// CSS için mobil menü stillerini JS ile dinamik ekleyelim
// (Not: Normalde CSS dosyasında olmalı ama hızlı entegrasyon için burada da kontrol edilebilir)
// Ancak biz temiz bir yapı için CSS dosyasındaki .nav-links'in media query altında display durumunu yönetmeliyiz.
// Aşağıdaki kod sadece CSS'in yetmediği durumlarda destek amaçlıdır.

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
