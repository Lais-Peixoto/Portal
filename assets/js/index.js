let slideCount = -1;

window.onload = function () {
    setInterval(slideMove, 5000); // aplica a função slideMove a cada 5s

    let slideWidth = document.getElementById("carrousel").offsetWidth; //tamanho da janela
    let objects = document.getElementsByClassName("slide"); // tamanho de cada slide guardado no array

    for (let i = 0; i < objects.length; i++) {
        objects[i].style.width = slideWidth;
    };
};

function slideMove() {
    let slideWidth = document.getElementById("carrousel").offsetWidth;

    if (slideCount >= 3) {
        slideCount = 0;
    } else {
        slideCount++;
    }

    let slideControl = document.getElementsByClassName("control")[slideCount];
    slideControl.classList.add("activated");
    setTimeout(function () {
      slideControl.classList.remove("activated");
    }, 5000);
    
    document.getElementsByClassName("carrousel-area")[0].style.marginLeft = "-" + (slideWidth * slideCount) + "px";
};

function changeSlide(pos) {
    slideCount = pos;
    let slideWidth = document.getElementById("carrousel").offsetWidth;

    document.getElementsByClassName("carrousel-area")[0].style.marginLeft = "-" + (slideWidth * slideCount) + "px";
};