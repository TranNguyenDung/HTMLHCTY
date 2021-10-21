const fs = require("fs");

fs.readFile("./js/data1.txt" ,(err,data) => {
    console.log("data đọc thường: " + data);
    console.log(data);

});
console.log("END");


new Promise((res1,rej1) => {
    fs.readFile("./js/data1.txt",(err1,data1) =>{
        if(err1) rej1(err1);//rej1: Để truyền xuống catch
        else res1(data1);//res1: Để truyền xuống then
    });
}).then((data) => {
    return new Promise((res2,rej2) => {
        fs.readFile("./js/data2.txt",(err2,data2) =>{
            if(err2) rej2(err2);//rej2: Để truyền xuống catch tổng
            else res2(data2);//res2: Để truyền xuống then
        });
    }).then((data2) => {
        console.log("data2: " + data2);
    })
}).catch((err) =>{
    console.log("err: " + err);
});


function readFileAsync(){
    return new Promise((res,rej) => {
        fs.readFile("./js/data1.txt",(err1,data1) =>{
            if(err1) rej(err1);//rej1: Để truyền xuống catch
            else res(data1);//res1: Để truyền xuống then
        });
    });
}

console.log("-----------------------------");
readFileAsync("./js/data1.txt")
.then((data) => {
    return readFileAsync("./js/data2.txt")
    .then((data2) => {console.log("data3: " + data2);})
})
.catch((err) =>{
    console.log("err: " + err);
});




console.log("await-----------------------------");
async function main(){
    // const promise1 = readFileAsync("./js/data1.txt");
    // promise1.then((data) => {

    // });
    // const promise1 =await readFileAsync("./js/data1.txt"); // Chạy tuần tự
    // const promise2 =await readFileAsync("./js/data2.txt");
    // const promise2 =await readFileAsync("./js/data2.txt");
    // const promise2 =await readFileAsync("./js/data2.txt");
    // const promise2 =await readFileAsync("./js/data2.txt");

    // const promise1 = readFileAsync("./js/data1.txt");
    // const promise2 = readFileAsync("./js/data2.txt");
    // const promise3 = readFileAsync("./js/data2.txt");
    // const promise4 = readFileAsync("./js/data2.txt");
    // const promise5 = readFileAsync("./js/data2.txt");
    // const datas = await Promise.all([promise1,promise2,promise3,promise4,promise5]);// Chạy Song Song

    const datas = await Promise.all([ // Chạy tuần tự song song nhiều task, kiểu ít code có chờ chạy hết task
        readFileAsync("./js/data1.txt"),
        readFileAsync("./js/data2.txt"),
        readFileAsync("./js/data2.txt"),
        readFileAsync("./js/data2.txt"),
        readFileAsync("./js/data2.txt"),
    ]);// Chạy Song Song


    // Tương tự Flutter...
    const datas = Promise.all([ // Chạy tuần tự song song nhiều task, kiểu ít code không, không quan tâm kết thúc
        readFileAsync("./js/data1.txt"),
        readFileAsync("./js/data2.txt"),
        readFileAsync("./js/data2.txt"),
        readFileAsync("./js/data2.txt"),
        readFileAsync("./js/data2.txt"),
    ]);// Chạy Song Song
}

main();

console.log("END-----------------------------");


