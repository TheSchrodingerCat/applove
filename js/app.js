/*
 * Archivo principal de funcionalidad de JS
 */

 (function main(){
 	var boxes = Array.from(document.getElementsByClassName("cajita"));
 	var modal = document.getElementById("box-services-modal");
 	

 	var bodyModal, close, img;
 		boxes.forEach(function(box){
 			box.addEventListener("click", function(){

 				modal.innerHTML = ""; //si no lo pongo no se ve el botón close....

 				var text = document.getElementById("texto" + boxes.indexOf(box).toString());
				text.classList.toggle("hide");

				//tamaño de imagen en modal (no resulta)
				var img = document.getElementById("images" + boxes.indexOf(box).toString());
				img.classList.add("big-image");

 				bodyModal = document.createElement("div");
 				bodyModal.classList.add("modal-body");
 				bodyModal.innerHTML = box.innerHTML;
 				modal.appendChild(bodyModal);
 				modal.classList.remove("hide");
				close = document.createElement("div");
				close.classList.add("close");

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