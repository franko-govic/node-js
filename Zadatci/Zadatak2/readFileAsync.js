import fs from 'fs';

export default function readFileAsync(docuLink) {
  fs.readFile(docuLink, 'utf8', (err, data) => {
    if(err) throw err;
    console.log("Sadržaj datoteke:", data);
  });
  
}

