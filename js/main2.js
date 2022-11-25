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





////////////////////////////////





// classList[0].style+="animation : allezun 3s reverse"
// style+=

// var test = document.getElementById("share")
// console.log(test)
// fonctionnement max width, utilisation while ?, pourquoi le if marche pas quand je suis a min width 501 px ???
// $('.share').on('click', function () {
//     $('.share').on('click', function () {
//     if (window.matchMedia("(min-width: 500px)").matches) {
//         $(function () {
//             var flag = 0;
//             if (flag == 0) {

//                 // $(this).siblings('.one').animate({
//                 //     top: '160px',
//                 //     left: '50%',
//                 // }, 200);

//                 // $(this).siblings('.two').delay(200).animate({
//                 //     top: '260px',
//                 //     left: '40%'
//                 // }, 200);

//                 // $(this).siblings('.three').delay(300).animate({
//                 //     top: '260px',
//                 //     left: '60%'
//                 // }, 200);
//                 $(this).siblings('.un').delay(200).animate({
//                     top: '70px',
//                     left: '-85vw'
//                 }, 500);
//                 // $(this).siblings('.one').animate({
//                 //     top: '160px',
//                 //     left: '50%',
//                 // }, 200);
//                 $(this).siblings('.deux').delay(200).animate({
//                     top: '70px',
//                     left: '-75vw'
//                 }, 500);

//                 $(this).siblings('.trois').delay(200).animate({
//                     top: '70px',
//                     left: '-65vw'
//                 }, 500);

//                 $(this).siblings('.quatre').delay(200).animate({
//                     top: '70px',
//                     left: '-55vw'
//                 }, 500);

//                 $(this).siblings('.cinq').delay(200).animate({
//                     top: '70px',
//                     left: '-45vw'
//                 }, 500);

//                 $(this).siblings('.six').delay(200).animate({
//                     top: '70px',
//                     left: '-35vw'
//                 }, 500);

//                 $(this).siblings('.sept').delay(200).animate({
//                     top: '70px',
//                     left: '-25vw'
//                 }, 500);

//                 $(this).siblings('.huit').delay(200).animate({
//                     top: '70px',
//                     left: '-15vw'
//                 }, 500);


//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeIn(200);
//                 flag = 1;
//             }


//             else {
//                 $('.un').animate({
//                     top: '0.2vw',
//                     left: '-13.5vw'
//                 }, 500);
//                 $('.deux').animate({
//                     top: '0.2vw',
//                     left: '-13.5vw'
//                 }, 500);
//                 $('.trois').animate({
//                     top: '0.2vw',
//                     left: '-13.5vw'
//                 }, 500);
//                 $('.quatre').animate({
//                     top: '0.2vw',
//                     left: '-13.5vw'
//                 }, 500);
//                 $('.cinq').animate({
//                     top: '0.2vw',
//                     left: '-13.5vw'
//                 }, 500);
//                 $('.six').animate({
//                     top: '0.2vw',
//                     left: '-13.5vw'
//                 }, 500);
//                 $('.sept').animate({
//                     top: '0.2vw',
//                     left: '-13.5vw'
//                 }, 500);
//                 $('.huit').animate({
//                     top: '0.2vw',
//                     left: '-13.5vw'
//                 }, 500);
//                 // $('.one, .two, .three, .un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').animate({
//                 //     top: '0.2vw',
//                 //     right: '80%'
//                 // }, 800);

//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeOut(500);
//                 flag = 0;
//             }
//         });
//     }

//     else if (window.matchMedia("(max-width: 600px)").matches) {
//         console.log("600")
//         $(function () {
//             var flag = 0;
//             if (flag == 0) {
//                 $(this).siblings('.un').delay(200).animate({
//                     top: '1px',
//                     left: '-21vw'
//                 }, 500);

//                 $(this).siblings('.deux').delay(200).animate({
//                     top: '70px',
//                     left: '-20vw'
//                 }, 500);

//                 $(this).siblings('.trois').delay(200).animate({
//                     top: '120px',
//                     left: '-16vw'
//                 }, 500);

//                 $(this).siblings('.quatre').delay(200).animate({
//                     top: '160px',
//                     left: '-11vw'
//                 }, 500);

//                 $(this).siblings('.cinq').delay(200).animate({
//                     top: '160px',
//                     left: '-5vw'
//                 }, 500);

//                 $(this).siblings('.six').delay(200).animate({
//                     top: '120px',
//                     left: '0.1vw'
//                 }, 500);

