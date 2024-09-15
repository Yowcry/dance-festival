document.addEventListener('DOMContentLoaded', () => {
    // Apply animation to the content-section and the image on page load
    const content = document.querySelector('.content-section');
    const image = document.querySelector('.full-width-image img');
    
    // Apply the same transition for both the content-section and the image (0.75s)
    content.style.transition = "opacity 0.75s ease, transform 0.75s ease";
    content.style.opacity = 0;
    content.style.transform = "rotateX(-10deg)";
    
    image.style.transition = "opacity 0.75s ease, transform 0.75s ease";
    image.style.opacity = 0;
    image.style.transform = "rotateX(-10deg)";
    
    // Trigger the animation after a small delay
    setTimeout(() => {
        content.style.opacity = 1;
        content.style.transform = "rotateX(0)";
        
        image.style.opacity = 1;
        image.style.transform = "rotateX(0)";
    }, 100); // Delay to ensure the transition takes place
});

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // If the link is an internal link (starts with '#'), skip the transition
        if (href.startsWith('#')) {
            return;
        }

        e.preventDefault(); // Prevent default anchor behavior for external links

        // Apply the transition to both the content-section and the image (0.75s)
        const content = document.querySelector('.content-section');
        const image = document.querySelector('.full-width-image img');
        
        content.style.transition = "opacity 0.75s ease, transform 0.75s ease";
        content.style.opacity = 0;
        content.style.transform = "rotateX(-10deg)";
        
        image.style.transition = "opacity 0.75s ease, transform 0.75s ease";
        image.style.opacity = 0;
        image.style.transform = "rotateX(-10deg)";

        // After the transition ends, navigate to the clicked link
        setTimeout(() => {
            window.location.href = this.href;
        }, 750); // Wait for the transition to complete (0.75 seconds)
    });
});
