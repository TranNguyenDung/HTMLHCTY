const http = require('http'); // or 'https' for https:// URLs
const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const {URL} = require('url');
const path = require("path");

const file = fs.createWriteStream("file.jpg");
const request = https.get("https://www.alinco.vn/wp-content/uploads/2013/06/DR-138HT-HE-DR-438HE.png", 
    function(response) {
        response.pipe(file);
    }
);

function downLoadFile(fileUrl){
    return new Promise((res,rej) => {
            const request = http.get(fileUrl,(response) => {
                const fileUrlObj = new URL(fileUrl);
                const fileName = path.basename(fileUrlObj.pathname);
                const file2 = fs.createWriteStream(fileName);
                console.log(response.statusCode);
                response.pipe(file2);
                //if(response.statusCode === 200) res(response.statusCode);
                if(response.statusCode === 200){// Làm Kỹ, để dùng chương trình
                    res();
                    return;  
                } 
                else rej(`${fileName}-${response.statusMessage}`);
                
                //res(true);
                //trong hàm vẩy chạy, nên phải có code để dừng lại
            });
        }
    );
}

async function main(){
    console.log("Start");
    try{
        //const code = await downLoadFile("http://pngimg.com/uploads/autumn_leaves/autumn_leaves_PNG3601.png");
        //console.log(code);
    }
    catch(err){
        console.log(err);
    }
    
    try{
        await downLoadFile("http://pngimg.com/uploads/bamboo/bamboo_PNG2.png");
        await downLoadFile("http://pngimg.com/uploads/cotton/cotton_PNG23.png");
        await downLoadFile("http://pngimg.com/uploads/cotton/cotton_PNG16.png");
        await downLoadFile("http://pngimg.com/uploads/fir_tree/fir_tree_PNG3693.png");
    }
    catch(err){
        console.log(err);
    }
    console.log("End");
}
main();