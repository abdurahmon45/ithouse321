document.getElementById("login").style.display = "none"


document.getElementById("btn").onclick = function () {
    document.getElementById("login").style.display = "block"
}


document.getElementById("x").onclick = function () {
    document.getElementById("login").style.display = "none"
}





let index = 1

carousel(index)
function carousel(a) {
    let slides = document.getElementsByClassName("slide")
    let lines = document.getElementsByClassName("line")


    if (a > slides.length) {
        index = 1
    }


    if (a < 1) {
        index = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"

    }

    for (let i = 0; i < lines.length; i++) {
        lines[i].className = lines[i].className.replace("active", "")

    }

    slides[index - 1].style.display = "block"
    lines[index - 1].className = lines[index - 1].className + " active"
}


function resultSlider(a) {
    carousel(index = index + a)
}



function resultLine(a) {
    carousel(index = a)
}




//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa


let clieonts = document.querySelectorAll('.number');
 let time = 3000
clieonts.forEach((clieonts) => {
    let start = 0

    let end = clieonts.getAttribute('data-val')

     let durastion = time / end

    let result = setInterval(function () {
        start += 1
        clieonts.textContent = start
         if (start == end) {
             clearInterval(result)
         }
     }, durastion)
});



/*ssssssssssssssssssssssss */



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//555555555555555555555555555555555555555555555

carousel(index)
function carousel(a){
    let god = document.getElementsByClassName("god")

    if(a>god.length){
        index = 1
    }

    if(a<1){
        index = god.length
    }
   for(let i=0; i<god.length; i++){
    god[i].style.display = "none"
   }
  
   god[index - 1].style.display ="block"
}

function resultSlider(a){
 carousel(index= index+a)
}




  //    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa



  window.onload = () => {
    document.querySelectorAll('.skill-per').forEach(skill => {
        let end = parseInt(skill.getAttribute('data-percent'));

        skill.style.width = `${end}%`;

        let start = 0;

        let percent = skill.querySelector('.percent-bg');

        let result = setInterval(() => {
            if(start<end){
                start ++
                percent.innerHTML = `${start}%`;
            }else{
                clearInterval(result);
            }
        },1000/end)
    })
}

/*
(

// let a = 1

// carousel(a)
// function carousel(a) {
//     let clic = document.getElementsByClassName("clic-card")


//     if (a > clic.length) {
//         a = 1
//     }


//     if (a < 1) {
//         index = clic.length
//     }

//     for (let i = 0; i < clic.length; i++) {
//         clic[i].style.display = "none"

//     }

//     for (let i = 0; i < lines.length; i++) {
//         lines[i].className = lines[i].className.replace("active", "")

//     }

//     clic[a - 1].style.display = "block"
//     lines[a - 1].className = lines[a - 1].className + " active"
// }


// function resultSlider(a) {
//     carousel(a = a + a)
// }



// function resultLine(a){
//     carousel(a = a)
// }   


)*/