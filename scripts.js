document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); // Empêche le zoom avec Ctrl + molette
    }
}, { passive: false });