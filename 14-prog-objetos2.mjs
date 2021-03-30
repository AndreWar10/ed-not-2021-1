/*
    Uma classe pode ser comparada a uma forma de bolo. Assim como esse utensílio, a classe empresrta algumas caract
    erísitcas aos objetos que serão criados a partir dela. embora outras características dos objetos possam variar.
*/

//Por convenção, nomes de classes em JS se iniciam com Letras Maiúsculas 
class FormaGeometrica {

    //DECLARAÇÃO DOS ATRIBUTOS PRIVADOS:
    #base 
    #altura 
    #tipo

    // Uma classe pode conter funções. Mas, quando funções fazem parte de uma classe,
    //elas são denominadas MÉTODOS.

    //Um método especial é o construtor(). Ele é chamado toda vez que se vai criar um novo objeto a partir da classe.
    //No construtor(), podem ser feitas validações que, ao falhar, geram um Error. A existencia de um ou mais Errors
    //impede que o objeto seja criado.
    
    //método constructor
    constructor(base, altura, tipo){

        //base deve ser numerica e seu valor maior que zero    
        if(isNaN(base) || base <=0) throw new Error(' A base deve ser numérica e seu valor maior do que zero.')
        
        //altura deve ser numerica e seu valor maior que zero  
        if(isNaN(altura) || altura <=0) throw new Error(' A altura deve ser numérica e seu valor maior do que zero.')

        //Tipo
        //if tipo(tipo !== 'Q' &&  tipo !== 'T' && tipo !== 'E' && ) OU
        if(!['Q','T','E'].includes(tipo)) throw new Error(' O tipo deve ser Q, T ou E.')

        //Se chagamos até aqui, podemos prosseguir com a criação do objeto.

        //No caso atual, precisamos armazenar as informações de base, altura e tipo
        //em algum lugar, de modo que, ao sair do construtor(), essas informações não se percam.

        //Para tanto, armazenaremos essas informações em variáveis que pertencerão ao escopo do objeto criado a partir da classe. 
        //Essas variáveis especiais são denominadas ATRIBUTOS e diferenciam-se das variaveis comuns pela presença do prefixo this.

        //Atributo recebe valor do parametro de mesmo nome.    

        //ATRIBUTOS PÚBLICOS: podem ser acessados e modificados também FORA da classe
        /*
        this.base = base //atrib público, (sem #)
        this.altura = altura
        this.tipo = tipo   
        */

        // ATRIBUTOS PRIVADOS: só podem ser acessados e modificados dentro da classe. (#)
        this.#base = base //atrib privado
        this.#altura = altura
        this.#tipo = tipo   

        console.log('Interno:', this)
    }
}

let forma1, forma2, forma3

//Criação de alguns objetos a partir da classe
try{
    forma1 = new FormaGeometrica(8, 4, 'Q')
console.log(forma1)
}
catch(erro){
    console.log('ERRO' + erro.message)
}

try{ //Tenta executar as linhas contidas (NÃO VAI INTERROMPER A EXECUÇÃO DO PROGRAMA)

    //Se acontecer alguma exceção no bloco try, a excecução é desviada para o bloco catch
    forma3 = new FormaGeometrica('cebola', 'alho', 'X') //execução morre aqui, nada mais é executado, nem a forma2, CASO não usar o try{}catch{}
console.log(forma3)
}
catch(erro) {   //O bloco catch() recebe o erro que foi gerado no bloco try
    //Tratamento de exceção. Nesse caso, simplesmente exibiremos a mensagem de erro
    console.log('ERRO' + erro.message)
}

try{
    forma2 = new FormaGeometrica(2, 0.5, 'T')
console.log('Externo:', forma2)
}
catch(erro){
    console.log('ERRO' + erro.message)
}


//Alterando valor de atributo do OBJETO depois de sua criação
forma1.base = 'abobrinha'
console.log(forma1)