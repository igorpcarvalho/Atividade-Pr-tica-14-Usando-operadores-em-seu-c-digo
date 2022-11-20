function showValues() {

    (() => {
        'use strict'
        // Aplica para todos os campos do form a validação
        const forms = document.querySelectorAll('.needs-validation')

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault();
                    let n1 = parseInt(document.querySelector("#value1").value);
                    let n2 = parseInt(document.querySelector("#value2").value);
                    let saida = document.querySelector("#saida");
                    let total = n1 + n2;
                    if (total > 10){
                        saida.innerHTML = `A soma dos valores é acima de 10.`
                    }else{
                        saida.innerHTML = `A soma dos valores ${n1} + ${n2} é igual a ${total}.`
                    }
                }

                form.classList.add('was-validated')
            }, false)

        })
    })()

}
