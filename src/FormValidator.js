import validador from 'validator';

class FormValidator {

    constructor(validacoes) {
        // validacoes é um array específico do formulário com regras de validação
        this.validacoes = validacoes;
    }

    valido() {
        //criação do objeto
        const validacao = {};

        //populando o objeto de acordo com a quantidade de campos
        //criando a chave isInvalid e atribuindo false para cada
        //**TODOS OS CAMPOS COMEÇAM VÁLIDOS!**
        this.validacoes.map(regra => (
            validacao[regra.campo] = { isInvalid: false, message: '' }
        ));

        //retorna um grande objeto com uma chave externa isValid 
        //junto com todos os outros campos.
        return { isValid: true, ...validacao };
    }     
    

    valida(state) {
        
        //itera pelo array de regras de validação e constrói
        //um objeto validacao e retorna-o
        let validacao = this.valido();

        this.validacoes.forEach(regra => {        
            if (!validacao[regra.campo].isInvalid) {
                // Determina o valor do campo o metodo a ser invocado
                // e os argumentos opcionais pela definicao da regra
                const campoValor = state[regra.campo.toString()];
                const args = regra.args || [];
                const metodoValidacao = typeof regra.metodo == 'string' ?
                validador[regra.metodo] : regra.metodo;
                if (metodoValidacao(campoValor, ...args, state) !== regra.validoQuando) {
                    validacao[regra.campo] = {
                        isInvalid: true,
                        message: regra.mensagem
                    };
                    validacao.isValid = false;
                }
            } 
        });
        return validacao
    }
}
export default FormValidator;
