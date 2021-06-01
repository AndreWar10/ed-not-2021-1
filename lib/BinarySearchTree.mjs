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

    #insertNode(node, root) {

    }


}

//Testes
const arvore = new BinarySearchTree()
arvore.insert(41)
