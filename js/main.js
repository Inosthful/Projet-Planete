
// let test1 = ["animationBouton", "animationBouton2"]

// $(document).ready(function () {
//     $(".bouton").mouseover(function () {
//         $(".bouton").css("transform", "scale(1.25)");
//         test1[1].style.setProperty("animation", "1.5s")
//     });

//     $(".bouton").mouseout(function () {
//         $(".bouton").css("transform", "scale(1)");
//         test1[2].style.setProperty("animation", "1.5s")
//     });

// })


///// CURSEUR MOUVEMENT



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 22)+"px; left: "+(e.pageX - 22)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// REDIRECTION 

function redirectTerre(){ 
    window.open('https://fr.wikipedia.org/wiki/Terre');
}

function redirectSoleil(){
    window.open('https://fr.wikipedia.org/wiki/Soleil')
}

function redirectMercure(){ 
    window.open('https://fr.wikipedia.org/wiki/Mercure');
}


function redirectVenus(){ 
    window.open('https://fr.wikipedia.org/wiki/Venus');
}


function redirectMars(){ 
    window.open('https://fr.wikipedia.org/wiki/Mars');
}

function redirectJupiter(){ 
    window.open('https://fr.wikipedia.org/wiki/Jupiter');
}

function redirectSaturne(){ 
    window.open('https://fr.wikipedia.org/wiki/Saturne');
}

function redirectUranus(){ 
    window.open('https://fr.wikipedia.org/wiki/Uranus');
}

function redirectNeptune(){ 
    window.open('https://fr.wikipedia.org/wiki/Neptune');
}

function redirectAccueil(){ 
    window.location = ('index.html');
}

particlesJS("particles-js",
{"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},
"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ffffff"},
"polygon":{"nb_sides":5},
"image":{"width":100,"height":100}},
"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,
"opacity_min":0,"sync":false}},
"size":{"value":2.5,"random":true,
"anim":{"enable":true,"speed":1,"size_min":0,"sync":false}},
"line_linked":{"enable":false,"distance":150,"color":"#ffffff",
"opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none",
"random":true,"straight":false,"out_mode":"out","bounce":false,
"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas",
"events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},
"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},
"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},
"remove":{"particles_nb":2}}},"retina_detect":true});
