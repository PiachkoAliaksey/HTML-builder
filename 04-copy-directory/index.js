const fs=require('fs');
const path=require('path');


/*fs.copyFile(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy'), (err) => {
    if (err) throw err;
    console.log('Данные скопированы');
})*/

fs.mkdir(path.join(__dirname, 'files-copy'), () => {
        
});
fs.readdir(path.join(__dirname, 'files'),(err)=>{
    fs.copyFile(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy'), (err) => {
    if (err) throw err;
    console.log('Данные скопированы');
})

    
})


