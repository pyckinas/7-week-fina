
//1 uzduotis
function didesnis(a,b){
    if (a != b){
        if(a > b){return a}else{return b}
    }else{return "skaiciai lygus"}
    }
    console.log(didesnis(5,7))

// 2 uzduotis
for (let i=1; i<5; i++){console.log(i)}

//3 uzduotis
for (let i=0; i<6; i++){console.log(i*2)}

//4 uzduotis
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i=1; i<6; i++){console.log((rand(1,10)))}

//5 uzduotis
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let i = 1, n = 4;


while (i <= n) {
    console.log(rand(1,10));
    i += 1;
}
console.log(5)


//6 uzduotis
array=[];
for(let i=10; i<31; i++){array.push(i)}
console.log(array)

//7 uzduotis


//8 uzduotis
function lyginesuma(a,b){
    if (typeof(a) =='number' && typeof(b) =='number'){return a+b}
    else if (Array.isArray(a) && Array.isArray(b)){return a.length + b.length}
    else return "suma nelygine"
}
console.log(lyginesuma([1,2,3,4],[1,2,3,4]))

//9 uzduotis
function pirminisSkaicius(a){
    if (typeof(a) =='number' && a !=2 && a % 2!=0){return a}
    else {return "skaicius nera pirminis"}
}
console.log(pirminisSkaicius(8))

//10 uzduotis
