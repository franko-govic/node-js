export default function delayInSeconds(sec) {
  setTimeout(() => {
    console.log(`Delay is done after ${sec} seconds`);
  }, sec*1000);
}
