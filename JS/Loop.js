document.write("This is my lOOP in JS<br><br>");
document.write(69=="69",'<br>'); // return true IF both statement have same value
document.write(69==="69",'<br>');// return true IF both statement have same value and data type
document.write(69!="69",'<br>'); 
document.write(69!=="69",'<br>');
var num = 10;
var num2 = 15;
if(num+num2 == 20) document.write("BOTH have same value<br>");
else document.write("BOTH have diferent value<br>");
var i = 1;
var j = 1;
while( i<10){
    document.write("#############<br>");
    i++;
}
i = 1;
while( i<10){
    j = 1;
    while(j<=i){
        document.write("#");
        j++;
    }
    document.write("<br>");
    i++;    
}
i = 1;
j = 1;
for(i=10;i>0;i--){
    for(j=i;j>0;j--)document.write("#");
    document.write("<br>");
}