const buttonStart = document.querySelector(".pushable");

buttonStart.addEventListener('click', () => {
    const homePage = document.querySelector('.home');
    const gamePage = document.querySelector('.game');
    const body = document.querySelector('body');
    homePage.style.display = 'none';
    gamePage.style.display = 'block';

    body.addEventListener('keydown', event => {
        if (event.keyCode === 90) {
            let awal = document.querySelector(".img2").style.top
            let numb = awal.replace(/\D+/g, "")
            let a = (-numb)
            a += (-15)
            if (a < (-480)) {
                alert("Red Team menaang")
            }
            let hasil = a.toString() + "px"
            document.querySelector(".img2").style.top = hasil
        }
        if (event.keyCode === 77) {
            let awal = document.querySelector(".img3").style.top
            let numb = awal.replace(/\D+/g, "")
            let a = (-numb)
            a += (-15)
            if (a < (-588)) {
                alert("Blue Team menaang")
            }
            let hasil = a.toString() + "px"
            document.querySelector(".img3").style.top = hasil
        }
    })

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