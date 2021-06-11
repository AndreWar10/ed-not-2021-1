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
        //console.log(`Raiz da árvore no início => ${this.#root}`)
    }

    insert(val) {

        const node = new Node(val)
        //1º Caso: Árvore vazia
        if(this.#root === null) this.#root = node 
        

        //2º Caso: Inserção recursiva ~> percorre a árvore recursivamente para encontrar a posição do novo nodo
        else this.#insertNode(node, this.#root)


        //console.log(this.#root)
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

   // Retorna o menor valor da arvore
   min() {
       let min = this.#minNode(this.#root)
       return min !== null ? min.data : null    //? - mini if // : - senão {}
   }

   //Retorna o maior valor da arvore
   max() {
       let max = this.#maxNode(this.#root)
       return max !== null ? max.data : null    //se tiver retorna o valor, se não retorna null
   }

   //Encontra o nodo com menor valor da arvore ou ubarvore
   #minNode(root) {
       let min = root 
       while(min!=null && min.left !== null) min = min.left
       return min
   }

   //Encontra o nodo com maior valor da arvore ou subarvore
   #maxNode(root) {
       let max = root
       while(max != null && max.right != null) max = max.right
       return max
   }

   //Procura pelo valor especificado e retorna true caso exista 
   //ou false caso contrário
   search(key) {
       let node = this.#searchNode(this.#root, key)
       //Se for retornado o node válido (diferente de null), 
       //é porque o valor EXISTE na árvore
       return node !== null
   }

   //Procura pelo nodo que armazena a key       (coloca em vários if's para parar ação no return)
   #searchNode(root, key) {
       //1º caso: arvore está vazia
       if(root === null) return null

       //2º caso: o valor da key é MENOR que o valor da raiz
       // Continua a busca pela subárvore ESQUERDA
       if(key < root.data) return this.#searchNode(root.left, key)

       //3º caso: o valor de key é MAIOR que o valor da raiz
       if(key > root.data) return this.#searchNode(root.right, key)

       //4º caso: o valor de key é IGUAL ao valor da raiz
       //O nodo que contem o valor foi encontrado e é root
       return root
   }

   remove(key) {
       this.#root = this.#removeNode(this.#root, key)
   }

   //Remove o nodo com key especificado
   #removeNode(root, key) {
       //1º caso: arvore vazia
       if(root === null) return null

       //2ºcaso: o valor de key é MENOR que o valor da raiz
       if(key < root.data) {
           root.left = this.#removeNode(root.left, key)
           return root
       }

       //3º caso: o valor de key é MAIOR que o valor da raiz
       if(key > root.data) {
           root.right = this.#removeNode(root.right, key)
           return root
       }

       //4º caso: o valor de key é IGUAL o valor da raiz
       // (encontrou o nodo a ser removido)

       //Caso 4.1: remoção do nodo folha (grau 0)
       if(root.left === null && root.right === null) {
           root = null
           return root
       }

       //Caso 4.2: remoção do nodo grau 1 com descesdentes à esquerda
       if(root.left != null && root.right === null) {
           root = root.left 
           return root
       }

       //Caso 4.3: remoção do nodo grau 1 com descendentes à direita
       if(root.left === null && root.right != null) {
           root = root.right
           return root
       } 

       //Caso 4.4: remoção de nodo grau 2

       //Precisamos encontrar:
       //a) o MAIOR nodo da subarvore ESQUERDA *ou*
       //b) o MENOR nodo da subarvore DIREITA
       const newRoot = this.#maxNode(root.left)
       //ou const newRoor = this.#minNode(root.right)

       //Leva o valor do novo root para o root original
       root.data = newRoot.data

       //Excluímos o valor duplicado que ficou na subarvore esquerda do root
       // (de onde veio o maior valor)
       root.left = this.#removeNode(root.left, newRoot.data)
       //ou: root.right = this#removeNode(root.right, newRoot.data)

       return root

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
arvore.insert(50)
arvore.insert(30)
arvore.insert(3)
arvore.insert(66)
arvore.insert(12)
arvore.insert(81)

let percursoEm = []  //ordem
arvore.inOrderTraversal(val => percursoEm.push(val))    //coloca no vetor para resutado ficar na mesma linha
//arvore.inOrderTraversal(val => console.log(val))
console.log({percursoEm})

let percursoPre = []
arvore.preOrderTraversal(val => percursoPre.push(val))
console.log({percursoPre})

let percursoPos = []
arvore.postOrderTraversal(val => percursoPos.push(val))
console.log({percursoPos})

let min = arvore.min()
let max = arvore.max()
console.log({min, max})

let existe48 = arvore.search(48)
let existe25 = arvore.search(25)
let existe19 = arvore.search(19)
let existe10 = arvore.search(10)
console.log({existe48, existe25, existe19, existe10})

console.log('--------------------------------------------------------------')

percursoEm = []  //ordem
arvore.inOrderTraversal(val => percursoEm.push(val))    //coloca no vetor para resutado ficar na mesma linha
console.log({percursoEm})


//Remoção do nodo grau 0 {81}
arvore.remove(81)
percursoEm = []  //ordem
arvore.inOrderTraversal(val => percursoEm.push(val))    
console.log('Sem o 81: ', {percursoEm})

//Remoção de nodo grau 1 com esquerda
arvore.remove(34)
percursoEm = []  //ordem
arvore.inOrderTraversal(val => percursoEm.push(val))    
console.log('Sem o 34: ', {percursoEm})

//Remoção de nodo grau 1 com direita
arvore.remove(50)
percursoEm = []  //ordem
arvore.inOrderTraversal(val => percursoEm.push(val))    //coloca no vetor para resutado ficar na mesma linha
console.log('Sem o 50: ', {percursoEm})

//Remoção de nodo grau 2
arvore.remove(19)
percursoEm = []  //ordem
arvore.inOrderTraversal(val => percursoEm.push(val))    //coloca no vetor para resutado ficar na mesma linha
console.log('Sem o 19: ', {percursoEm})

//Remoção do nodo raiz ~> {41}
arvore.remove(41)
percursoEm = []  //ordem
arvore.inOrderTraversal(val => percursoEm.push(val))    //coloca no vetor para resutado ficar na mesma linha
console.log('Sem o 41: ', {percursoEm})




