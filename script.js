window.promises = [];

window.promises = Array.from({ length: 5 }, () => new Promise(resolve => {
  const time = Math.floor(Math.random() * 5) + 1;
  setTimeout(() => resolve(`Promise resolved after ${time} seconds`), time * 1000);
}));

Promise.any(window.promises)
  .then(result => document.getElementById("output").innerHTML = result);

// Do not change the code above this
// add your promises to the array `promises`

// Do not change the code above this
// add your promises to the array `promises`