//                 $(this).siblings('.sept').delay(200).animate({
//                     top: '70px',
//                     left: '3.5vw'
//                 }, 500);

//                 $(this).siblings('.huit').delay(200).animate({
//                     top: '1px',
//                     left: '6vw'
//                 }, 500);


//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeIn(200);
//                 flag = 1;
//             }


//             else {
//                 $('.un').animate({
//                     top: '0.2vw',
//                     left: '-108.5vw'
//                 }, 500);
//                 $('.deux').animate({
//                     top: '0.2vw',
//                     left: '-108.5vw'
//                 }, 500);
//                 $('.trois').animate({
//                     top: '0.2vw',
//                     left: '-18.5vw'
//                 }, 500);
//                 $('.quatre').animate({
//                     top: '0.2vw',
//                     left: '-18.5vw'
//                 }, 500);
//                 $('.cinq').animate({
//                     top: '0.2vw',
//                     left: '-18.5vw'
//                 }, 500);
//                 $('.six').animate({
//                     top: '0.2vw',
//                     left: '-18.5vw'
//                 }, 500);
//                 $('.sept').animate({
//                     top: '0.2vw',
//                     left: '-18.5vw'
//                 }, 500);
//                 $('.huit').animate({
//                     top: '0.2vw',
//                     left: '-18.5vw'
//                 }, 500);
//                 // $('.one, .two, .three, .un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').animate({
//                 //     top: '0.2vw',
//                 //     right: '80%'
//                 // }, 800);

//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeOut(500);
//                 flag = 0;
//             }
//         });
//     }

//     else if (window.matchMedia("(max-width: 800px)").matches) {
//         console.log("800")
//         $(function () {
//             var flag = 0;
//             if (flag == 0) {
//                 // $(this).siblings('.one').animate({
//                 //     top: '160px',
//                 //     left: '50%',
//                 // }, 200);

//                 // $(this).siblings('.two').delay(200).animate({
//                 //     top: '260px',
//                 //     left: '40%'
//                 // }, 200);

//                 // $(this).siblings('.three').delay(300).animate({
//                 //     top: '260px',
//                 //     left: '60%'
//                 // }, 200);
//                 $(this).siblings('.un').delay(200).animate({
//                     top: '1px',
//                     left: '-50vw'
//                 }, 500);

//                 $(this).siblings('.deux').delay(200).animate({
//                     top: '70px',
//                     left: '-200vw'
//                 }, 500);

//                 $(this).siblings('.trois').delay(200).animate({
//                     top: '120px',
//                     left: '-16vw'
//                 }, 500);

//                 $(this).siblings('.quatre').delay(200).animate({
//                     top: '160px',
//                     left: '-11vw'
//                 }, 500);

//                 $(this).siblings('.cinq').delay(200).animate({
//                     top: '160px',
//                     left: '-5vw'
//                 }, 500);

//                 $(this).siblings('.six').delay(200).animate({
//                     top: '120px',
//                     left: '0.1vw'
//                 }, 500);

//                 $(this).siblings('.sept').delay(200).animate({
//                     top: '70px',
//                     left: '3.5vw'
//                 }, 500);

//                 $(this).siblings('.huit').delay(200).animate({
//                     top: '1px',
//                     left: '6vw'
//                 }, 500);


//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeIn(200);
//                 flag = 1;
//             }


//             else {
//                 $('.un').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.deux').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.trois').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.quatre').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.cinq').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.six').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.sept').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.huit').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 // $('.one, .two, .three, .un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').animate({
//                 //     top: '0.2vw',
//                 //     right: '80%'
//                 // }, 800);

//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeOut(500);
//                 flag = 0;
//             }
//         });
//     }

//     else {
//         $(function () {
//             var flag = 0;
//             $('.share').on('click', function () {
//                 if (flag == 0) {
//                     // $(this).siblings('.one').animate({
//                     //     top: '160px',
//                     //     left: '50%',
//                     // }, 200);

//                     // $(this).siblings('.two').delay(200).animate({
//                     //     top: '260px',
//                     //     left: '40%'
//                     // }, 200);

//                     // $(this).siblings('.three').delay(300).animate({
//                     //     top: '260px',
//                     //     left: '60%'
//                     // }, 200);
//                     $(this).siblings('.un').delay(200).animate({
//                         top: '1px',
//                         left: '-21vw'
//                     }, 500);

//                     $(this).siblings('.deux').delay(200).animate({
//                         top: '100px',
//                         left: '-19vw'
//                     }, 500);

