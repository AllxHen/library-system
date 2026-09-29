const prompt = require("prompt-sync")();
 
class livro {
 
    constructor(titulo, autor, ano, editora, genero, idade, edicao, volume, idioma) {
 
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
        this.genero = genero;
        this.idade = idade;
        this.edicao = edicao;
        this.volume = volume;
        this.idioma = idioma;
        this.status = true;
    }
 
    emprestarLivro() {
        this.status = false;
    }
 
    devolverLivro() {
        this.status = true;
    }
 
    exibirInformacoes() {
 
        const situacao = this.status ? "Disponivel" : "Emprestado";
        console.log(
            `${this.titulo} | ${this.autor} | ${this.ano} | ${this.editora} | ${this.genero} | ${situacao}`
        );
    }
}
 
 
class revista {
    constructor(titulo, ano, tipo) {
 
        this.titulo = titulo;
        this.ano = ano;
        this.tipo = tipo;
        this.status = true;
    }
 
    emprestarRevista() {
        this.status = false;
    }
 
    devolverRevista() {
        this.status = true;
    }
 
    exibirDisponiveis() {
 
        const situacao = this.status ? "Disponivel" : "Emprestada";
        console.log(
            `${this.titulo} | ${this.ano} | ${this.tipo} | ${situacao}`
        );
    }
}
 
 
class pessoa {
    constructor(nome, idade, tef, cep, cpf) {
 
        this.nome = nome;
        this.idade = idade;
        this.tef = tef;
        this.cep = cep;
        this.cpf = cpf;
    }
}
 
 
class cliente extends pessoa {
 
    constructor(nome, idade, tef, cep, cpf, carterinha) {
 
        super(nome, idade, tef, cep, cpf);
 
        this.carterinha = carterinha;
    }
}
 
 
class profissional extends pessoa {
 
    constructor(nome, idade, tef, cep, cpf, identificador) {
 
        super(nome, idade, tef, cep, cpf);
 
        this.identificador = identificador;
    }
}
 
 
const biblioteca = [];
const estoque = [];
const usuarios = [];
const funcionarios = [];
 
const emprestimos = [];
 
function cadastrarUsuario() {
 
    console.log("= CADASTRO DE CLIENTE =");
 
    const nome = prompt("Nome: ");
    const idade = prompt("Idade: ");
    const tef = prompt("Telefone: ");
    const cep = prompt("CEP: ");
    const cpf = prompt("CPF: ");
    const carterinha = prompt("Numero da Carteirinha: ");
    const novoCliente = new cliente(nome,idade,tef,cep,cpf,carterinha);
    usuarios.push(novoCliente);
    console.log(`Usuario ${nome} cadastrado com sucesso!`);
}
 
function listarUsuarios() {
 
    if (usuarios.length === 0) {
 
        console.log("Nenhum usuario cadastrado.");
        return;
    }
 
    console.log("= USUÁRIOS =");
 
    for (let contadora = 0; contadora < usuarios.length; contadora++) {
 
        const usuario = usuarios[contadora];
 
        console.log(
            `${contadora + 1}. ${usuario.nome} | CPF: ${usuario.cpf} | Carteirinha: ${usuario.carterinha}`
        );
    }
}
 
function buscarUsuario(cpf) {
 
    for (let contadora = 0; contadora < usuarios.length; contadora++) {
 
        if (usuarios[contadora].cpf === cpf) {
 
            return usuarios[contadora];
        }
    }
 
    return;
}
 
 
function atualizarUsuario() {
 
    const cpf = prompt("Digite o CPF do usuario: ");
    const usuario = buscarUsuario(cpf);
 
    if (!usuario) {
 
        console.log("Usuario nao encontrado.");
        return;
    }
 
    console.log("= ATUALIZAR USUÁRIO =");
    usuario.nome = prompt("Novo nome: ");
    usuario.idade = prompt("digite a idade: ");
    usuario.tef = prompt("digite o telefone: ");
    usuario.cep = prompt("digite o cep: ");
    usuario.carterinha = prompt("Digite a carterinha: ");
    console.log("Usuario atualizado!");
}
 
