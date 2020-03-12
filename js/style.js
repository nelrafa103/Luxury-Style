 
function myFunction(){
  document.getElementById("producto_1.1").href="images/CamisasTops/product-10.jpg";
  document.getElementById("producto_1.2").src="images/CamisasTops/product-10.jpg"; 

  document.getElementById("producto_2_1").href="images/CamisasTops/product-9.jpg";
  document.getElementById("producto_2_2").src="images/CamisasTops/product-9.jpg";

  document.getElementById("producto_3.1").href="images/CamisasTops/product-22.jpg";
  document.getElementById("producto_3.2").src="images/CamisasTops/product-22.jpg";

  document.getElementById("producto_4.1").href="images/CamisasTops/product-23.jpg";
  document.getElementById("producto_4.2").src="images/CamisasTops/product-23.jpg";

  document.getElementById("producto_5.1").href="images/CamisasTops/product-24.jpg";
  document.getElementById("producto_5.2").src="images/CamisasTops/product-24.jpg";

  document.getElementById("producto_6.1").href="images/CamisasTops/product-26.jpg";
  document.getElementById("producto_6.2").src="images/CamisasTops/product-26.jpg";

  document.getElementById("producto_7.1").href="images/CamisasTops/product-27.jpg";
  document.getElementById("producto_7.2").src="images/CamisasTops/product-27.jpg";

  document.getElementById("producto_8.1").href="images/CamisasTops/product-28.jpg";
  document.getElementById("producto_8.2").src="images/CamisasTops/product-28.jpg";
  };
;





function myFunction9(){
  var x = document.getElementById("producto_8.2")
  };
;
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .10s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

