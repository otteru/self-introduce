const contactElement = document.querySelector("#contact h2");
const velogGithubElement = document.querySelector("#contact ul");

window.addEventListener("scroll", function(){
	let value = window.scrollY;
	
	if(value > 3100){
		contactElement.style.animation = "grow 0.8s linear";
		velogGithubElement.style.animation = "grow 0.8s linear";
	}else{
		contactElement.style.animation = "grow-out 0.5s linear";
		velogGithubElement.style.animation = "grow-out 0.5s linear";
	};
})