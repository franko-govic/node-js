import fs from 'fs';

 function readFileAsync(input, callback) {
  fs.readFile(input, 'utf8', callback);
 }

const  upperCassing = (err, data) => {

    if(err) throw err;
    console.log("Sadržaj datoteke:", data);
    const newText = data.toUpperCase();
    fs.writeFile("output.txt", newText, function(errr){
      if(err) {
        return console.log(err);
      } else {
        console.log("new inout");
      }
    }) 

}

readFileAsync("input.txt", upperCassing);