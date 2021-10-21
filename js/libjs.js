//const arr = [1,2,4,5,6]; 
const arr = {age:4, name: "avb"}; 
function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

var datapr = "";
function printDev(str){
    datapr = str;
    console.log(datapr);
}

function printDev2(){
    console.log(datapr);
}

//module.exports = arr;
module.exports = {
    add,
    sub,
    printDev,
    printDev2,
};

// module.exports = {
//     add: (a,b) => return a + b;
//     sub,
//     printDev,
//     printDev2,
// };


