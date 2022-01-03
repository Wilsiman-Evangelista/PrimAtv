document.querySelector("#ddd").addEventListener("change", buscaDadosApi);
function buscaDadosApi(evento) {
	fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`)
	.then(resposta => resposta.json())
	.then(dados => {
		cidade = dados.cities;
		lista();
	});
}

function lista() {
	lista = document.querySelector('ul');
	cidade.forEach(cidade => {
		item = document.createElement('li');
		item.textContent = cidade;
		lista.append(item);
	});
}
