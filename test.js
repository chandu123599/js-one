//operations is javascript

//arithmetic is operation

let numfive = 20;
let numTwo =20;
//console.log(numfive + numTwo)
//console.log(numOne + numTwo)
//console.log(numOne - numTwo)
//console.log(numOne * numTwo)
//console.log(numOne / numTwo)

//increment and decrement operators
let x = 10
//console.log(x++)= 10
//console.log(++x)=11
//console.log(--x)= 9
//console.log(x--)= 10
//console.log(x++ + 10) = 10+10=20
//console.log(--x + 10)= 9+10=19
//console.log(x-- + 10)=10+10=20
//console.log(x)= 10
//console.log(x + 10)=10+10=20
//console.log(2+x)= 2+10=12
let a =50
let b=100
//console.log(--a+b--)=149
//console.log(a++)=50
//console.log(++a)=51
//console.log(--a)=49
//console.log(a--)=50

//arithmetic is operation

//assg 
let d =3;
//console.log(d =d+3);=3+3=6
//console.log(d =d-3);=6-3=3
//console.log(d =d/3)//;=3*3=9
//console.log(d =d*3)//;=9/3=3
//assg

// objects
/*let personName = {name:'redmi',rate:'10000', isswamy: true};
console.log(personName.isswamy);

for(let key in personName){
    console.log(key+':' +personName[key]);
}
  
let Name ={
    name : 'uday',
    studying : 'inter',
    village : 'velivolu',
    isworking : false,
};
let anotherName = Name;
anotherName.Name = 'test';
console.log(Name);
console.log(anotherName);*/
//objects

//arrays
/*let heroName = ['rana','NTR','mahesh','ram charan','prabhas',1,false,];
let nums = [1,2];
console.log(nums[1])
for(let bye in heroName){
    console.log(bye+':' +heroName[bye]);
}
console.log( heroName)
for(let car of heroName){
    console.log(car);
}*/

// push ,pop, shift, unshift

/*let mysasi = [1,2,3,4,5,6,7,];

mysasi.push(10)  //pushes an element as last index
console.log(mysasi)

mysasi.pop()    //removes an element from last index 
console.log(mysasi)

mysasi.shift()  //removes an element from frist index
console.log(mysasi)

mysasi.unshift(0)  //pushes an element as frist index
console.log(mysasi)*/
/*let personsData = [
    {name:'Kohli', city:'Banglore'}, 
    {name:'Rohit', city:'Banglore'}, 
    {name:'Rohit',city:'Banglore'}, 
    {name:'Rohit',city:'Goa'}, 
    {name:'Dhawan', city:'Jaipur'},
    {name:'Dhawan', city:'Delhi'},
    {name:'Dhawan', city:'Jaipur'},
    {name:'Chahal', city:'Delhi'},
    {name:'Varun', city:'Nagaland'},
    {name:'Kapil', city:'Hyderabad'},
    {name:'Varun', city:'Nagaland'},
    {name:'Rohit', city:'Vijayawada'}, 
    {name:'Kohli', city:'Hyderabad'}, 
    {name:'Kohli', city:'wHyderabad'} 
 ];
 let uniqueNames = [];
 let uniquecity =[];
 for(let i=1; i< name.length; i++)
 {
     if (uniqueNames.indexOf(personsData[i]) === 1)
 {
        uniqueNames.push(personsData[i]);
 if (uniquecity.indexOf(personsData[i])=== 1)
 {
         uniquecity.push(personsData[i]);
}
 }
}
console.log(uniqueNames);
console.log(uniquecity);*/

/*let movieName = ['bheeshma','darbar','yevadu','dhruva','rangasthalam', 'yevadu', 'bheeshma'];
let uniqueName =[];
for (let i=0; i < movieName.length; i++){
    if(uniqueName.indexOf(movieName[i])=== -1){
        uniqueName.push(movieName[i]);
    }
};
console.log(uniqueName);*/
//printsomethingtoconsole('hi')
/*function  printsomethingtoconsole(){
    console.log(hi)
}
printsomethingtoconsole('age')
function  printsomethingtoconsole(){
    console.log(age)
}*/

//function is a js
/*let persons = ['uday','sai', 'mahi','gani','uday','sai', 'mahi','gani'];
let ages = ['22','25','26','27','22','25','26','27'];
let countrys = ['usa','uk','us','india','usa','uk','us','india'];


let filteredpersons = filterArray(persons);
let filteredcountrys= filterArray(countrys);
let filteredages  = filterArray(ages);

function removeDuplicatesInArray(array){
    let uniquearray =[];
    for(let i=0 ; i<array.length; i++){
        if(uniquearray.indexOf(array[i])=== -1){
        uniquearray.push(array[i])
    }
}
    return uniquearray;
}

function  removedfirstandlastindex(array){
    array.pop();
    //array.shift();
    return array;
}
function filterArray(array){
    let removeduplicatesInArray = removeDuplicatesInArray(array);
    let finalArray = removedfirstandlastindex(removeduplicatesInArray);
    return finalArray;
}
console.log(filteredpersons)
console.log(filteredcountrys)
console.log(filteredages)*/
//function 

/*let names = ['uday','sai', 'mahi','gani','uday','sai', 'mahi','gani'];
let age = ['22','25','26','27'];
let country = ['usa','uk','us','india'];

let filteredName = filterArray(names);
let filteredage  = filterArray(age);
let filteredcountry= filterArray(country);

function oddindexinarray(array){
    let uniquearray =[];
    for(let i=0 ; i<array.length; i++){
        if(uniquearray.indexOf(array[i])=== -1){
        uniquearray.push(array[i])
    }
}
    return uniquearray;
}

function reverseelementsinarray(array){
    let uniquearray =[];
    for(let i=0 ; i<array.length; i++){
        if(uniquearray.indexOf(array[i])=== -1){
        uniquearray.push(array[i])
        array.reverse()
        
    }
}

    return array;
}
function filterArray(array){
    let oddwithindexInArray = oddindexinarray(array);
    let finalArray=  reverseelementsinarray(oddwithindexInArray);
    return finalArray;
}
console.log(filteredName)
console.log(filteredage)
console.log(filteredcountry)*/

function getoneThing(){
    let thing = document.querySelector('.mydiv > p> span');
    console.log(thing);
}
function getEveryThing(){
    let thing = document.querySelector('.mydiv > p');
    console.log(thing);
}
getoneThing()
getEveryThing()

/*function changeparacontent(){
let para =document.getElementById('mypara');
para.innerHTML = 'operation of javascript';
para.style.color = 'back'
para.style.backgroundColor = 'green'
}
function fetchbytag(){
    let headers =document.getElementsbyTagName('h5');
    const headerone = header[0];
    header.one.innerHTML='changed header'
    function fetchbytag(){
        let headers =document.getElementsbyTagName('boy');
        let header = Elements[1];
        console.log(hearder);
        header.style.color='red'
}
fetchbytag();*/