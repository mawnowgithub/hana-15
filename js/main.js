const ready = () => {
	console.log("ready");

	const petalButton = document.querySelector("#petal");
	const fallingPetals = document.querySelector("#falling");
	const scene1 = document.querySelector(".scene-1");
	const scene2 = document.querySelector(".scene-2");
	petalButton.addEventListener("click", () => {
		fallingPetals.style.visibility = "visible";
		scene1.classList.add("animating");
		petalButton.classList.add("active");
		const playScene2 = setTimeout(() => {
			scene2.classList.add("animating");
			clearTimeout(playScene2);
		}, 1500);
	});
};

window.addEventListener("DOMContentLoaded", ready);
