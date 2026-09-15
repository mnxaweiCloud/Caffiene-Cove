document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburgerBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.className = 'fa-solid fa-xmark';
                } else {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });

        // Close menu when clicking a navigation link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburgerBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fa-solid fa-bars';
                }
            });
        });
    }
});
//here under
const nameVar = document.getElementById('nameVar');
const nameInput = document.getElementById('name');

if (nameInput && nameVar) {
    nameInput.addEventListener('input', function () {
        const value = nameInput.value.trim();

        if (value === '') {
            nameVar.textContent = '';
        } else if (value.toLowerCase() === 'mohamed abdelfattah') {
            nameVar.innerHTML = ', <span class="easterEgg">Dev</span>';
        } else {
            nameVar.textContent = `, ${nameInput.value}`;
        }
    });
}