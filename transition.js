<script>
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            document.body.style.transition = "opacity 0.5s ease"; // Set the transition
            document.body.style.opacity = 0; // Fade out the content

            // After the transition ends, navigate to the clicked link
            setTimeout(() => {
                window.location.href = this.href;
            }, 500); // Wait for the transition to complete
        });
    });
</script>