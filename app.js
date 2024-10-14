alert('Boas vindas ao jogo do número secreto');
let numeroMaximo=5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numeroSecreto);
let  chute ;
let tentativas = 1;

//enquanto o chute não for igual ao numero secreto
while(chute!= numeroSecreto) {
   chute= prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
 

   // se o chute for igual ao número secreto
if (chute ==numeroSecreto ) {
    break;
    
} else{
    if (chute > numeroSecreto  )
        alert(`O número secreto é menor que ${chute}`);
    else{
        alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas +1; Para atribuir mais de 1 tentativa
    tentativas++;
}
   
}

// / Verifica se o número de tentativas é maior que 1
// Se for, atribui a string 'tentativas' à variável palavraTentativa
// Caso contrário, atribui 'tentativa'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Exibe um alerta para o usuário informando que ele descobriu o número secreto
// A mensagem inclui o número secreto e o número de tentativas, utilizando a variável palavraTentativa
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if(tentativas > 1){
//     alert( ` Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas. `);
// } else{
//     alert( ` Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa. `);
// }




