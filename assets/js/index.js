let slideCount = -1;

window.onload = function () {
    setInterval(slideMove, 5000); // aplica a função slideMove a cada 5s

    let carouselWidth = document.getElementById("carrousel").offsetWidth; // Guarda o tamanho atual do carousel
    let objects = document.getElementsByClassName("slide"); // Seleciona todos os slides da aparesentação

    // Atualiza o tamanho do carousel conforme a tela vai diminuindo
    for (let i = 0; i < objects.length; i++) {
        objects[i].style.width = carouselWidth + "px";
    };
};

window.onresize = function () {
    let carouselWidth = document.getElementById("carrousel").offsetWidth; // Guarda o tamanho atual do carousel
    let objects = document.getElementsByClassName("slide"); // Seleciona todos os slides da aparesentação

    // Atualiza o tamanho do carousel conforme a tela vai diminuindo
    for (let i = 0; i < objects.length; i++) {
        objects[i].style.width = carouselWidth + "px";
    };
}

function slideMove() {
    let carouselWidth = document.getElementById("carrousel").offsetWidth;

    if (slideCount >= 3) {
        slideCount = 0;
    } else {
        slideCount++;
    }

    // Alterna a cor da bolinha para vermelho de acordo com a posição do slide
    let slideControl = document.getElementsByClassName("control")[slideCount];
    slideControl.classList.add("activated");
    setTimeout(function () {
      slideControl.classList.remove("activated");
    }, 5000);
    
    // Movimenta os slides para a esquerda 
    document.getElementsByClassName("carrousel-area")[0].style.marginLeft = "-" + (carouselWidth * slideCount) + "px";
};

function changeSlide(pos) {
    slideCount = pos;
    let carouselWidth = document.getElementById("carrousel").offsetWidth;

    // Muda o slide quando a bolinha é clicada mostrando o slide da posição selecionada
    document.getElementsByClassName("carrousel-area")[0].style.marginLeft = "-" + (carouselWidth * slideCount) + "px";
};


function toggleMobile () {

    let menu = document.getElementById("menu-mobile");

    if(menu.style.display == "none" || menu.style.display == ""){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
    

}



