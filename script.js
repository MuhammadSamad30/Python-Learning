const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {  // Check if hamburger exists before adding listener
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for code
    const codeElement = document.querySelector('.typing-code');
    const codeText = codeElement.innerText;
    codeElement.innerText = '';
    
    let i = 0;
    function typeCode() {
        if (i < codeText.length) {
            codeElement.innerText += codeText.charAt(i);
            i++;
            setTimeout(typeCode, 50);
        }
    }
    
    // Start typing animation
    typeCode();
    
    // Add hover effect to feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = '#3a3a3a';
        });
        
        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = '#2d2d2d';
        });
    });
}); 