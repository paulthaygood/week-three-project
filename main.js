let holder = "";
function run (x){
  holder = holder.concat(x.value);
  setValue(holder);
  console.log(holder);
}
function runClear(){
  holder = "";
  setValue(holder);
  console.log(holder);
}

function runEqual(){
  var total = eval(holder);
  setValue(total);

}

function runMult(){
  holder = holder.concat("*");
  setValue(holder);
  console.log(holder);

}

 function setValue(setValue){
   var newValue = document.getElementById('input-box');
   newValue.value = setValue;
 }
