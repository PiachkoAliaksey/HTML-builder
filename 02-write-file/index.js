const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;


const output = fs.createWriteStream(path.join(__dirname,'file.txt'));
let text='';

stdout.write('Привет! напечатай какой-нибудь текст\n');
stdin.on('data', data=>{
if(data.toString().trim()==='exit') return  process.exit();
text+=data.toString();
fs.writeFile(path.join(__dirname,'file.txt'), text, (error) => {
    if (error) return console.error(error.message);
    console.log('Текст добавлен');
   });  
});
process.on('SIGINT', () => {
    process.exit();
  });
process.on('exit',()=>stdout.write('До встречи!'))


