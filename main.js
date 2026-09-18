const livro = {
  titulo: 'minha vida',
  autor: 'Natália',
  descrever() {
    return `O livro "${this.titulo}" foi escrito por ${this.autor}.`;
  }
};

console.log(livro.descrever());