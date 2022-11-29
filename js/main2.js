
// FOOTER ANIMATION 
$(document).ready(function () {
    $("#btnEnzo").mouseover(function () {
        $("#couleurteh").css("transform", "scale(1.1)");
    });

    $("#btnEnzo").mouseout(function () {
        $("#couleurteh").css("transform", "scale(1)");
    });
    $("#btnEnzo2").mouseover(function () {
        $("#couleurteh2").css("transform", "scale(1.1)");
    });

    $("#btnEnzo2").mouseout(function () {
        $("#couleurteh2").css("transform", "scale(1)");
    });

})

// BOUTON + ANIMATION 
let test = [".un", ".deux", ".trois", ".quatre", ".cinq", ".six", ".sept", ".huit"]
console.log(`${test}`)
let test2 = ["allezun", "allezdeux", "alleztrois", "allezquatre", "allezcinq", "allezsix", "allezsept", "allezhuit"]
// let test3 = "opun"
// , "opdeux","optrois","opquatre","opcinq","opsix","opsept","ophuit"
// FOLD UNFOLD CLASS, verifie quand t'appuie sur un bouton. Créer les class fold et unfold suivant si t'a appuyer pour "ouvrir" le bouton ou si t'appuie pour le "fermer"
let stylesheet = document.styleSheets[1]
let animation = document.getElementById("share")
console.log(animation)

animation.addEventListener("click", function () {
    if (animation.classList.contains("unfold")) {
        for (i = 0; i < 8; i++) {

            let un = [...stylesheet.cssRules].find((r) => r.selectorText == `.share.unfold ~ ${test[i]}` )
            // console.log(stylesheet.cssRules[un])
            un.style.removeProperty("animation")
            setTimeout(() => {
                un.style.setProperty("opacity", "1")
            }, 650);
        }

        animation.classList.remove("unfold")
        setTimeout(() => {
            animation.classList.add("fold")
        }, 1);

        // console.log(animation.child[0])
        for (i = 0; i < 8; i++) {

            let un = [...stylesheet.cssRules].find((r) => r.selectorText == `.share.fold ~ ${test[i]}`)
            // console.log(stylesheet.cssRules[un])
            un.style.setProperty("animation", `${test2[i]} 0.5s reverse`)
            setTimeout(() => {
                un.style.setProperty("opacity", "0")
            }, 650);

            // un.style.setProperty("animation", `${test3} 3s`)
        }
        // console.log(animation)
        // console.log(animation.classList.contains)
    }
    else if (animation.classList.contains("fold")) {
        animation.classList.remove("fold")
        setTimeout(() => {
            animation.classList.add("unfold")
        }, 20);

        for (i = 0; i < 8; i++) {

            let un = [...stylesheet.cssRules].find((r) => r.selectorText == `.share.unfold ~ ${test[i]}`)
            // console.log(stylesheet.cssRules[un])
            un.style.setProperty("animation", `${test2[i]} 1s`)
        }
    }
    else {
        animation.classList.add("unfold")
        for (i = 0; i < 8; i++) {

            let un = [...stylesheet.cssRules].find((r) => r.selectorText == `.share.unfold ~ ${test[i]}`)
            // console.log(stylesheet.cssRules[un])
            un.style.setProperty("animation", `${test2[i]} 1s`)
            setTimeout(() => {
                un.style.setProperty("opacity", "1")
            }, 650);
        }
    }
})

// CURSEUR MOUVEMENT

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

function redirect1() {
    window.open('https://fr.wikipedia.org/wiki/Mercure');
}


function redirect2() {
    window.open('https://fr.wikipedia.org/wiki/Venus');
}


function redirect3() {
    window.open('https://fr.wikipedia.org/wiki/Mars');
}

function redirect4() {
    window.open('https://fr.wikipedia.org/wiki/Terre');
}

function redirect5() {
    window.open('https://fr.wikipedia.org/wiki/Jupiter');
}

function redirect6() {
    window.open('https://fr.wikipedia.org/wiki/Saturne');
}

function redirect7() {
    window.open('https://fr.wikipedia.org/wiki/Uranus');
}

function redirect8() {
    window.open('https://fr.wikipedia.org/wiki/Neptune');
}

// BULLE ANIMATION
// const wrapper = document.getElementById("bulle-wrapper")

// const animateBulle = x => {
//     const bulle = document.createElement("div");
//     bulle.className = "bulle";
//     bulle.style.left= `${x}px`;
//     wrapper.appendChild(bulle);
//     setTimeout(() => wrapper.removeChild(bulle), 2500);
// }

// window.onmousemove = e => animateBulle(e.clientX)
