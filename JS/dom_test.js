var word =  document.getElementById("test_id");
word.innerHTML+= "Hello js code";
document.write(word.innerHTML);
document.body.style.backgroundColor = "red";
document.getElementById("set_link").setAttribute("href","https://facebook.com");
var word2 = document.getElementById("set_link");
word2.innerHTML = "Wow! new link from js console";

//Event trigger
var story = document.getElementById("test_event");
//stoty.onEvent = somefunction();
story.addEventListener("click",changeText());
function changeText(){
    story.innerHTML = "Change the world . My final message . Good bye";
}
//use the following code in the console panel to see the result