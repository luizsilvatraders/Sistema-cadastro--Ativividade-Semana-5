const prompt = require('prompt-sync')();

var array_bebidas = [];

do {
  console.log("Sistema de Cadastro de Bebidas - DEPÓSITO GELAGUELA");
  console.log("1 - Inserir Bebida");
  console.log("2 - Excluir Bebida");
  console.log("3 - Listar Bebidas");
  console.log("4 - Editar Bebidas");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Bebida...\n");

    let codigo = parseInt(prompt("Digite o código de identificação da bebida: "));
    while (isNaN(codigo) || codigo % 1 !== 0) {
      console.log("Apenas aceitamos números inteiros.");
      codigo = parseInt(prompt("Digite o código de identificação da bebida novamente: "));
    }

    let nome = prompt("Digite o nome da Bebida: ");

    let quantidade = parseInt(prompt("Digite a quantidade: "));
    while (isNaN(quantidade) || quantidade % 1 !== 0) {
      console.log("Apenas aceitamos números inteiros.");
      quantidade = parseInt(prompt("Digite a quantidade novamente: "));
    }

    let preco = parseFloat(prompt("Digite o preço da bebida: "));
    while (isNaN(preco)) {
      console.log("Apenas aceitamos números válidos.");
      preco = parseFloat(prompt("Digite o preço da bebida novamente: "));
    }

    // Neste trecho estamos declarando um objeto
    const bebida = {
      codigo: codigo,
      nome: nome,
      quantidade: quantidade,
      preco: preco
    }
    // Chamar a função inserir
    inserir_Bebida(bebida);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Bebida...\n");

    let codigo = parseInt(prompt("Digite o código de identificação da bebida a ser excluída: "));
    while (isNaN(codigo) || codigo % 1 !== 0) {
      console.log("Apenas aceitamos números inteiros.");
      codigo = parseInt(prompt("Digite o código de identificação da bebida a ser excluída novamente: "));
    }
    // Chamar a função excluir
    excluir_Bebida(codigo)
  } else if (opcao == 3) {
    console.log("\n\nListando Bebidas...\n");
    // Chamar a função listar
    listar_Bebidas()
  } else if (opcao == 4) {
    console.log("\n\nEditar Bebidas...\n");

    let codigo = parseInt(prompt("Digite o código de identificação da bebida a ser editada: "));
    while (isNaN(codigo) || codigo % 1 !== 0) {
      console.log("Apenas aceitamos números inteiros.");
      codigo = parseInt(prompt("Digite o código de identificação da bebida a ser editada novamente: "));
    }
    // Chamar a função Editar
    editar_bebidas(codigo);
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0);


function inserir_Bebida(Bebida) {
  // Implementar corpo da função
  array_bebidas.push(Bebida);
}

function excluir_Bebida(codigo) {
  // Implementar corpo da função
  let resultado = false;
  for (let i = 0; i < array_bebidas.length; i++) {
    if (array_bebidas[i]["codigo"] == codigo) {
      array_bebidas.splice(i, 1);
      resultado = true;
    }
  }
  verifica_resultado(resultado, codigo, "delete");
}


function listar_Bebidas() {
  // Implementar corpo da função
  for (let i = 0; i < array_bebidas.length; i++) {
    console.log(
      `${array_bebidas[i]["codigo"]}: ${array_bebidas[i]["nome"]} - ${array_bebidas[i]["quantidade"]} -${array_bebidas[i]["preco"]}`
    );
  }
}

function editar_bebidas(codigo) {
  let resultado = false;

  let nome = prompt("Digite o nome da bebida: ");

  let quantidade = parseInt(prompt("Digite a quantidade de bebida: "));
  while (isNaN(quantidade) || quantidade % 1 !== 0) {
    console.log("Apenas aceitamos números inteiros.");
    quantidade = parseInt(prompt("Digite a quantidade de bebida novamente: "));
  }

  let preco = parseFloat(prompt("Digite o preço da bebida: "));
  while (isNaN(preco)) {
    console.log("Apenas aceitamos números válidos.");
    preco = parseFloat(prompt("Digite o preço da bebida novamente: "));
  }

  for (let i = 0; i < array_bebidas.length; i++) {
    if (array_bebidas[i]["codigo"] == codigo) {
      array_bebidas[i]["nome"] = nome;
      array_bebidas[i]["quantidade"] = quantidade;
      array_bebidas[i]["preco"] = preco;
      array_bebidas = array_bebidas;
      resultado = true;
    }
  }
  verifica_resultado(resultado, codigo, "update");
}

function verifica_resultado(resultado, codigo, type) {
  if (!resultado) {
    console.log(`Registro ${codigo} não localizado em 
   nossa base.`);
  } else {
    console.log(`Registro ${codigo} ${type === "delete" ? "deletado" : "atualizado"} com sucesso.`
    );
  }
}