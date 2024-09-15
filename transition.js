document.addEventListener('DOMContentLoaded', () => {
    // Apply animation on page load
    const content = document.querySelector('.content-section');
    content.style.transition = "opacity 1s ease, transform 1s ease";
    content.style.opacity = 0; // Start from opacity 0
    content.style.transform = "rotateX(-10deg)"; // Start from the rotated state

    // Trigger the animation to bring the content into view
    setTimeout(() => {
        content.style.opacity = 1;
        content.style.transform = "rotateX(0)";
    }, 100); // Delay to ensure transition takes place
});

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // If the link is an internal link (starts with '#'), skip the transition
        if (href.startsWith('#')) {
            return;
        }

        e.preventDefault(); // Prevent default anchor behavior for external links

        // Apply the opacity and transform transition to the .content-section
        const content = document.querySelector('.content-section');
        content.style.transition = "opacity 1s ease, transform 1s ease";
        content.style.opacity = 0;
        content.style.transform = "rotateX(-10deg)"; // Apply the same rotate

        // After the transition ends, navigate to the clicked link
        setTimeout(() => {
            window.location.href = this.href;
        }, 1000); // Wait for the transition to complete (1 second)
    });
});
