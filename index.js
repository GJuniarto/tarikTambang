const buttonStart = document.querySelector(".pushable");
const buttonReset = document.querySelector(".pushable2");


const homePage = document.querySelector('.home');
const gamePage = document.querySelector('.game');
const body = document.querySelector('body');
const winner = document.querySelector('.winner');
const spanWinnerResult = document.querySelector('.winner-result');

buttonStart.addEventListener('click', () => {
    homePage.style.display = 'none';
    gamePage.style.display = 'block';

    body.addEventListener('keydown', event => {
        if (event.keyCode === 90) {
            let awal = document.querySelector(".img2").style.top
            let numb = awal.replace(/\D+/g, "")
            let a = (-numb)
            if (a < (-480)) {
                gamePage.style.display = 'none';
                spanWinnerResult.innerText = 'Red Team Win';
                spanWinnerResult.style.color = 'red';
                winner.style.display = 'block';
            } else {
                a += (-15)
            }
            let hasil = a.toString() + "px"
            document.querySelector(".img2").style.top = hasil
        }
        if (event.keyCode === 77) {
            let awal = document.querySelector(".img3").style.top
            let numb = awal.replace(/\D+/g, "")
            let a = (-numb)
            if (a < (-620)) {
                gamePage.style.display = 'none';
                spanWinnerResult.innerText = 'Blue Team Win';
                spanWinnerResult.style.color = 'blue';
                winner.style.display = 'block';
            } else {
                a += (-15)
            }
            let hasil = a.toString() + "px"
            document.querySelector(".img3").style.top = hasil
        }
    })

})

buttonReset.addEventListener('click', () => {
    location.reload();

})

// aaaa.addEventListener("click", function() {
//     let awal = document.querySelector(".img2").style.top
//     let numb = awal.replace(/\D+/g, "")
//     let a = (-numb)
//     console.log("ss")
//     a += (-15)
//     if (a < (-480)) {
//         alert("menaang")
//     }
//     let hasil = a.toString()+"px"
//     document.querySelector(".img2").style.top = hasil
//     }
// )