const display = document.getElementById('display')
let solved = false;

function append(n) {
  if(solved){
    clearDisp()
    solved = false
  }
  display.value += n;
  
}
function clearDisp() {
  display.value = ""
}
function result() {
  try{
    display.value = round(eval(display.value), 5);
  }
  catch(err){
    display.value = "are you f** dumb???"
  }
  
  solved = true;
}
function round(number, decimals=0){
  const factor = Math.pow(10, decimals);
  return Math.round(number * factor) / factor;
}
