/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

let pais = [];

while (true) {
  let nome = prompt("Digite o nome do país (ou digite 'sair' para concluir):");

  if (nome === "sair") {
    break;
  }

  let ouro = prompt("Medalhas de ouro:");
  let prata = prompt("Medalhas de prata:");
  let bronze = prompt("Medalhas de bronze:");

  let total = ouro + prata + bronze; 

  paises.push({ pais: pais, total: total });
}

paises.sort((a, b) => a.total > b.total);

let texto = "#Ranking de medalhas:\n";

for (let i = 0; i < paises.length; i++) {
  texto += "#" + paises[i].pais + ": " + paises[i].total + " medalhas\n";
}
alert("Ranking de medalhas finalizado");