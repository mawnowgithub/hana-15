const ready = () => {
	const petalButton = document.querySelector("#petal");
	const fallingPetals = document.querySelector("#falling");
	const scene1 = document.querySelector(".scene-1");
	const scene2 = document.querySelector(".scene-2");
	const infoButton = document.querySelector(".scene-2__info");
	const modal = document.querySelector(".modal");
	const modalContent = modal.querySelector(".modal__content");
	const modalButton = document.querySelector(".modal__button");
	let modalShowTimer = null;

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
