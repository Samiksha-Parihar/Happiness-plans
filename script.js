// Basic mobile nav toggle if needed
const nav = document.querySelector('nav ul');
document.querySelector('.logo').addEventListener('click', () => nav.classList.toggle('active'));

// Optional: phone-autofocus, form alert
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Message received.');
});
