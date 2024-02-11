const ready = () => {
	const mainContainer = document.querySelector(".main-container");
	const petalButton = document.querySelector("#petal");
	const fallingPetals = document.querySelector("#falling");
	const scene1 = document.querySelector(".scene-1");
	const scene2 = document.querySelector(".scene-2");
	const infoButton = document.querySelector(".scene-2__info");
	const modal = document.querySelector(".modal");
	const modalContent = modal.querySelector(".modal__content");
	const modalButton = document.querySelector(".modal__button");
	let modalShowTimer = null;
	const frontGreet = document.querySelector("#front-greet");
	const modalGreet = document.querySelector("#modal-greet");
	const modalGreetTitle = modalGreet.querySelector(".modal-greet__title");
	const modalGreetBody = modalGreet.querySelector(".modal-greet__body");
	const genreOptions = {
		n: "family",
		h: "man",
		m: "woman",
	};

	bodyGreet = (plural) => {
		const custom = plural ? "su" : "tu";
		const text = `Estos son los datos de nuestro evento. Esperamos contar con ${custom} asistencia.`;
		return text;
	};

	getUrlData = () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		let name = urlParams.get("name");
		const genre = urlParams.get("gen");
		name = name?.replaceAll("_", " ");
		const plural = name?.search(" y ") > -1 || name?.search("Flia. ") > -1;
		console.log(plural);
		if (name) {
			frontGreet.innerHTML = name;
			modalGreetTitle.innerHTML = name;
			mainContainer.classList.add("greet-visible");
			modalGreetBody.innerHTML = bodyGreet(plural);
		}

		if (genre) {
			mainContainer.classList.add(genreOptions[genre]);
		}
	};
	getUrlData();

	petalButton.addEventListener("click", () => {
		fallingPetals.style.visibility = "visible";
		scene1.classList.add("animating");
		petalButton.classList.add("active");
		const playScene2 = setTimeout(() => {
			scene2.classList.add("animating");
			clearTimeout(playScene2);
		}, 1500);
		const animateInfo = setTimeout(() => {
			infoButton.classList.add("active");
			clearTimeout(animateInfo);
			scene2.classList.add("active");
		}, 2500);
	});

	infoButton.addEventListener("click", () => {
		modal.classList.add("active");
		modalShowTimer = setTimeout(() => {
			modalContent.classList.add("active");
			clearInterval(modalShowTimer);
			modalShowTimer = null;
		}, 300);
		infoButton.classList.add("pressed");
	});

	modalButton.addEventListener("click", () => {
		modalContent.classList.remove("active");
		modalShowTimer = setTimeout(() => {
			modal.classList.remove("active");
			clearInterval(modalShowTimer);
			modalShowTimer = null;
		}, 400);
	});
};

window.addEventListener("DOMContentLoaded", ready);
