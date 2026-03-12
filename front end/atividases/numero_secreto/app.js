alert("Bem Vindo do Jogo do Numero Secreto ");
let numeroMaximo = prompt("Escolha o Numero Limite para o jogo")
let numeroSecreto = parseInt(Math.random()* numeroMaximo) + 1;
let chute;
let tentativas = 1;

//enquanto (while)
while(chute != numeroSecreto){
   let chute = prompt(`Escolha o numero entre 1 e ${numeroMaximo}`);
    //Se (if) meu numero secreto e igual ao meu chute,faça algo
if (chute == numeroSecreto){
        break;

    }else{//senao 
       tentativas++;
         if(chute > numeroSecreto){
           alert(`O numero Secreto e menor ${chute}`);
    }
         else{
           alert(`O numero Secreto e maior ${chute}`);}
}
}
//operador ternario
  let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    alert(`Parabens, voce descobriu o numero secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`);
console.log (numeroSecreto);