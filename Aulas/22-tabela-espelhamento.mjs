import { HashTable } from './lib/HashTable.mjs'

const tabela = new HashTable(10, qualLista)
console.log(tabela.print())

tabela.insert(14)
tabela.insert(36)
tabela.insert(23)
tabela.insert(5)
tabela.insert(43)
tabela.insert('Arroz')
tabela.insert('Feijão')
tabela.insert('Leite')
tabela.insert('Ovos')
tabela.insert('Macarrão')
tabela.insert('Farinha')
console.log(tabela.print())

let removed
removed = tabela.remove('Ovos')
console.log({removed})
removed = tabela.remove(36)
console.log({removed})
removed = tabela.remove(48)
console.log({removed})
console.log(tabela.print())

const includesFarinha = tabela.includes('Farinha')
const includes14 = tabela.includes(14)
const includesAzeite = tabela.includes('Azeite')
console.log({includesFarinha, includes14, includesAzeite})

console.log('Total de itens na tabela: ', tabela.count) 