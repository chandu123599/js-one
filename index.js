/*let input = document.getElementById("result");
function displayvalue(val){
    input.value = input.value+val;
}
function solve(){
    let solvedResult = eval(input.value);
    input.value = solvedResult;
}
function clearvalues(){
    input.value="";
}*/

/*setTimeout(function(){
    let id = document.getElementById("test");
    id.innerHTML = ("see the mage")
}, 5000)

let mysetInterval= setInterval(function(){
    console.log('this is a printsone second');
},1000 )

function clearmyinterval(){
    clearinterval(myInterval);
}*/

// 25.12.20 input //
/*let button = document.getElementById("myBtn");
button.addEventListener("click", function(){

    let inputFromHTML = document.getElementById("myInput");
    let para = document.getElementById('para');
    if(isNaN(inputFromHTML.value)){
        para.innerHTML = "please enter a valid number";
        para.style.color = "red"
        return;
    }
    if(inputFromHTML.value >= 25){
        para.innerHTML = "you are eligible to vote";
        para.style.color = "green";
    } 
    else {
        para.innerHTML = "sorry you are not eligible to vote.you can in" +(25 - inputFromHTML.value)+"year";
        para.style.color="red"
    }
})*/


//CLOCK//
function showClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let amOrpm = "AM";

    if(hour > 12){
        hour = hour - 12;
        amOrpm = "pm";
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let time = hour + ":" + minute + ":" +second + "" + amOrpm;
    document.getElementById("myClock").innerHTML = time;
    setTimeout(showClock, 1000)
}


showClock();