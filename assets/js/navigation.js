// Navigation highlighting based on scroll position
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.nav-pills .nav-link');
    
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
});
