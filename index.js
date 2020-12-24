let input = document.getElementById("result");
function displayvalue(val){
    input.value = input.value+val;
}
function solve(){
    let solvedResult = eval(input.value);
    input.value = solvedResult;
}
function clearvalues(){
    input.value="";
}
