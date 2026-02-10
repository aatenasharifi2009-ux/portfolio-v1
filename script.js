// مقداردهی اولیه انیمیشن‌های ظهور
AOS.init({
    duration: 1000,
    once: true
});

// افکت کلیک روی منو
const navItems = document.querySelectorAll('nav ul li');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// می‌تونی برای تغییر تم یا اسکرول نرم هم کد اضافه کنی