function deletarUsuario() {
 
    const apagar = prompt("Digite a carteirinha do usuario que deseja apagar: ");
 
    for (let contadora = 0; contadora < usuarios.length; contadora++) {
 
        if (usuarios[contadora].carterinha === apagar) {
 
            usuarios.splice(contadora, 1);
 
            console.log("Usuario apagado com sucesso!");
 
            return;
        }
    }
 
    console.log("Usuario nao encontrado.");
}
 
 
function cadastrarFuncionario() {
 
    console.log("= CADASTRO DE FUNCIONÁRIO =");
 
    const nome = prompt("Nome: ");
    const idade = prompt("Idade: ");
    const tef = prompt("Telefone: ");
    const cep = prompt("CEP: ");
    const cpf = prompt("CPF: ");
    const identificador = prompt("Identificador do funcionario: ");
 
    const novoFuncionario = new profissional(nome,idade,tef,cep,cpf,identificador);
    funcionarios.push(novoFuncionario);
 
    console.log("Funcionario cadastrado!");
}
 
function listarFuncionarios() {
 
    if (funcionarios.length === 0) {
 
        console.log("Nenhum funcionario cadastrado.");
        return;
    }
 
    console.log("= FUNCIONÁRIOS =");
 
    for (let contadora = 0; contadora < funcionarios.length; contadora++) {
 
        const funcionario = funcionarios[contadora];
 
        console.log(`${contadora + 1}. ${funcionario.nome} | id: ${funcionario.identificador}`);
    }
}
 
function cadastrarLivro() {
 
    console.log("= CADASTRO DE LIVRO =");
 
    const titulo = prompt("Titulo: ");
    const autor = prompt("Autor: ");
    const ano = prompt("Ano: ");
    const editora = prompt("Editora: ");
    const genero = prompt("Genero: ");
    const idade = prompt("Classificacao indicativa: ");
    const edicao = prompt("Edicao: ");
    const volume = prompt("Volume: ");
    const idioma = prompt("Idioma: ");
 
    const novoLivro = new livro(titulo,autor,ano,editora,genero,idade,edicao,volume,idioma);
    biblioteca.push(novoLivro);
    console.log("Livro cadastrado com sucesso!");
}
 
 
function listarLivros() {
 
    if (biblioteca.length === 0) {
 
        console.log("Nenhum livro cadastrado.");
        return;
    }
 
    console.log("= LIVROS =");
 
    for (let contadora = 0; contadora < biblioteca.length; contadora++) {
 
        console.log(`${contadora + 1}.`);
        biblioteca[contadora].exibirInformacoes();
    }
}
 
function buscarLivro(titulo) {
 
    for (let contadora = 0; contadora < biblioteca.length; contadora++) {
 
        if (biblioteca[contadora].titulo === titulo) {
            return biblioteca[contadora];
        }
    }
 
    return;
}
 
 
function atualizarLivro() {
 
    const titulo = prompt("Digite o titulo do livro: ");
 
    const livroEncontrado = buscarLivro(titulo);
 
    if (!livroEncontrado) {
 
        console.log("Livro nao encontrado.");
        return;
    }
 
    console.log("= ATUALIZAR LIVRO =");
 
    livroEncontrado.titulo = prompt("Novo titulo: ");
    livroEncontrado.autor = prompt("Novo autor: ");
    livroEncontrado.ano = prompt("Novo ano: ");
    livroEncontrado.editora = prompt("Nova editora: ");
    livroEncontrado.genero = prompt("Novo genero: ");
    livroEncontrado.idade = prompt("Nova classificacao: ");
    livroEncontrado.edicao = prompt("Nova edicao: ");
    livroEncontrado.volume = prompt("Novo volume: ");
    livroEncontrado.idioma = prompt("Novo idioma: ");
    console.log("Livro atualizado com sucesso!");
}
 
 
 
function deletarLivro() {
 
    const apagar = prompt("Digite o nome do livro que deseja apagar: ");
 
    for (let contadora = 0; contadora < biblioteca.length; contadora++) {
 
        if (biblioteca[contadora].titulo === apagar) {
 
            if (biblioteca[contadora].status === false) {
                console.log("Nao e possivel excluir um livro emprestado.");
 
                return;
            }
 
            biblioteca.splice(contadora, 1);
            console.log("Livro apagado com sucesso!");
 
            return;
        }
    }
 
    console.log("Livro nao encontrado.");
}
 
