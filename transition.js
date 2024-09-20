document.addEventListener('DOMContentLoaded', () => {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Redirect from specific pages to new paths without .html
    if (currentPath === "/index.html") {
        window.history.replaceState({}, '', '/home');
    } else if (currentPath === "/staff.html") {
        window.history.replaceState({}, '', '/staff');
    } else if (currentPath === "/hotels.html") {
        window.history.replaceState({}, '', '/hotel');
    }

    // Animation for content and image
    const content = document.querySelector('.content-section');
    const image = document.querySelector('.full-width-image img');

    if (content) {
        content.style.transition = "opacity 0.75s ease, transform 0.75s ease";
        content.style.opacity = 0;
        content.style.transform = "rotateX(-10deg)";
        
        setTimeout(() => {
            content.style.opacity = 1;
            content.style.transform = "rotateX(0)";
        }, 100);
    }

    if (image) {
        image.style.transition = "opacity 0.75s ease, transform 0.75s ease";
        image.style.opacity = 0;
        image.style.transform = "rotateX(-10deg)";
        
        setTimeout(() => {
            image.style.opacity = 1;
            image.style.transform = "rotateX(0)";
        }, 100);
    }

    // Handle navigation link click animations
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Check if it's an internal link (hash link)
            if (href.startsWith('#')) {
                return;
            }

            e.preventDefault();

            if (content) {
                content.style.transition = "opacity 0.75s ease, transform 0.75s ease";
                content.style.opacity = 0;
                content.style.transform = "rotateX(-10deg)";
            }

            if (image) {
                image.style.transition = "opacity 0.75s ease, transform 0.75s ease";
                image.style.opacity = 0;
                image.style.transform = "rotateX(-10deg)";
            }

            setTimeout(() => {
                window.location.href = href;
            }, 750);
        });
    });
});
