// ── NAVIGATION ──
function nav(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.navlink').forEach(n => n.classList.remove('active'));
    const page = document.getElementById('page-' + id);
    if (page) { page.classList.add('active'); }
    const nl = document.getElementById('nl-' + id);
    if (nl) nl.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
}
function showPage(id) { nav(id); }

// ── MOBILE NAV ──
function toggleMobileNav() {
    const mn = document.getElementById('mobileNav');
    mn.style.display = (mn.style.display === 'none' || mn.style.display === '') ? 'flex' : 'none';
}

// ── CAROUSEL ──
// let currentSlide = 0;
// const totalSlides = 3;
// let autoTimer;

// function goSlide(n) {
// 	document.getElementById('slide-' + currentSlide).style.display = 'none';
// 	document.querySelectorAll('.c-dot')[currentSlide].classList.remove('active');
// 	currentSlide = n;
// 	document.getElementById('slide-' + currentSlide).style.display = 'flex';
// 	document.querySelectorAll('.c-dot')[currentSlide].classList.add('active');
// }
// function changeSlide(dir) {
// 	clearInterval(autoTimer);
// 	goSlide((currentSlide + dir + totalSlides) % totalSlides);
// 	startAuto();
// }
// function startAuto() {
// 	autoTimer = setInterval(() => { goSlide((currentSlide + 1) % totalSlides); }, 5000);
// }
// startAuto();

// ── SCHEDULE TABS ──
function switchDay(day, btn) {
    ['d1', 'd2', 'd3'].forEach(d => { const el = document.getElementById('sched-' + d); if (el) el.style.display = 'none'; });
    const target = document.getElementById('sched-' + day);
    if (target) target.style.display = 'block';
    document.querySelectorAll('#dayTabs .nav-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

async function loadComponent(id, file) {
    const element = document.getElementById(id);

    const response = await fetch(file);

    const data = await response.text();

    element.innerHTML = data;
}

window.addEventListener('DOMContentLoaded', () => {

    loadComponent('header', 'common/header.html');

    loadComponent('navbar', 'common/navbar.html');

    loadComponent('footer', 'common/footer.html');

});