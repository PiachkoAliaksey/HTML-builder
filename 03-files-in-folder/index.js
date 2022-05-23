const fs=require('fs');
const path=require('path');
const { stdin, stdout } = process;

let directory=path.join(__dirname,'secret-folder');
let arr=[];
let arr1=[];


fs.readdir(directory,{ withFileTypes: true },(err,files)=>{
    if(err){
        console.log(err.message)
    }else{
        arr=files.filter(val=>val.isFile());
        arr.forEach(val=>{
    let name=path.parse(val.name);
    let staTT=0;
    fs.stat(path.join(__dirname,'secret-folder',val.name),(err,stats)=>{
        if (err) throw err;
        staTT=stats.size;
        console.log(`${name.name} - ${name.ext.slice(1)} - ${staTT/1000}kb`)

    })
    

    
      })

 }
});








