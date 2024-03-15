document.addEventListener("DOMContentLoaded", function () {
    // Initial state
    let active = "";
    const menuToggle = document.getElementById('menuToggle');
    const logo = document.getElementById('logo');

    // Scroll event for sticky header
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            document.querySelector('.header').classList.add('sticky');
        } else {
            document.querySelector('.header').classList.remove('sticky');
        }
    });

    // Menu toggle
    document.getElementById('menu-toggle').addEventListener('click', function () {
        menuToggle.classList.toggle('menu-active');
    });

    // Redirect on logo click
    logo.addEventListener('click', function () {
        window.location.href = '/';
    });

    // Example of setting active link (simplified version)
    document.querySelectorAll('.navlink').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent actual link navigation for demonstration
            // Remove active class from all links
            document.querySelectorAll('.navlink').forEach(link => {
                link.classList.remove('navlinkActive');
            });
            // Set active class to clicked link
            this.classList.add('navlinkActive');
            active = this.textContent;
        });
    });
});
