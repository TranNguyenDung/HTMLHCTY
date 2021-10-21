console.log("Print Log");
console.log("JavaScript");
console.log("* * * * * *");
console.log("*         *");
console.log("*         *");
console.log("*         *");
console.log("* * * * * *");
console.log('This is a "programmable" languge');

let info = "abc";
console.log(info);

info = 123456;
console.log(info);

// var: Khai báo biến lúc nào thì nó xuất hiện luôn trong code
// let kiểu khai báo giống trong C, khai báo có toàn cục có cục bộ

let a = "abc";
let b = "abc";
if(a==b){
    console.log('info');
}
console.log("---------------------");
console.log(a[0] + 123 + a[1] + a[2]);

let isExits = true;
let isNotExits = false;
let number = 5;
let isOddNumbet = number % 2 == 0;
let hashCode = "bcv123";
let result = hashCode == "bcv123";

console.log(hashCode);
console.log(result);

console.log("---------------------");
// mang chuoi
let postList = ["123","512",1231,135];
console.log(postList);
console.log(postList.length);
console.log("postList[0].length: " + postList[0].length);
console.log(postList[2].length);
console.log(postList[2]);
console.log(postList[1].length);
console.log(postList[1]);
// ---> đối với số không có length, đối với mãng có length, đối với string có length



console.log("---------------------");
let pos =
{
    id: "1231254",
    title: "What is this!!!",
    headline: "It is develop",
    likes: [1,2,4,5],

}
console.log("pos.likes index: " + pos.likes[3]);
console.log("pos.headline index: " + pos.headline);

console.log("---------------------");
let age = 25;
if(typeof age == "number"){
    console.log("age: " + "number");
}
console.log("pos: " + typeof pos);

let aa = 5;
let bb = 6;
let sumab = aa + bb;
console.log("Sum aa + bb = " + sumab);
let firstName = "Dũng";
let lastName = "Trần Nguyên";
let fullName = lastName + " " + firstName;
console.log("fullName: " + fullName);

console.log("---------------------");
let aaa = 5;
let bbb = "5";
if(aaa === bbb){
    console.log("aaa === bbb");
}
else{
    console.log("aaa !== bbb");
}

if(aaa == bbb){
    console.log("aaa == bbb");
}
else{
    console.log("aaa != bbb");
}

console.log("---------------------");
//Swith case hổ trở cá string
const value = 3;
switch(value){
    case - 1:
        console.log("Reverse");
    break;

    default:
        console.log("default");
        break;
}
console.log("---------------------");
let y = 2004;
let m = 2;
let d = 2;

let isLeapYear = y % 400 === 0 || (y % 4 === 0 && y % 100 != 0);

let isValid = false;
if(y < 1){
    isValid = false;
    //return;
}

let maxDay = 0;
if(m===1 || m===3 || m===5  || m===7  || m===8  || m===10 || m===12) maxDay = 31;
else if (m===4 || m===6|| m===9|| m===1) maxDay = 30;
else if(m===2) maxDay = isLeapYear ? 29 : 28;
if(maxDay > 0){
    isValid = false;
    //return;
}
isValid = d < 1 || d > maxDay;
console.log(isValid + "+" + isLeapYear);

console.log("---------------------");
let uids = [1,2,3,4,5,6,7,8];
for(let i=0;i<uids.length;i++){
    console.log("uids[" + i + "]" + uids[i]);
}

for(let uid of uids){
    console.log("uids[]" + uid);
}


console.log("---------------------");//==============================
let N = 9;
let NL = 1;
for(i=1;i<=N;i++){
    NL *= i;
    console.log(i);
}
console.log("N!:= " & NL);

console.log("---------------------");

const words = [
    { en: "one", content: "một" },
    { en: "two", content: "hai" }
  ];
  
function getWordByEn(enWord) {
    enWord = enWord.toLowerCase();

    for (let word of words) {
        if (enWord === word.en) return word;
    }

    return null;
}
  
  console.log(getWordByEn("two"));

  console.log("---------------------");

