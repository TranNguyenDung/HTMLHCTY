const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const {URL} = require('url');
const path = require("path");

const file = fs.createWriteStream("file.jpg");
const request = http.get("https://www.alinco.vn/wp-content/uploads/2013/06/DR-138HT-HE-DR-438HE.png", 
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
        const code = await downLoadFile("https://www.alinco.vn/wp-content/uploads/2013/06/DR-138HT-HE-DR-438HE.png");
        console.log(code);
    }
    catch(err){
        console.log(err);
    }
    
    try{
        await downLoadFile("https://i.pinimg.com/564x/d2/35/2b/d2352b3547cdfe8dd91283387bde8dfc.jpg");
        await downLoadFile("https://i.pinimg.com/564x/98/2c/75/982c75580735f73b5344cfaa0221c08d.jpg");
    }
    catch(err){
        console.log(err);
    }
    console.log("End");
}
main();