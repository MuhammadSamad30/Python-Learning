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