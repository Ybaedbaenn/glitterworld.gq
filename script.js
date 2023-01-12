let url = 'https://api.adviceslip.com/advice';
let advicediv = document.getElementById('advice');
let iddiv = document.getElementById('advice_id');

function debil(){
const ms = Date.now();

fetch(url+"?dummy="+ms)
.then(res => res.json())
.then(out =>
  {
    console.log(out);
    advicediv.innerHTML = out['slip'].advice;
    iddiv.innerHTML = "ADVICE #" + out['slip'].id;
})
.catch(err => {
    advicediv.innerHTML = "Error.";
    iddiv.innerHTML = "ADVICE #ERROR";
  });
}