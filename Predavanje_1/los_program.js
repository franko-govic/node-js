function waitFor(milliseconds) {
  const start = Date.now();
  while(Date.now() - start < milliseconds) {}
}

console.log("Početak programa");

setTimeout(()=> {console.log("Asinkroni zadatak završen")}, 2000);

waitFor(3000);
console.log("Dugotrajan zadatak završen");
console.log("Kraj program");