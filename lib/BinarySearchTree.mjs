/*
ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
- Árvore ~> é uma estrutura de dados não-linear, hierárquica,
que é formada recursivamente por outras subárvores.
- Árvore binária ~> uma árvore na qual cada nodo tem grau máximo
igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descendentes
diretos).
- Árvore binária de busca ~> é uma árvore binária otimizada para a
operação de busca binária. Por isso, na inserção, os valores são
colocados já em ordem.
*/

class Node {
    constructor(val) {
        this.data = val
        this.left = null    //Ponteiro para sub-árvore à esquerda
        this.right = null   //Ponteiro para sub-árvore à direita
    }
}

export class BinarySearchTree {
    
    #root   //Raiz da árvore (Onde ela começa)

    constructor() {
        this.#root = null 
        console.log(`Raiz da árvore no início => ${this.#root}`)
    }

    insert(val) {

        const node = new Node(val)
        //1º Caso: Árvore vazia
        if(this.#root === null) this.#root = node 
        

        //2º Caso: Inserção recursiva ~> percorre a árvore recursivamente para encontrar a posição do novo nodo
        else this.#insertNode(node, this.#root)


        console.log(this.#root)
    }

    //Parametros
    //node ~> nodo a ser inserido
    //root ~> a raiz da SUB-ÁRVORE onde será feita a inserção
    #insertNode(node, root) {
        // 1º caso: valor do nodo é MENOR que o valor da raiz
        if(node.data < root.data){
            //verifica se o nodo a esquerda da raiz está desocupado
            //e, se for o caso, insere aí o nodo
            if(root.left === null) root.left = node
            //Caso o nodo a esquerda da raiz ja exista, reiniciamos o processo considerando este como raiz da subárvore
            else this.#insertNode(node, root.left)
        } 
        // 2º caso: valor do nodo é maior que o valor da raiz ~> vai para a direita
        else if(node.data > root.data){
            //Acontece a mesma coisa que no caso anterior, mas no lado direito
            if(root.right === null) root.right = node
            else this.#insertNode(node, root.right)
        }
        //Note que, se o valor do nodo for IGUAL ao valor da raiz, nada acontece:
        //o pedido de inserção é ignorado para evitar valores duplicados na árvore
    }

    /*******************************************************************************************
        *PERCURSOS
    *******************************************************************************************/

   // PERCURSO EM-ORDEM (IN-ORDER) ~> TUDO RELACIONADO A ARVORES É RECURSIVO || <Busca a Sequência>
   // 1º: visita em-ordem a subarvore esquerda
   // 2º: visita a raiz
   // 3º: visita em-ordem a subarvore direita 
   inOrderTraversal(fnCallback, root = this.#root) {
       if(root !== null) {
           this.inOrderTraversal(fnCallback, root.left)     //1º
           fnCallback(root.data)                            // 2º
           this.inOrderTraversal(fnCallback, root.right)    // 3º 
       }
   }

   // PERCURSO PRÉ ORDEM (Conhece pais dps filhos) || <Busca a Hierarquia>
   // 1º: visita a raiz
   // 2º: visita pré-ordem a subárvore esquerda
   // 3º: visita pré-ordem a subávore direita   
   // fnCallback: função externa que será chamada toda vez que o percurso passar por um nodo
   preOrderTraversal(fnCallback, root = this.#root) {
       if(root !== null) {
           fnCallback(root.data)                            //1º
           this.preOrderTraversal(fnCallback, root.left)    //2º
           this.preOrderTraversal(fnCallback, root.right)   //3º
       }
   }

   // PERCURSO PÓS-ORDEM
   //exemplo, contagem do tamanho dos arquivos (filhos) de um diretório para no final falar qual tamanho do pai (diretório).
   // 1º: visita pós-ordem a subárvore esquerda
   // 2º: visita pós-ordem a subárvore direita
   // 3º: visita a raiz
   //fnCallback: função externa que será chamada toda vez que o percurso passar por um nodo
   postOrderTraversal(fnCallback, root = this.#root) {
       if(root !== null) {
           this.postOrderTraversal(fnCallback, root.left)   //1º
           this.postOrderTraversal(fnCallback, root.right)  //2º
           fnCallback(root.data)                            //3º
       }
   }


}

//Testes
const arvore = new BinarySearchTree()
arvore.insert(41)
arvore.insert(76)
arvore.insert(19)
arvore.insert(34)
arvore.insert(88)
arvore.insert(25)

let percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))    //coloca no vetor para resutado ficar na mesma linha
//arvore.inOrderTraversal(val => console.log(val))
console.log({percursoEm})

let percursoPre = []
arvore.preOrderTraversal(val => percursoPre.push(val))
console.log({percursoPre})

let percursoPos = []
arvore.postOrderTraversal(val => percursoPos.push(val))
console.log({percursoPos})
