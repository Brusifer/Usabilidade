function cancelar(){
	window.location.href = "index.html";
}

function selFilme(){
	window.location.href = "selecao-filme.html";
}

function selHorario(){
	window.location.href = "selecao-local.html";
}

function selLocal(){
	window.location.href = "selecao-cadeira.html";
}

function selecionaCadeira(id){
	if(document.getElementById(id).className.match("btn-selectable")){
		document.getElementById(id).className = "btn btn-secondary btn-success";
	}else{
		document.getElementById(id).className = "btn btn-secondary btn-selectable";
	}
}

var filme;

function filmeEscolhido(id){
	localStorage.setItem('filme', id);	
}

function recuperaFilme() {
	return localStorage.getItem('filme');

}
