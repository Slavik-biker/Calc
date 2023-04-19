/*const inputValue = document.querySelector('.value__num');*/

let arr = [];

getSum();
function getSum() {   
	
   var valInp = document.querySelector(".value__num").value;
   arr.push(+valInp)
	
   let reduceVal = arr.reduce(function(prev, item, index, array) {
		return item + prev
	}, 0);
   
	const txtResult = document.querySelector('.values__result span')
   txtResult.innerHTML = reduceVal;
	console.log(reduceVal)
	console.log(arr)
}


function clear()
{
	const elmClear = document.querySelector(".values__input");
	elmClear.addEventListener('click', function removeValue(){
		var text = document.getElementById('text');
		text.value = '';
	})
}
clear();

function getMultiply(){
	var valInp = document.querySelector(".value__num").value;
	arr.push(+valInp)

	var total = 1;

   for (var i = 0; i < arr.length; ++i) {
    total *= arr[i];
   }
   
	const txtResult = document.querySelector('.values__result span')
   txtResult.innerHTML = total;
	console.log(total)
}


function getExtract(){
	console.log(arr);
	var valInp = document.querySelector(".value__num").value;
	arr.push(+valInp)

	let reduceVal = arr.reduce(function(previous, item, index, array) {
		return item - previous
	}, 0);
   
	const txtResult = document.querySelector('.values__result span')
   txtResult.innerHTML = reduceVal;
	console.log(reduceVal)
}

function getDivision(){
	console.log(arr);
	var valInp = document.querySelector(".value__num").value;
	arr.push(+valInp)

	let reduceVal = arr.reduce(function(previous, item, index, array) {
		return item / previous
	}, 1);
   
	const txtResult = document.querySelector('.values__result span')
   txtResult.innerHTML = reduceVal;
	console.log(reduceVal)
}
function render(){

	
}

render();