function emprestarLivro() {
 
    console.log("= EMPRÉSTIMO =");
    const cpf = prompt("CPF do usuario: ");
    const usuario = buscarUsuario(cpf);
 
    if (!usuario) {
 
        console.log("Usuario nao encontrado.");
        return;
    }
 
    const identificador = prompt("Identificador do funcionario: ");
    let funcionarioEncontrado = null;
 
    for (let contadora = 0; contadora < funcionarios.length; contadora++) {
 
        if (funcionarios[contadora].identificador === identificador) {
 
            funcionarioEncontrado = funcionarios[contadora];
            break
        }
    }
 
    if (!funcionarioEncontrado) {
 
        console.log("Funcionario nao encontrado.")
        return
    }
 
    const titulo = prompt("Titulo do livro: ");
    const livroEncontrado = buscarLivro(titulo);
 
    if (!livroEncontrado) {
 
        console.log("Livro nao encontrado.")
        return
    }
 
    if (livroEncontrado.status === false) {
 
        console.log("Esse livro ja esta emprestado.")
        return
    }
 
    livroEncontrado.emprestarLivro();
 
    emprestimos.push({
 
        usuario: usuario,
        funcionario: funcionarioEncontrado,
        item: livroEncontrado,
 
    });
 
    console.log("Empréstimo realizado com sucesso!");
    console.log("Usuario: " + usuario.nome);
    console.log("Funcionario: " + funcionarioEncontrado.nome);
    console.log("Livro: " + livroEncontrado.titulo);
}
 
function devolverLivro() {
 
    console.log("= DEVOLUÇÃO =");
 
    const cpf = prompt("CPF do usuario: ");
 
    const usuario = buscarUsuario(cpf);
 
    if (!usuario) {
 
        console.log("Usuario nao encontrado.");
        return;
    }
 
    const identificador = prompt("Identificador do funcionario: ");
 
    let funcionarioEncontrado = null;
 
    for (let contadora = 0; contadora < funcionarios.length; contadora++) {
 
        if (funcionarios[contadora].identificador === identificador) {
 
            funcionarioEncontrado = funcionarios[contadora];
 
            break;
        }
    }
 
    if (!funcionarioEncontrado) {
 
        console.log("Funcionario nao encontrado.");
        return;
    }
 
    const titulo = prompt("Titulo do livro: ");
 
    const livroEncontrado = buscarLivro(titulo);
 
    if (!livroEncontrado) {
 
        console.log("Livro nao encontrado.");
        return;
    }
 
    if (livroEncontrado.status === true) {
 
        console.log("Esse livro ja esta disponivel.");
        return;
    }
 
    livroEncontrado.devolverLivro();
 
    console.log("Devolução realizada com sucesso!");
    console.log("Usuario: " + usuario.nome);
    console.log("Funcionario: " + funcionarioEncontrado.nome);
    console.log("Livro: " + livroEncontrado.titulo);
}
 
 
function contarLivros() {
 
    let disponiveis = 0;
    let emprestados = 0;
 
    for (let contadora = 0; contadora < biblioteca.length; contadora++) {
 
        const objeto = biblioteca[contadora];
 
        if (objeto.status === true) {
            disponiveis++;
 
        } else {
            emprestados++;
        }
    }
 
    console.log("=QUANTIDADE DE LIVROS=");
    console.log("Total de livros: " + biblioteca.length);
    console.log("Disponiveis: " + disponiveis);
    console.log("Emprestados: " + emprestados);
}
 
function cadastrarRevista() {
 
    console.log("= CADASTRO DE REVISTA =");
 
    const titulo = prompt("Titulo: ");
    const ano = prompt("Ano: ");
    const tipo = prompt("Tipo: ");
 
    const novoRevista = new revista(titulo,ano,tipo);
    estoque.push(novoRevista);
    console.log("Revista cadastrada com sucesso!");
}
 
function listarRevistas() {
 
    if (estoque.length === 0) {
 
        console.log("Nenhuma revista cadastrada.");
        return;
    }
 
    console.log("= REVISTAS =");
 
    for (let contadora = 0; contadora < estoque.length; contadora++) {
 
        console.log(`${contadora + 1}.`);
        estoque[contadora].exibirDisponiveis();
    }
}
 
function buscarRevista(titulo) {
 
    for (let contadora = 0; contadora < estoque.length; contadora++) {
 
        if (estoque[contadora].titulo === titulo) {
            return estoque[contadora];
        }
    }
 
    return;
}
 
