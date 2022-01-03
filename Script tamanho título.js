document.addEventListener('DOMContentLoaded', pc_h);
let fontSize = 100
let increaseDecrease = 10
let elementBody = document.querySelector('body');
let algo = 1;

function pc_h(){
	ech = document.querySelector(`h${algo}`);
	if(ech != null){
		criarBotao();
	} else if (ech == null && algo < 7) {
		algo += 1;
		pc_h();
	}
}

function criarBotao(){
	b = document.createElement('button');
	b.innerHTML = '+';
	b.addEventListener('click',function(){
	
	});
	st = document.querySelector(`h${algo}`);
	st.before(b);
	
	b.addEventListener('click', function(event) {
		if(fontSize <= 170){
			fontSize = fontSize + increaseDecrease;
			elementBody.style.fontSize = fontSize + '%';
		}
	});
	
	//........................
	
	bm = document.createElement('button');
	bm.innerHTML = '-';
	bm.addEventListener('click',function(){
	
	});
	st1 = document.querySelector(`h${algo}`);
	st1.before(bm);
	
	bm.addEventListener('click', function(event) {
		if(fontSize > 100){
			fontSize = fontSize - increaseDecrease;
			elementBody.style.fontSize = fontSize + '%';
		}
	});
	
	
}
