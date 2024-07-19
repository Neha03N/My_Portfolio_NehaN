// ==== typing Animation ======
var typed = new Typed(".typing", {
    strings: ["","Web Designer", "web Developer", "Graphic Designer", "Data Analyst"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});
