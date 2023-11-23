function mediaAluno(nota1, nota2){
    let media = (nota1 + nota2) / 2;
    
    if(media >= 6){
        console.log('Aprovado! A média do aluno: ' + media)
    }else if(media < 6){
        console.log('Reprovado! A média do aluno: ' + media)
    }
}

mediaAluno(6, 6)