function atualizarRevista() {
 
    const titulo = prompt("Digite o titulo da revista: ");
 
    const revistaEncontrada = buscarRevista(titulo);
 
    if (!revistaEncontrada) {
 
        console.log("Revista nao encontrada.");
        return;
    }
 
    console.log("= ATUALIZAR REVISTA =");
 
    revistaEncontrada.titulo = prompt("Novo titulo: ");
    revistaEncontrada.ano = prompt("Novo ano: ");
    revistaEncontrada.tipo = prompt("Novo tipo: ");
    console.log("Revista atualizada com sucesso!");
}
 
function deletarRevista() {
 
    const apagarRevista = prompt("Digite o nome da revista que deseja apagar: ");
 
    for (let contadora = 0; contadora < estoque.length; contadora++) {
 
        if (estoque[contadora].titulo === apagarRevista) {
 
            if (estoque[contadora].status === false) {
                console.log("Nao e possivel excluir a revista");
 
                return;
            }
 
            estoque.splice(contadora, 1);
            console.log("Revista apagada com sucesso!");
 
            return;
        }
    }
 
    console.log("revista nao encontrada.");
}
 
 
 
function emprestarRevista() {
 
    console.log("= EMPRÉSTIMO =");
    const cpf = prompt("CPF do usuario: ");
    const usuario = buscarUsuario(cpf);
 
    if (!usuario) {
 
        console.log("Usuario nao encontrado.");
        return;
    }
 
    const identificador = prompt("Identificador do funcionario: ");
    let funcionarioEncontrado = null;
 
    for (let contadora = 0; contadora < funcionarios.length; contadora++) {
 
        if (funcionarios[contadora].identificador === identificador) {
 
            funcionarioEncontrado = funcionarios[contadora];
            break
        }
    }
 
    if (!funcionarioEncontrado) {
 
        console.log("Funcionario nao encontrado.")
        return
    }
 
    const titulo = prompt("Titulo da Revista: ");
    const revistaEncontrada = buscarRevista(titulo);
 
    if (!revistaEncontrada) {
 
        console.log("revista não encontrada")
        return
    }
 
    if (revistaEncontrada.status === false) {
 
        console.log("Essa revista ja esta emprestada.")
        return
    }
 
    revistaEncontrada.emprestarRevista();
 
    emprestimos.push({
 
        usuario: usuario,
        funcionario: funcionarioEncontrado,
        item: revistaEncontrada,
 
    });
 
    console.log("Empréstimo realizado com sucesso!");
    console.log("Usuario: " + usuario.nome);
    console.log("Funcionario: " + funcionarioEncontrado.nome);
    console.log("Revista: " + revistaEncontrada.titulo);
}
 
function devolverRevista() {
 
    console.log("= DEVOLUÇÃO =");
 
    const cpf = prompt("CPF do usuario: ");
 
    const usuario = buscarUsuario(cpf);
 
    if (!usuario) {
 
        console.log("Usuario nao encontrado.");
        return;
    }
 
    const identificador = prompt("Identificador do funcionario: ");
 
    let funcionarioEncontrado = null;
 
    for (let contadora = 0; contadora < funcionarios.length; contadora++) {
 
        if (funcionarios[contadora].identificador === identificador) {
 
            funcionarioEncontrado = funcionarios[contadora];
 
            break;
        }
    }
 
    if (!funcionarioEncontrado) {
 
        console.log("Funcionario nao encontrado.");
        return;
    }
 
    const titulo = prompt("Titulo da revista: ");
 
    const revistaEncontrada = buscarRevista(titulo);
 
    if (!revistaEncontrada) {
 
        console.log("Revista nao encontrada.");
        return;
    }
 
    if (revistaEncontrada.status === true) {
 
        console.log("Essa revista ja esta disponivel.");
        return;
    }
 
    revistaEncontrada.devolverRevista();
 
    console.log("Devolução realizada com sucesso!");
    console.log("Usuario: " + usuario.nome);
    console.log("Funcionario: " + funcionarioEncontrado.nome);
    console.log("Revista: " + revistaEncontrada.titulo);
}
 
function contarRevistas() {
 
    let disponiveisRevistas = 0;
    let emprestadosRevistas = 0;
 
    for (let contadora = 0; contadora < estoque.length; contadora++) {
 
        const objetoRevista = estoque[contadora];
 
        if (objetoRevista.status === true) {
            disponiveisRevistas++;
 
        } else {
            emprestadosRevistas++;
        }
    }
 
    console.log("= QUANTIDADE DE REVISTAS =");
    console.log("Total de Revistas: " + estoque.length);
    console.log("Disponiveis: " + disponiveisRevistas);
    console.log("Emprestados: " + emprestadosRevistas);
}
 
