produtos.forEach((e) => {
	// console.log(produtos);
	criandoProdutos(e);
});

function criandoProdutos(e) {
	let grade = document.querySelector(".gradeProdu");

	let contProduto = document.createElement("section");
	let contImg = document.createElement("img");
	// let itemImg = document.createElement("img");
	let nomeProduto = document.createElement("div");
	let precoProduto = document.createElement("div");

	contProduto.classList.add("produt");
	contImg.classList.add("gradeImg");
	nomeProduto.classList.add("nomePro");
	precoProduto.classList.add("precoProd");

	contImg.src = e.prodImg;
	nomeProduto.innerHTML = e.nome;
	precoProduto.innerHTML = e.valor;

	grade.appendChild(contProduto);
	contProduto.appendChild(contImg);
	contProduto.appendChild(nomeProduto);
	contProduto.appendChild(precoProduto);
}

// Varre o meu array de objetos e pega cada item
slides.forEach((slide) => {
	// console.log(slide);
	creatSlide(slide);
});
// Varre o meu array de objetos e pega cada item

// Cria slides do carrosel
function creatSlide(slide) {
	// Elemento onde eu quero adicionar tags
	let wrapper = document.querySelector(".swiper-wrapper");

	// Criar elementos para serem introduzidos
	let creatSlide = document.createElement("div");
	let creatSlideImage = document.createElement("img");

	// Adicionando classe
	creatSlide.classList.add("swiper-slide");
	creatSlideImage.classList.add("img");

	// Adicionando valor no elemento criado
	creatSlideImage.src = slide.img;

	// Adicionando no local desejado
	wrapper.appendChild(creatSlide);
	creatSlide.appendChild(creatSlideImage);
}
// Cria slides do carrosel

/* Mostra o menu ao clicar no icone hamburguer */
let btn_mobile = document.querySelector("#btn-mobile");
let hamburguer = document.querySelector("#hamburguer");
let nav = document.querySelector("#nav");

btn_mobile.addEventListener("click", () => {
	if (btn_mobile.classList.toggle("active")) {
		nav.classList.toggle("active");
	} else {
		nav.classList.remove("active");
	}
});
/* Mostra o menu ao clicar no icone hamburguer */

/* Esconde os itens de menu ao clicar em um item da lista */
let menuItens = document.querySelectorAll("#menu a");

menuItens.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (e.returnValue == true) {
			nav.classList.remove("active");
			// carrosel.style.cssText = "display: block";
		}
	});
});
/* Esconde os itens de menu ao clicar em um item da lista */

//  inicializando o carrosel de promocoes
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 5500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
//  inicializando o carrosel de promocoes

// funcionamento do 2 carrosel de cartões
listCard.forEach((e) => {
	createCardList(e);
});

function createCardList(e) {
	let contCard = document.querySelector(".marquee__row");

	let cardImg = document.createElement("img");

	cardImg.classList.add("marquee__item");
	cardImg.classList.add("card-item");

	cardImg.src = e.img;

	contCard.appendChild(cardImg);
}

const marqueeArr = document.querySelectorAll(".marquee");
marqueeArr.forEach((marquee) => {
	const marqueeRow = marquee.querySelector(".marquee__row");
	for (let i = 0; i < 2; i++) {
		const clone = marqueeRow.cloneNode(true);
		marquee.appendChild(clone);
	}

	const marqueeMove = (dir) => {
		const rows = marquee.querySelectorAll(".marquee__row");
		const rowWidth = rows[0].getBoundingClientRect().width;
		let currentX = Number(
			getComputedStyle(marquee).getPropertyValue("--pos-x")
		);
		let newX = 0;
		switch (dir) {
			case "left":
				newX = currentX ? currentX - 1 : -rowWidth;
				newX < -2 * rowWidth && (newX = -rowWidth);
				break;
			default:
				newX = currentX ? currentX + 1 : -rowWidth;
				newX > 0 && (newX = -rowWidth);
		}
		marquee.style.setProperty("--pos-x", newX);
	};

	let speed = Number(
		marquee.getAttributeNode("data-speed").value
	);
	let direction = "left";
	let marqueeInterval = setInterval(
		marqueeMove,
		speed,
		direction
	);
	marquee.onmouseenter = () => {
		clearInterval(marqueeInterval);
	};
	marquee.onmousemove = () => {
		clearInterval(marqueeInterval);
	};
	marquee.onmouseleave = () => {
		clearInterval(marqueeInterval);
		marqueeInterval = setInterval(
			marqueeMove,
			speed,
			direction
		);
	};

	let posY = 0;
	const changeDir = () => {
		clearInterval(marqueeInterval);
		let scrollTop = document.documentElement.scrollTop;
		direction = scrollTop > posY ? "right" : "left";
		marqueeMove(direction);
		marqueeMove(direction);
		marqueeInterval = setInterval(
			marqueeMove,
			speed,
			direction
		);
		posY = scrollTop;
	};
	window.addEventListener("scroll", changeDir);
});

function updateViewportWidth() {
	document.documentElement.style.setProperty(
		"--viewport",
		window.innerWidth
	);
}
updateViewportWidth();
window.addEventListener("resize", updateViewportWidth);
// funcionamento do 2 carrosel de cartões
