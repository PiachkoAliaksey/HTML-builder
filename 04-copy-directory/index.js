const fs=require('fs');
const path=require('path');


fs.mkdir(path.join(__dirname, 'files-copy'), () => {
        
});
fs.readdir(path.join(__dirname, 'files'),(err, data)=>{
    for (let val of data){
        fs.copyFile(path.join(__dirname,'files', val), path.join(__dirname, 'files-copy',val), (err) => {
            if (err) throw err;
            console.log('Данные скопированы');
        })

    }
    fs.readdir(path.join(__dirname, 'files-copy'),(err, dataT)=>{
       if(dataT.length !==data.length){
        fs.rmdir(path.join(__dirname, 'files-copy'),{ recursive: true},(err)=>{
            if (err) throw err;
            fs.mkdir(path.join(__dirname, 'files-copy'), () => {
        
            });
    
            for (let val of data){
                fs.copyFile(path.join(__dirname,'files', val), path.join(__dirname, 'files-copy',val), (err) => {
                    if (err) throw err;
                    console.log('Данные скопированы');
                })
        
            }
        })
       
        



       }

    
})
})
