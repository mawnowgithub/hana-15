const ready = () => {
	const petalButton = document.querySelector("#petal");
	const fallingPetals = document.querySelector("#falling");
	const scene1 = document.querySelector(".scene-1");
	const scene2 = document.querySelector(".scene-2");
	const infoButton = document.querySelector(".scene-2__info");
	const modal = document.querySelector(".modal");
	const modalButton = document.querySelector(".modal__button");

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
		console.log("click");
		modal.classList.add("active");
		infoButton.classList.add("pressed");
	});

	modalButton.addEventListener("click", () => {
		modal.classList.remove("active");
	});
};

window.addEventListener("DOMContentLoaded", ready);
