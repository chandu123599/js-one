function changeparacontent(){
    let para = document.getElementsById('mypara')
    console.log(para)
    para.innerHTML = 'this is content from javascripts';
    para.style.color = 'red';
    para.style.backgroundColor = 'yellow'

}
function fetchByTag(){
    let headers = document.getElementsByTagName("h4");
    const headerone = headers[0];
    headerone.innerHTML = 'changed header';
}
function fetchByClass(){
    let elements = document.getElementsByTagName("play");
    let header = elements[1];
    console.log(header);
    header= 'red';
} 

fetchByClass();
/*function changeparacontent(){
    let para =document.getElementById('mypara');
    para.innerHTML = 'operation of javascript';
    para.style.color = 'black'
    para.style.backgroundColor = 'green'
    }*/