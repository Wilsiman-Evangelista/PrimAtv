const subtitulos = document.querySelectorAll('h2');
const topicos = new Array();
subtitulos.forEach(subtitulo => {
	topicos.push(subtitulo.textContent);
	const we = document.createElement('a');
	we.setAttribute('name',subtitulo.textContent);
	subtitulo.append(we);
	
	const inicio = document.createElement('a');
	inicio.setAttribute('href',`#`);
	inicio.textContent = ' - ' + 'Voltar ao Índice';
	subtitulo.append(inicio);
});

lista = document.querySelector('ol');
topicos.forEach(topico => {
	const item = document.createElement('li');
	item.textContent = topico;
	lista.append(item);
	const ws = document.createElement('a');
	ws.setAttribute('href',`#${topico}`);
	ws.textContent = ' - ' + topico;
	item.append(ws);
});
