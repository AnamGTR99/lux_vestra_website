document.addEventListener('DOMContentLoaded', () => {
    
    // Accordion Logic
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const parent = header.parentElement;

            // Toggle active class on parent for chevron rotation
            parent.classList.toggle('active');

            if (content.style.maxHeight) {
                // Collapse
                content.style.maxHeight = null;
            } else {
                // Expand
                content.style.maxHeight = content.scrollHeight + "px";
            }

            // Optional: Close other accordions
            headers.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.parentElement.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = null;
                }
            });
        });
    });

    // Modal Logic
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('openModalBtn');
    const span = document.querySelector('.close-btn');

    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default if it's inside a form or link
            modal.style.display = 'flex';
        });
    }

    if (span) {
        span.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close on outside click
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
