const aaaa = document.querySelector(".pushable")

aaaa.addEventListener("click", function() {
    let awal = document.querySelector(".img2").style.top
    let numb = awal.replace(/\D+/g, "")
    let a = (-numb)
    console.log("ss")
    a += (-15)
    if (a < (-480)) {
        alert("menaang")
    }
    let hasil = a.toString()+"px"
    document.querySelector(".img2").style.top = hasil
    }
)