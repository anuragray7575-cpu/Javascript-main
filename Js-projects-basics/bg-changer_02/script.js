const inputs = document.querySelectorAll('input[name="theme"]');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        const color = input.dataset.color;
        document.body.style.backgroundColor = color;
    });
});
