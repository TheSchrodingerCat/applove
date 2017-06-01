/*
 * Archivo principal de funcionalidad de JS
 */

 (function main(){
 	var boxes = Array.from(document.getElementsByClassName("cajita"));
 	var modal = document.getElementById("box-services-modal");
 	

 	var bodyModal, close, img;
 		boxes.forEach(function(box){
 			box.addEventListener("click", function(){
 			modal.innerHTML = "";
 			bodyModal = document.createElement("div");
 			bodyModal.classList.add("modal-body");
 			bodyModal.innerHTML = box.innerHTML;
 			modal.appendChild(bodyModal);
 			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");

			var text = document.getElementById("texto" + boxes.indexOf(box).toString());
			text.classList.toggle("hide");

			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
			modal.classList.add("hide");
			text.classList.toggle("hide");
			});
		})
 	});
 })();