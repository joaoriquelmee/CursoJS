//Pegando o ano atual
var agora = new Date()
var anoatual = agora.getFullYear()

//Pegando o Ano em que o usuário nasceu
var txtano = window.document.getElementById('iano')

//Objetos que terão que ficar ocultos ou ser exibidos pela função.
var pres = window.document.getElementById('textores')
var poculto = window.document.getElementById('preencher')
var divoculta = window.document.getElementById('exibir')

//Ocultando a DIV que possui a Imagem
divoculta.style.display = 'none'

//Imagens
imagensjs = window.document.getElementById('imagem')  //Ligando a var com a tag <img> para exibir as imagens de forma nativa.

function verificador() {
    var anonasc = Number(txtano.value)    //Transformando a string com Ano em Number
    var idade = anoatual - anonasc       //Efetuando o cálculo da idade
    poculto.style.display = 'none'      //Ocultando Parágrafo após a função ser acionada
    divoculta.style.display = 'block'  //Exibindo a div com imagem após a função ser acionada

    if (anonasc == 0 || anonasc > anoatual) {  //Caso o ano de nascimento esteja em branco ou seja maior que o ano atual irá mostrar uma mensagem de ERRO.
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }

    if (document.getElementById('imasc').checked) {                //Checagem se o input radio Masculino foi marcado então Sexo = Masculino
        var sexo = 'Homem'
    } else if (document.getElementById('ifem').checked) {         //Checagem se o input radio Feminino foi marcado então Sexo = Feminino
        var sexo = 'Mulher'
    }

    if (idade >=0 && idade <=7 && sexo == 'Homem') {                  //Menino de 0 até 7 anos
        pres.innerText = `Detectamos ${sexo} com ${idade} Anos.`
        imagensjs.src = 'imagens/foto-bebe-m.jpg'
    } else if (idade >=0 && idade <=7 && sexo == 'Mulher') {         //Menina de 0 até 7 anos
        pres.innerText = `Detectamos ${sexo} com ${idade} Anos.`
        imagensjs.src = 'imagens/foto-bebe-f.jpg'
    } 

    if (idade > 7 && idade <= 18 && sexo == 'Homem') {              //Jovens Masculinos entre 8 e 18 anos
        pres.innerText = `Detectamos ${sexo} com ${idade} Anos.`
        imagensjs.src = 'imagens/foto-jovem-m.jpg'
    } else if (idade > 7 && idade <= 18 && sexo == 'Mulher') {     //Jovens Mulheres entre 8 e 18 anos
        pres.innerText = `Detectamos ${sexo} com ${idade} Anos.`
        imagensjs.src = 'imagens/foto-jovem-f.jpg'
    }

    if (idade > 18 && idade < 60 && sexo == 'Homem') {             //Homens entre 18 e 60 anos
        pres.innerText = `Detectamos ${sexo} com ${idade} Anos.`
        imagensjs.src = 'imagens/foto-adulto-m.jpg'  
    } else if (idade > 18 && idade < 60 && sexo == 'Mulher') {    //Mulheres entre 18 e 60 anos
        pres.innerText = `Detectamos ${sexo} com ${idade} Anos.`
        imagensjs.src = 'imagens/foto-adulta-f.jpg'
    }

    if (idade >= 60 && sexo == 'Homem') {                      //Idosos Masculinos com idade maior ou igual a 60 anos
        pres.innerText = `Detectamos ${sexo} com ${idade} Anos.`
        imagensjs.src = 'imagens/foto-idoso-m.jpg'
    } else if (idade >= 60 && sexo == 'Mulher') {             //Mulheres Idosas com idade maior ou igual a 60 anos
        pres.innerText = `Detectamos ${sexo} com ${idade} Anos.`
        imagensjs.src = 'imagens/foto-idosa-f.jpg'
    }
}