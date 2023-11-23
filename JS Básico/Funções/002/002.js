let area = document.getElementById('area');

function entrar(){

    let nome = prompt('Digite seu nome:');

    if(nome === '' || nome === null){
        area.innerHTML = 'Clique no botão para acessar';
    }else{
        area.innerHTML = 'Bem vindo ' + nome + " ";

        //Criando um item pelo JS
        let btnSair = document.createElement('button');
        btnSair.innerText = "Sair da conta";

        //Colocando um atributo nesse botao
        btnSair.onclick = sair;

        area.append(btnSair);
    }

}

function sair(){
    alert('Até logo!');
    area.innerHTML = "Você saiu!";
}