function filtro() {
 
    console.log("= FILTRO =");
    console.log("1. Filtrar livros por titulo");
    console.log("2. Filtrar livros por autor");
    console.log("3. Filtrar livros por genero");
    console.log("4. Filtrar revistas por tipo");
 
    const opcao = prompt("Escolha: ");
 
    const pesquisa = prompt("Digite o que deseja procurar: ")
 
    if (opcao === "1") {
 
        for (let contadora = 0; contadora < biblioteca.length; contadora++) {
 
            if (biblioteca[contadora].titulo.includes(pesquisa)) {
 
                biblioteca[contadora].exibirInformacoes();
            }
        }
 
    } else if (opcao === "2") {
 
        for (let contadora = 0; contadora < biblioteca.length; contadora++) {
 
            if (biblioteca[contadora].autor.includes(pesquisa)) {
 
                biblioteca[contadora].exibirInformacoes();
            }
        }
 
    } else if (opcao === "3") {
 
        for (let contadora = 0; contadora < biblioteca.length; contadora++) {
 
            if (biblioteca[contadora].genero.includes(pesquisa)) {
 
                biblioteca[contadora].exibirInformacoes();
            }
        }
 
    } else if (opcao === "4") {
 
        for (let contadora = 0; contadora < estoque.length; contadora++) {
 
            if (
                estoque[contadora].tipo.includes(pesquisa)) {
 
                estoque[contadora].exibirDisponiveis();
            }
        }
 
    } else {
 
        console.log("Opcao invalida.");
    }
}
 
 
 
function consultarAcervo() {
 
    console.log("= ACERVO DA BIBLIOTECA =");
    console.log("=LIVROS=");
    listarLivros()
    console.log("=REVISTAS=");
    listarRevistas();
}
 
function menu() {
 
let opcao = "";
 
while (opcao !== "0") {
 
console.log("\n====================================");
console.log("       SISTEMA DE BIBLIOTECA        ");
console.log("====================================");
 
console.log("1.  Cadastrar usuario");
console.log("2.  Listar usuarios");
console.log("3.  Atualizar usuario");
console.log("4.  Excluir usuario");
console.log("5.  Cadastrar livro");
console.log("6.  Listar livros");
console.log("7.  Atualizar livro");
console.log("8.  Excluir livro");
console.log("9.  Cadastrar revista");
console.log("10. Listar revistas");
console.log("11. Atualizar revista");
console.log("12. Excluir revista");
console.log("13. Realizar emprestimo de livros");
console.log("14. Realizar devolucao de livros");
console.log("15. Utilizar filtro");
console.log("16. Consultar acervo");
console.log("17. Cadastrar funcionario");
console.log("18. Listar funcionarios");
console.log("19. Contar livros");
console.log("20. Realizar emprestimo de revistas");
console.log("21. Realizar devolucao de revistas");
console.log("22. Contar revistas");
console.log("0.  Sair");
console.log("====================================");
 
opcao = prompt("Escolha uma opcao: ");
 
switch (opcao) {
 
case "1":cadastrarUsuario();
break;
 
case "2":listarUsuarios();
break;
 
case "3":atualizarUsuario();
break;
 
case "4":deletarUsuario();
break;
 
case "5":cadastrarLivro();
break;
 
case "6":listarLivros();
break;
 
case "7":atualizarLivro();
break;
 
case "8":deletarLivro();
break;
 
case "9":cadastrarRevista();
break;
 
case "10":listarRevistas();
break;
 
case "11":atualizarRevista();
break;
 
case "12":deletarRevista();
break;
 
case "13":emprestarLivro();
break;
 
case "14":devolverLivro();
break;
 
case "15":filtro();
break;
 
case "16":consultarAcervo();
break;
 
case "17":cadastrarFuncionario();
break;
 
case "18":listarFuncionarios();
break;
 
case "19":contarLivros();
break;
 
case "20":emprestarRevista();
break;
 
case "21":devolverRevista();
break;
 
case "22":contarRevistas();
break;
 
case "0":console.log("Saindo do sistema...");
break;
 
default:console.log("Opcao invalida, tente novamente.");
        }
    }
}
 
 
menu();
 
 
 
