function jogar() {
  
rodada = 1
while (rodada <=3){
console.log("Rodada:" + rodada)

  escolhajogador = prompt ("Nível "+rodada+". escolha uma das opções: 1 - Prédio azul, 2 - Prédio vermelho ou 3 - Poste")
if (escolhajogador < 1 || escolhajogador > 3)
{alert ("OPÇÃO INVÁLIDA, escolha uma das opções: 1 - Prédio azul, 2 - Prédio vermelho ou 3 - Poste");
  continue;
}
pisoquebrado = Math.floor(Math.random()*3) + 1;

  if(escolhajogador == pisoquebrado) {
    alert("IHH A TEIA RASGOU!! 🕸️")
 rodada = 5;
  }
  else {
alert("Passou! Obstáculo estava em: " + pisoquebrado)
  }
    
rodada = rodada + 1
}

if (rodada == 4) {
alert( "PARABÉNS, você ajudou o Miranha a capturar o Duende Verde! 🕸️ "); 
}
}
