import readFileAsync from "../Zadatak2/readFileAsync.js";

function delayedReadFilesAsync(docuLink, sec) {
  setTimeout(() => {
    readFileAsync(docuLink);
  }, sec * 1000);
}

delayedReadFilesAsync( "../Zadatak2/random.txt", 2);