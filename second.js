//promts user to give his input
function getAndprintuserName(){
    const givenName = prompt("please enterted your name");
    const givenAge = prompt("please enterted your age");
    const givenCity = prompt("please enterted your city");
    const header = document.getElementById('chandu');
    header.innerHTML = 'hi'+ givenName +givenAge +givenCity;
}

function redirectuser(){
    // takes consent (yes/no) from user
    const userConsent = confirm("are you sure that you want to leave the pages?");
    if(userConsent){
    // opens given url in new/same tab
        window.open("https://www.google.com/",);
    }
    else{
        alert('you decided to stay back!');
    }
}
