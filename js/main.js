/* ========================================
   VISTRA Spring Sale - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ---- Countdown Timer ----
    function initCountdown() {
        // Set end date to April 15, 2026 23:59:59 Taiwan time (UTC+8)
        const endDate = new Date('2026-04-15T23:59:59+08:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = endDate - now;

            if (distance <= 0) {
                document.getElementById('countdownDays').textContent = '0';
                document.getElementById('countdownHours').textContent = '00';
                document.getElementById('countdownMins').textContent = '00';
                document.getElementById('countdownSecs').textContent = '00';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('countdownDays').textContent = days;
            document.getElementById('countdownHours').textContent = String(hours).padStart(2, '0');
            document.getElementById('countdownMins').textContent = String(minutes).padStart(2, '0');
            document.getElementById('countdownSecs').textContent = String(seconds).padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    initCountdown();

    // ---- Header Scroll Effect ----
    const header = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ---- Mobile Navigation ----
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');
    const mobileOverlay = document.getElementById('mobileNavOverlay');

    function toggleMobileNav() {
        hamburgerBtn.classList.toggle('active');
        mainNav.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    }

    hamburgerBtn.addEventListener('click', toggleMobileNav);
    mobileOverlay.addEventListener('click', toggleMobileNav);

    // ---- Back to Top Button ----
    const backToTopBtn = document.getElementById('backToTop');

    function handleBackToTop() {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleBackToTop, { passive: true });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---- Scroll Reveal Animation ----
    function initScrollReveal() {
        const sections = document.querySelectorAll('.section, .cta-banner');
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(function (section) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    initScrollReveal();

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
