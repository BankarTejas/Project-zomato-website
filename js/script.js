// Add some interactive behavior like placeholder effects or input focus
document.querySelector('input').addEventListener('focus', function () {
    this.placeholder = '';
});

document.querySelector('input').addEventListener('blur', function () {
    this.placeholder = 'Search for restaurant, cuisine or a dish';
});

// For the log in and sign-up buttons, you could add more functionality later.
