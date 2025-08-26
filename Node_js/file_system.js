import { readFile,writeFile } from "fs";

readFile('data.txt','utf8',(err,data)=>{
    if(err){
    console.error('Error reading file:',err);
    return;
    }
    console.log('File content:', data);

});

/*writeFile('output.txt','New content added to file',(err)=>{
    if(err){
        console.error('Error writing file:',err);
        return;
    }
    console.log('File content:', data);


})*/