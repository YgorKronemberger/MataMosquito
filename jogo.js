var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var dificuldadeMosquito = 1500

//--------Dificuldade ---------- > Continuar
var nivel1 = window.location.search
nivel1 = nivel1.replace('?', '')
//alert(nivel1)
	
switch(nivel1){
	case 'normal':
		dificuldadeMosquito = 1500
	break
	
	case 'dificil':
		dificuldadeMosquito = 750
	break
	
	case 'MuitoDificil':
		dificuldadeMosquito = 500
	break


}


//---------------------------------------

function ajusta(){
	altura = window.innerHeight
	largura = window.innerWidth
	//console.log(largura, altura)


}


ajusta()

var cronometro = setInterval(
	function(){
	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criar)
	
		window.location.href = 'Venceu.html'
	}else{
	document.getElementById('tempo').innerHTML = tempo
	}

}, 1000)

	//document.getElementById('tempo').innerHTML = tempo

//--------------------------------

function pos(){

	if(document.getElementById('mosquito'))

	{

		document.getElementById('mosquito').remove()

			if (vidas > 3){

				window.location.href = 'GameOver.html'

			}
				else{
				document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

				vidas++
			}
			

	}



var posiX = Math.floor(Math.random() * largura) - 90
var posiY = Math.floor(Math.random() * altura) - 90

	posiX = posiX < 0 ? 0 : posiX
	posiY = posiY < 0 ? 0 : posiY


console.log(posiX, posiY)

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanho() + ' ' + lado()
mosquito.style.left = posiX + 'px'
mosquito.style.top = posiY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
	this.remove()
	//document.getElementById('mosquito').remove()
}

document.body.appendChild(mosquito)


}

//--------------------------------------

function tamanho(){

	var classe = Math.floor(Math.random() * 3)

		switch(classe){

			case 0:
				return 'mosquito1'
			case 1:
				return 'mosquito2'
			case 2:
				return 'mosquito3'
		}


}

//------------------------

function lado(){

	var classe = Math.floor(Math.random() * 2)

			switch(classe){

			case 0:
				return 'ladoA'
			case 1:
				return 'ladoB'
		}


}