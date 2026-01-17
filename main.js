const display = document.getElementById('display')

let answ;
let solved = false;

function append(n) {
  if(solved){
    clearDisp()
    solved = false
  }
  display.value += n;
  
}
function saveNum(){
  answ = display.value
  clearDisp()
}
function clearDisp() {
  display.value = ""
}
function result() {
  try{
    v = round(eval(display.value), 5)
    if(Number.isNaN(v)){
      throw new Error('Write Smthng bruh')
    }
    display.value = v;
  }
  catch(err){
    display.value = "are you dumb???"
  }
  solved = true;
}

function round(number, decimals=0){
  const factor = Math.pow(10, decimals);
  return Math.round(number * factor) / factor;
}
document.addEventListener('keydown', event => {
  if(event.code.includes('Digit') || ['+', '-', '*', '/'].includes(event.key)){
    append(event.key)
    console.log('numPressed')
  }else if(event.key == 'c'){
    clearDisp()
  }else if(event.key == 'Enter'){
    event.preventDefault()
    result()
  }
  console.log(event)
})
