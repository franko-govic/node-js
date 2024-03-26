import fs from 'fs';

export default function delayedReadFileSync(text, sec) {
  setTimeout(() => {
    const data = fs.readFileSync(text,
    { encoding: 'utf8', flag: 'r' });
    console.log(data);
  }, sec * 1000);



  
}

delayedReadFileSync("../Zadatak2/random.txt", 3);

