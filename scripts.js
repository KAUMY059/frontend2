// Modal functionality
const modal = document.getElementById('modal');
const contactBtn = document.querySelector('.contact-btn');
const closeBtn = document.querySelector('.close-btn');

// Open Modal on contact button click
contactBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
});

// Close the Modal when close button is clicked
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close the Modal when clicking outside of it
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
