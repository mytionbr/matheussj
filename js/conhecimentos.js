let tbody = $(".tabelaConhecimentos");
mostraConhecimentos("FRONT-END");
let primeiroBtn =  $(".btn-filtro:first");
primeiroBtn.addClass("btn-focus");

let btn = $(".btn-filtro");
btn.click(function(){
	btn.removeClass("btn-focus");
	$(this).toggleClass("btn-focus");
	btnAcionado = $(this).text();
	tbody.children().remove();
	mostraConhecimentos(btnAcionado);
});



function mostraConhecimentos(element){
	let frontEnd = criaObjeto("front-end");
	let backEnd = criaObjeto("back-end");
	let idiomas = criaObjeto("idiomas");

	if (element == "FRONT-END") {
		$.each( frontEnd, function( i, conhecimento ){
			criaLinha(conhecimento);

		});

	}else if(element == "BACK-END"){
		$.each( backEnd, function( i, conhecimento ){
			criaLinha(conhecimento);
		});
	}else if(element == "LÍNGUAS"){
		$.each( idiomas, function( i, conhecimento ){
			criaLinha(conhecimento);
		});
	}
	$(".btnModal").click((e)=>{

		let id = e.target.parentNode.id;
		mostraModal(element,id);
		
	});
}

function criaLinha(conhecimento) {
	
	let tr = $("<tr>");

	let img = $("<img>").attr("src",conhecimento.img);
	let tdImg = $("<td>");
	tdImg.append(img);

	let tdNome = $("<td>").text(conhecimento.nome);
	let btn = $("<button>").text("Habilidades");
	btn.addClass("btnModal");
	

	tr.addClass("linhaConhecimento");
	tr.append(tdImg);
	tr.append(tdNome);
	
	tr.append(btn);
	tr.attr("id",conhecimento.nome);
	

	tbody.append(tr);

}
function criaObjeto(name){
	let lista = [];
	if (name == "front-end") {
		let html = new Object();
		html.nome = "HTML";
		html.img = "img/html.png";
		html.nivel = "I";
		html.lista = ["Tags Html5.","Bons conhecimentos da sintaxe.","Código semântico.","Construção de páginas.","Tabelas e Formulários.","Mídias.","BootsTrap."];

		let css = new Object();
		css.nome = "CSS";
		css.img = "img/css.png";
		css.nivel = "I";
		css.lista = ["FlexBox.","Seletores css.","Posicionamento.","BootsTrap.","Responsividade.","Estilização de componentes Html."];

		let js = new Object();
		js.nome = "JavaScript";
		js.img = "img/javascript.png";
		js.nivel = "B";
		js.lista = ["Manipulação do DOM.","Seletores.","Sintaxe.","Conhecimentos medianos de Ecmascript 6.","Orientação a objetos."];

		let jquery = new Object();
		jquery.nome = "Jquery";
		jquery.img = "img/jquery.png";
		jquery.nivel = "B"; 
		jquery.lista = ["Seletores.","Manipulação do DOM.","Eventos.","Criação e manipulação de elementos.","Animações."];

		lista.push(html,css,js,jquery);
		return lista;
	} else if (name == "back-end") {
		let java = new Object();
		java.nome = "Java";
		java.img = "img/java.png";
		java.nivel = "I";
		java.lista = ["Conhecimentos medianos das Bibliotecas Java.","Coleções.","Conexão no BD através do Hirbenete.","Orientação a objetos.","Servlet.","Conhecimento medianos de JSF,CDI e JPA.","Conhecimento básico de Spring MVC.","Básico do maven.","Eclipse e netbeans."];

		let mysql = new Object();
		mysql.nome = "Mysql";
		mysql.img = "img/mysql.png";
		mysql.nivel = "B";
		mysql.lista = ["Criação de Bancos de dados.","Inserção de dados.","Exclusão de dados.","Alteração de dados."];

		lista.push(java,mysql);
		return lista;
	}else if (name == "idiomas") {
		
		let ingles = new Object();
		ingles.nome = "Inglês";
		ingles.img = "img/england.png";
		ingles.nivel = "B";
		ingles.lista = ["Conversação básica.","Leitura básico.","Escrita básico."];

		let portugues  = new Object();
		portugues.nome = "Português";
		portugues.img = "img/brazil.png";
		portugues.nivel = "A";
		portugues.lista = ["Redação.","Leitura.","Escrita.","Conversação."];

		lista.push(ingles,portugues);
		return lista;
	}
}
/*modal*/


function mostraModal(element,id) {
	let frontEnd = criaObjeto("front-end");
	let backEnd = criaObjeto("back-end");
	let idiomas = criaObjeto("idiomas");

	if (element == "FRONT-END") {
		$.each( frontEnd, function( i, conhecimento ){
			if (id == conhecimento.nome) {
				acionaModal();
				adicionaHabilidades(conhecimento.lista);
			}

		});

	}else if(element == "BACK-END"){
		$.each( backEnd, function( i, conhecimento ){
			if (id == conhecimento.nome) {
				acionaModal();
				adicionaHabilidades(conhecimento.lista);
			}
		});
	}else if(element == "LÍNGUAS"){
		$.each( idiomas, function( i, conhecimento ){
			if (id == conhecimento.nome) {

				acionaModal();
				adicionaHabilidades(conhecimento.lista);
			}
		});
	}
}
function adicionaHabilidades(lista) {
	let ul = $(".listaHabilidades");
	ul.children().remove();
	$.each( lista, function( i, conhecimento ){
		let habilidade = conhecimento; 
		let li = $("<li>").text(habilidade);
		ul.append(li);	

	});
}
function acionaModal() {
	$(".fundo").fadeIn(1000);
	$(".modal").fadeIn(1000);
}
$('.btnFecha').click(()=>{
	$(".fundo").fadeOut(1000);
	$(".modal").fadeOut(1000)}
	);