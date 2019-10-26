$("#contact-form").validate({
    rules: {
        nome: {
            required: true,
            minLength: 5
        },

        telefone: {
            required: true
        },

        descricao: {
            required: true,
            minlength: 10
        }
    },

    messages: {
        nome: {
            required: "Parece que você não escreveu seu nome",
            minLength: "Seu nome parece estar incompleto"
        },

        telefone: {
            required: 'Precisamos saber seu telefone.'
        },

        descricao: {
            required: "Por favor, escreva uma descrição",
            minlength: "Sua descrição deve ter no mínimo 10 caracteres."
        }
    }
});