//                     $(this).siblings('.trois').delay(200).animate({
//                         top: '180px',
//                         left: '-16vw'
//                     }, 500);

//                     $(this).siblings('.quatre').delay(200).animate({
//                         top: '220px',
//                         left: '-10vw'
//                     }, 500);

//                     $(this).siblings('.cinq').delay(200).animate({
//                         top: '220px',
//                         left: '-4.5vw'
//                     }, 500);

//                     $(this).siblings('.six').delay(200).animate({
//                         top: '180px',
//                         left: '2vw'
//                     }, 500);

//                     $(this).siblings('.sept').delay(200).animate({
//                         top: '100px',
//                         left: '5.5vw'
//                     }, 500);

//                     $(this).siblings('.huit').delay(200).animate({
//                         top: '1px',
//                         left: '7vw'
//                     }, 500);


//                     $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeIn(200);
//                     flag = 1;
//                 }


//                 else {
//                     $('.un').animate({
//                         top: '0.2vw',
//                         left: '-6.5vw'
//                     }, 500);
//                     $('.deux').animate({
//                         top: '0.2vw',
//                         left: '-6.5vw'
//                     }, 500);
//                     $('.trois').animate({
//                         top: '0.2vw',
//                         left: '-6.5vw'
//                     }, 500);
//                     $('.quatre').animate({
//                         top: '0.2vw',
//                         left: '-6.5vw'
//                     }, 500);
//                     $('.cinq').animate({
//                         top: '0.2vw',
//                         left: '-6.5vw'
//                     }, 500);
//                     $('.six').animate({
//                         top: '0.2vw',
//                         left: '-6.5vw'
//                     }, 500);
//                     $('.sept').animate({
//                         top: '0.2vw',
//                         left: '-6.5vw'
//                     }, 500);
//                     $('.huit').animate({
//                         top: '0.2vw',
//                         left: '-6.5vw'
//                     }, 500);
//                     // $('.one, .two, .three, .un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').animate({
//                     //     top: '0.2vw',
//                     //     right: '80%'
//                     // }, 800);

//                     $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeOut(500);
//                     flag = 0;
//                 }
//             });
//         });
//     }
// })



// if (window.matchMedia("(min-width: 1500px)").matches) {
//     $(function () {
//         var flag = 0;
//         $('.share').on('click', function () {
//             if (flag == 0) {
//                 // $(this).siblings('.one').animate({
//                 //     top: '160px',
//                 //     left: '50%',
//                 // }, 200);

//                 // $(this).siblings('.two').delay(200).animate({
//                 //     top: '260px',
//                 //     left: '40%'
//                 // }, 200);

//                 // $(this).siblings('.three').delay(300).animate({
//                 //     top: '260px',
//                 //     left: '60%'
//                 // }, 200);
//                 $(this).siblings('.un').delay(200).animate({
//                     top: '1px',
//                     left: '-21vw'
//                 }, 500);
//                 console.log($(this).siblings('.un'))
//                 $(this).siblings('.deux').delay(200).animate({
//                     top: '100px',
//                     left: '-19vw'
//                 }, 500);

//                 $(this).siblings('.trois').delay(200).animate({
//                     top: '180px',
//                     left: '-16vw'
//                 }, 500);

//                 $(this).siblings('.quatre').delay(200).animate({
//                     top: '220px',
//                     left: '-10vw'
//                 }, 500);

//                 $(this).siblings('.cinq').delay(200).animate({
//                     top: '220px',
//                     left: '-4.5vw'
//                 }, 500);

//                 $(this).siblings('.six').delay(200).animate({
//                     top: '180px',
//                     left: '2vw'
//                 }, 500);

//                 $(this).siblings('.sept').delay(200).animate({
//                     top: '100px',
//                     left: '5.5vw'
//                 }, 500);

//                 $(this).siblings('.huit').delay(200).animate({
//                     top: '1px',
//                     left: '7vw'
//                 }, 500);


//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeIn(200);
//                 flag = 1;
//             }


//             else {
//                 $('.un').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.deux').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.trois').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.quatre').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.cinq').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.six').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.sept').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.huit').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 // $('.one, .two, .three, .un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').animate({
//                 //     top: '0.2vw',
//                 //     right: '80%'
//                 // }, 800);

