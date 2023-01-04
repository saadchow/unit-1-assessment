const counterElement= document.getElementById('counter');
const minus = document.getElementById('decrement');
const add = document.getElementById('increment');
const inputElement = document.getElementById('inputField');
const reset = document.getElementById('reset');

let counter = 1;

minus.addEventListener('click', () => {
  counter -= Number(inputElement.value);
  counterElement.innerHTML = counter;
  if (counter <0) {
    counterElement.style.color = 'red';
  } else {
    counterEl.style.color = 'black';
  }
});

add.addEventListener('click', () => {
  counter += Number(inputElement.value);
  counterElement.innerHTML = counter;
  if (counter <0) {
    counterElement.style.color = 'red';
  } else {
    counterElement.style.color = 'black';
  }
});

reset.addEventListener("click", function () {
    counter.innerHTML = 0;
});