let unorder= document.getElementById("jim")
let button= document.getElementById("button")
let imomo= document.getElementById("himo")
let mo= document.getElementById("mo")
let ma= document.getElementById("ma")
let me= document.getElementById("me")
let outo= document.getElementById("fini")
let coulor= ['yellow','orange','pink']
let px=['image/bird1.jpg','image/bird2.jpg','image/bird4.jpg','image/bird5.jpg','image/bird7.jpg','image/bird55.jpg'
,'image/flying.jpg','image/Capture1.PNG','image/Capture2.PNG','image/cat.jpg','image/cat1.jpg','image/cat4.jpg','image/cat5.jpg'
,'image/catd.jpg','image/catf.jpg','image/cato.jpg','image/catr.jpg','image/catt.jpg','image/dat4.jpg','image/dog.jpg'
,'image/dog1.jpg','image/dog2.jpg','image/dog4.jpg','image/dog6.jpg','image/dog7.jpg','image/dog8.jpg','image/dog9.jpg'
,'image/dog12.jpg','image/dog22.jpg','image/shoe1.jpg','image/shoe2.jpg','image/shoe3.jpg','image/shoe4.jpg','image/shoe5.jpg'
,'image/shoe6.jpg','image/shoe8.jpg','image/shoe9.jpg','image/shoe10.jpg','image/shoe11.jpg','image/shoe12.jpg','image/sleep.jpg'
]
let arr=['&#128512 OUR PRODUCTS ARE &#128512','&#128512 CURRENTLY BEING SOLD @ DISCOUNT &#128045','&#128512 AS HIGH AS 99.9% &#128045','&#128512 HURRY NOW &#128512!!!!!','&#128512 CLICK THE BUTTON BELOW NOW TO PLAY YOUR ORDER &#128045']
let count=0
let count2= 0

setInterval(()=>{
    imomo.setAttribute("src",px[count])
    if(count==41){
        count=0
    }
    mo.setAttribute("src",px[count])
    if(count==42){
        count=0
    }
    ma.setAttribute("src",px[count])
    if(count==41){
        count=0
    }
    me.setAttribute("src",px[count])
    if(count==41){
        count=0
    }
    count++
    let rand= arr[Math.floor(Math.random()*arr.length)]
    outo.innerHTML=rand

    let rando= coulor[Math.floor(Math.random()*coulor.length)]
    unorder.style.background=rando

    outo.style.color=rando
},1000)

let seyi= ()=>{
    window.open("animal.html")
}
button.addEventListener("click",seyi)