var img_link = ["https://c.ndtvimg.com/2019-08/k8519lf8_bugatti-centodieci-unveiled-at-pebble-beach-car-show_625x300_17_August_19.jpg",
    "https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349",
"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/911-road-3629a.jpg?itok=m6x23Go0",
"https://www.telegraph.co.uk/content/dam/news/2017/11/11/Lam1_trans_NvBQzQNjv4BqnAdySV0BR-4fDN_-_p756cVfcy8zLGPV4EhRkjQy7tg.jpg?imwidth=450",
"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/luc_0644.jpg?itok=1d-t57zz",
"https://www.burnettcars.co.uk/dist/img/hero/hero-1-1920.jpg"];
var pos = 0;
var left = document.getElementById("l");
var right = document.getElementById("r");
var num = document.getElementById("num");
left.addEventListener("click",slide1());
right.addEventListener("click",slide2());

function slide1(){
    pos--;
    if(pos==-1)pos=5;
    var img = document.getElementById("pic");
    img.setAttribute("src",img_link[pos]);
    num.innerHTML= pos;
}
function slide2(){
    pos++;
    if(pos==6)pos=0;
    var img = document.getElementById("pic");
    img.setAttribute("src",img_link[pos]);
    num.innerHTML= pos;
}