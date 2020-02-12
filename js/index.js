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


function scrollElement(element) {
	let position  = $(element).offset().top;
	$("html,body").animate(
	{
		scrollTop: position
	},1000);
}
setTimeout(function(){ 
   whiteSlowly(".apresentacao-titulo","Olá, eu sou o Matheus",120);
}, 11000);


$("#sobre").click(()=>{
	scrollElement("#section-sobre");
});
$("#contato").click(()=>{
	scrollElement("#section-contato");
});
$("#conhecimentos").click(()=>{
	scrollElement("#section-conhecimento");
});
$("#formacoes").click(()=>{
	scrollElement("#section-formacao");
});
$("#btn-subir").click(()=>{
	scrollElement("#menu");
});
$("#portfolio").click(()=>{
	scrollElement("#section-portfolio");
});
