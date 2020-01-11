function whiteSlowly(element,text,tempo) {
	let word = "";
	let letter = text.split('').reverse();
	let id = setInterval(function(){
		if (letter.length <= 0) return clearInterval(id);
		let next = letter.pop();
		word += next;
		$(element).text(word);
	},tempo);
		
}		
whiteSlowly(".apresentacao-titulo","Olá, eu sou o Matheus",100);