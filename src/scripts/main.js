$(document).ready(function (){

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: false
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo',
            telefone: 'Por favor, insira o número do seu telefone',
            email: 'Por favor, insira o seu e-mail'
        },
        submitHandler: function(form) {
            if ($(form).valid()) {
                alert('Formulário enviado com sucesso!');
                form.reset();
            }
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incompletos`)
            }
        }
    })

})