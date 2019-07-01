var altura = 0
var largura = 0


function ajusta(){
	altura = window.innerHeight
	largura = window.innerWidth
	//console.log(largura, altura)
}


ajusta()

function pos(){
var posiX = Math.floor(Math.random() * largura) - 90
var posiY = Math.floor(Math.random() * altura) - 90

	posiX = posiX < 0 ? 0 : posiX
	posiY = posiY < 0 ? 0 : posiY


console.log(posiX, posiY)

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = 'mosquito1'
mosquito.style.left = posiX + 'px'
mosquito.style.top = posiY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)

}



function tam(){



		var mosc = Math.floor(Math.random() * 3)

		switch(mosc)
		{
			case 0
				return 'mosquito1'
			case 1:
				return 'mosquito2'
			case 2:
				return 'mosquito3'
		
		}







}
//tamanho()

	