function checkYearLap(y)
{
    let isLeapYear = y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);
    return isLeapYear;
}

//function checkDayVaid(y,m,d){
let checkDayVaid = function(y,m,d){
//let checkDayVaid = (y,m,d) =>{
    let isValid = false;

    if (y < 1) {
        isValid = false;
        return isValid;
    }
    let isLeapYear = y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);
    let maxDay = 0;

    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) maxDay = 31;
    else if (m === 4 || m === 6 || m === 9 || m === 11) maxDay = 30;
    else if (m === 2) maxDay = isLeapYear ? 29 : 28;

    if ((maxDay = 0)) {
        isValid = false;
        return isValid;
    }
    console.log(maxDay);
    isValid = d < 1 || d > maxDay;
    return isValid;
}

console.log(checkYearLap(2028));
console.log("checkDayVaid: " + checkDayVaid(2021,2,32));

console.log("---------------------");

let firstName2 = "Trang";
let lastName2 = "Trần";
let email = "trang.tran@gmail.com";
let text2 = `Chào ${firstName2 + " " + lastName2} thông tin khôi phục mật khẩu đã được gửi đến email ${email}`;
console.log(text2);

console.log("---------------------");
class Post {
    constructor() {
      this.id = 0;
      this.title = "Chính sách cá nhân";
      this.description = "";
      this.content = "";
      this.isPublished = true;
    }
  
    toString() {
      return this.id + ":" + this.title;
    }
  }

let post = new Post();
//post.title = "23918273";
console.log(post);
console.log(post.title);
console.log("post.toString(): " + post.toString());

console.log("---------------------");

class Article{
    constructor(){
        this._id = 0;
        this.title = "Lập Trình  React.js";
        this.headline = "";
        this.seoDescription = "";
        this.Description = "";
        this.content = "";
        this.isPublished = false;
        this.createdAt = false;
        this.slug = "";
    }
    toTiengViewKhongDau(){
        this.slug = nonAccentVietnameseLower(this.title);
        //this.slug = this.slug.replace(/\s+/g,"-");
        this.slug = this.slug.replace(/\s{1}/g,"-");
    }

}

const nonAccentVietnameseLower = (str) => {
    str = str.toLowerCase();

    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');

    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư

    return str;
};
let article = new Article();
article.toTiengViewKhongDau();
console.log(article);

console.log("---------------------");
let array = [1,2,4,5,6,7,8];
array.forEach((va) => {
        console.log(va);
        console.log("adasd");
    } 
);

// -----------------------------------------------------
// Get value from lib file JavaScript
const x = require("./libjs");
console.log("require: " + x.add(1,2));
x.printDev("2243");
x.printDev2();

//const utils = require("./utils");
const {URL} = require("url");
let urlString = "https://www.google.com.vn/search?q=util+nodejs+l%C3%A0+g%C3%AC&sxsrf=AOaemvLK8E2hPJeJWqkvcO4k8GHWf-jGCw%3A1634802240046&ei=QBpxYc2gAtiKr7wPrL-Z-AY&oq=util+nodejs+l%C3%A0+g%C3%AC&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCCEQoAE6BAgjECc6CAgAEIAEELEDOggILhCABBCxAzoRCC4QgAQQsQMQgwEQxwEQowI6BQguEIAEOgsILhCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6BggjECcQEzoHCAAQsQMQQzoHCC4QsQMQQzoECAAQQzoRCC4QgAQQsQMQgwEQxwEQrwE6CgguEMcBENEDEEM6BQgAEIAEOgcILhCxAxAKOgcIABCABBAKOgQILhAKOgYIABAWEB5KBAhBGABQurHOAVi86s4BYK_1zgFoAHACeAGAAYgBiAHYCJIBAzEuOZgBAKABAcABAQ&sclient=gws-wiz";
let urlObj = new URL(urlString);
console.log(urlObj.hostname);
console.log(urlObj.protocol);

const {protocol,hostname} = urlObj;

const pesion = {age:15,name:"Vinh"};
const name = pesion.name;
const age = pesion.age;
const {name,age} = pesion;


