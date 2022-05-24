const fs=require('fs');
const path=require('path');


fs.mkdir(path.join(__dirname, 'files-copy'), () => {
        
});
fs.readdir(path.join(__dirname, 'files'),(err, data)=>{
    for (let val of data){
        console.log(val)
        fs.copyFile(path.join(__dirname,'files', val), path.join(__dirname, 'files-copy'), (err) => {
            if (err) throw err;
            console.log('Данные скопированы');
        })

    }
    
})

    



