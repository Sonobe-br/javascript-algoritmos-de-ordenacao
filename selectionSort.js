const livros = require('./listaLivros.js');
const menorValor = require('./menorValor.js')

for (let atual = 0; atual < livros.length; atual++) {

    let menor = menorValor(livros, atual);
    console.log('livro atual', atual);

    let livroAtual = livros[atual];
    console.log('livro atual', livros[atual]);
    
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor]);
    

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;

}
console.log(livros);