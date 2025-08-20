const form = document.getElementById('form');

function validate() {
    const numA = Number(document.getElementById('numA').value)
    const numB = Number(document.getElementById('numB').value)
    let result = document.getElementById('result')

    if (numA > numB) {
        const errorMessage = `❌ O número <b>${numB}</b> NÃO é maior que o número <b>${numA}</b>`;
        result.innerHTML = errorMessage;
        result.style.textAlign = 'center';
        result.style.fontSize = '25px'
        result.style.color = 'rgb(159, 38, 38)'
        result.style.marginTop = '40px'
        result.style.backgroundColor = 'rgb(231, 201, 201)'
        result.style.borderRadius = '25px'
        result.style.display = 'block'
    } else {
        const successMessage = `✅ O número <b>${numB}</b> é maior que o número <b>${numA}</b>`;
        result.innerHTML = successMessage;
        result.style.textAlign = 'center';
        result.style.fontSize = '25px'
        result.style.color = 'rgb(53, 123, 39)'
        result.style.marginTop = '40px'
        result.style.backgroundColor = 'rgb(199, 226, 199)'
        result.style.borderRadius = '25px'
        result.style.display = 'block'
    }
    document.getElementById('numA').value = '';
    document.getElementById('numB').value = '';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validate();
})