//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeOut(500);
//                 flag = 0;
//             }
//         });
//     });
// }
// else if(window.matchMedia("(min-width: 500px)").matches){
//     $(function () {
//         var flag = 0;
//         $('.share').on('click', function () {
//             if (flag == 0) {
//                 // $(this).siblings('.one').animate({
//                 //     top: '160px',
//                 //     left: '50%',
//                 // }, 200);

//                 // $(this).siblings('.two').delay(200).animate({
//                 //     top: '260px',
//                 //     left: '40%'
//                 // }, 200);

//                 // $(this).siblings('.three').delay(300).animate({
//                 //     top: '260px',
//                 //     left: '60%'
//                 // }, 200);
//                 $(this).siblings('.un').delay(200).animate({
//                     top: '1px',
//                     left: '-21vw'
//                 }, 500);

//                 $(this).siblings('.deux').delay(200).animate({
//                     top: '70px',
//                     left: '-20vw'
//                 }, 500);

//                 $(this).siblings('.trois').delay(200).animate({
//                     top: '120px',
//                     left: '-16vw'
//                 }, 500);

//                 $(this).siblings('.quatre').delay(200).animate({
//                     top: '160px',
//                     left: '-11vw'
//                 }, 500);

//                 $(this).siblings('.cinq').delay(200).animate({
//                     top: '160px',
//                     left: '-5vw'
//                 }, 500);

//                 $(this).siblings('.six').delay(200).animate({
//                     top: '120px',
//                     left: '0.1vw'
//                 }, 500);

//                 $(this).siblings('.sept').delay(200).animate({
//                     top: '70px',
//                     left: '3.5vw'
//                 }, 500);

//                 $(this).siblings('.huit').delay(200).animate({
//                     top: '1px',
//                     left: '6vw'
//                 }, 500);


//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeIn(200);
//                 flag = 1;
//             }


//             else {
//                 $('.un').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.deux').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.trois').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.quatre').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.cinq').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.six').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.sept').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.huit').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 // $('.one, .two, .three, .un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').animate({
//                 //     top: '0.2vw',
//                 //     right: '80%'
//                 // }, 800);

//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeOut(500);
//                 flag = 0;
//             }
//         });
//     });
// }
// else if(window.matchMedia("(min-width: 800px)").matches){
//     $(function () {
//         var flag = 0;
//         $('.share').on('click', function () {
//             if (flag == 0) {
//                 // $(this).siblings('.one').animate({
//                 //     top: '160px',
//                 //     left: '50%',
//                 // }, 200);

//                 // $(this).siblings('.two').delay(200).animate({
//                 //     top: '260px',
//                 //     left: '40%'
//                 // }, 200);

//                 // $(this).siblings('.three').delay(300).animate({
//                 //     top: '260px',
//                 //     left: '60%'
//                 // }, 200);
//                 $(this).siblings('.un').delay(200).animate({
//                     top: '1px',
//                     left: '-50vw'
//                 }, 500);

//                 $(this).siblings('.deux').delay(200).animate({
//                     top: '70px',
//                     left: '-200vw'
//                 }, 500);

//                 $(this).siblings('.trois').delay(200).animate({
//                     top: '120px',
//                     left: '-16vw'
//                 }, 500);

//                 $(this).siblings('.quatre').delay(200).animate({
//                     top: '160px',
//                     left: '-11vw'
//                 }, 500);

//                 $(this).siblings('.cinq').delay(200).animate({
//                     top: '160px',
//                     left: '-5vw'
//                 }, 500);

//                 $(this).siblings('.six').delay(200).animate({
//                     top: '120px',
//                     left: '0.1vw'
//                 }, 500);

//                 $(this).siblings('.sept').delay(200).animate({
//                     top: '70px',
//                     left: '3.5vw'
//                 }, 500);

//                 $(this).siblings('.huit').delay(200).animate({
//                     top: '1px',
//                     left: '6vw'
//                 }, 500);


//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeIn(200);
//                 flag = 1;
//             }


//             else {
//                 $('.un').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.deux').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.trois').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.quatre').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.cinq').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.six').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.sept').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 $('.huit').animate({
//                     top: '0.2vw',
//                     left: '-6.5vw'
//                 }, 500);
//                 // $('.one, .two, .three, .un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').animate({
//                 //     top: '0.2vw',
//                 //     right: '80%'
//                 // }, 800);

//                 $('.un, .deux, .trois, .quatre, .cinq, .six, .sept, .huit').delay(500).fadeOut(500);
//                 flag = 0;
//             }
//         });
//     });
// }






// function redirectAccueil(){
//     window.open('page.html');
// }

