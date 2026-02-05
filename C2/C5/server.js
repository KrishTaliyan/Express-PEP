const fs = require("fs").promises;

async function merge(){
    try{
        const data1 = await fs.readFile("file1.txt","UTF-8");
        const data2 = await fs.readFile("file1.txt","UTF-8");

        const mergedata = data1 + data2;

        await fs.writeFile("output.txt",mergedata);
        console.log("File merged Successfully");
    }
    catch(error){
        console.log("Error: ",error);
    }
}

merge();