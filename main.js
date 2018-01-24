document.addEventListener("DOMContentLoaded", ready);
function ready(){

	//DOM ELEMENTS
	var nums = document.getElementsByClassName('num')
	var result = document.querySelector('.result span')
	var dot = document.querySelector('.dot')
	var plus = document.querySelector('.plus')
	var multiply = document.querySelector('.multiply')
	var minus = document.querySelector('.minus')
	var divide = document.querySelector('.divide')
	var equals = document.querySelector('.equals')
	var c = document.querySelector('.c')
	


	var currentNum = 0;
	var firstPrint = true;

	
	
	
	
	// ADD SOME NUMS
	for (var i = 0; i < nums.length; i++) {
		nums[i].addEventListener('click', addToSpan)
	}


	// ADD DOT
	dot.addEventListener('click', addDot)


	//DELETE NUMS
	result.parentElement.addEventListener('click', removeFromSpan)


	//HANDLE PLUS
	if(result.className == 'afterHandler'){
		result.innerHTML = '';
	}
	plus.addEventListener('click', plusFunc)

	//HANDLE MULTIPLY
	multiply.addEventListener('click', multiplyFunc);

	//HANDLE MINUS
	minus.addEventListener('click', minusFunc)

	//HANDLE DIVIDE
	divide.addEventListener('click', divideFunc)

	//HANDLE EQUALS
	equals.addEventListener('click', equalsFunc)

	//HANDLE CLEAR
	c.addEventListener('click', clear)




	function addToSpan(){

		//CHECK FOR HANDLE BEFORE TO AVOID VISIBLE NUMBER MISTAKE
		if(result.classList.contains('afterHandler')){
			result.innerHTML = ''
			result.classList.remove('afterHandler');
		}

		result.innerHTML += this.innerHTML
		if(firstPrint)
			currentNum = +result.innerHTML;


			//REMOVE AND ADD EVENTLISTENERS
			plus.addEventListener('click', plusFunc)
			multiply.addEventListener('click', multiplyFunc)
			dot.addEventListener('click', addDot)

		}


		function removeFromSpan(){
			result.innerHTML = ''
		}



	//PLUS
	function plusFunc(){
		firstPrint = false;


		if(result.classList.contains('afterPlus'))
			currentNum += +result.innerHTML

		
		//REMOVE AND ADD CLASSES
		result.classList.remove('afterMultiply');
		result.classList.remove('afterEquals')
		result.classList.add('afterHandler');
		if(!result.classList.contains('afterPlus'))
			result.classList.add('afterPlus');

			//REMOVE AND ADD EVENTLISTENERS
			plus.removeEventListener('click', plusFunc)
			minus.addEventListener('click', minusFunc)
			multiply.addEventListener('click', multiplyFunc)
			divide.addEventListener('click', divideFunc)
			dot.addEventListener('click', addDot)
		}



	//MULTIPLY

	function multiplyFunc(){
		firstPrint = false;

		//CHECK FOR PREVIOUS OPERATIONS
		if(result.classList.contains('afterPlus'))
			currentNum += result.innerHTML;

		if(result.classList.contains('afterMultiply'))
			currentNum *= +result.innerHTML

		if(result.classList.contains('afterMinus'))
			currentNum -= +result.innerHTML
		if(result.classList.contains('afterDivide'))
				currentNum /= +result.innerHTML

		
		result.classList.add('afterHandler'); 
		if(!result.classList.contains('afterMultiply'))
			result.classList.add('afterMultiply');

		//REMOVE AND ADD EVENTLISTENERS
		multiply.removeEventListener('click', multiplyFunc)
		minus.addEventListener('click', minusFunc)
		plus.addEventListener('click', plusFunc)
		divide.addEventListener('click', divideFunc)
		dot.addEventListener('click', addDot)
	}


	//MINUS
	function minusFunc(){
		firstPrint = false;

			//CHECK FOR PREVIOUS OPERATIONS
			if(result.classList.contains('afterPlus'))
				currentNum += result.innerHTML;

			if(result.classList.contains('afterMultiply'))
				currentNum *= +result.innerHTML

			if(result.classList.contains('afterMinus'))
				currentNum -= +result.innerHTML

			if(result.classList.contains('afterDivide'))
				currentNum /= +result.innerHTML

			result.classList.add('afterHandler'); 
			if(!result.classList.contains('afterMinus'))
				result.classList.add('afterMinus');

		//REMOVE AND ADD EVENTLISTENERS
		minus.removeEventListener('click', minusFunc)
		multiply.addEventListener('click', multiplyFunc)
		plus.addEventListener('click', plusFunc)
		dot.addEventListener('click', addDot)
		divide.addEventListener('click', divideFunc)

	}


	//DIVIDE
	function divideFunc(){
		firstPrint = false;

		//CHECK FOR PREVIOUS OPERATIONS
			if(result.classList.contains('afterPlus'))
				currentNum += result.innerHTML;

			if(result.classList.contains('afterMultiply'))
				currentNum *= +result.innerHTML

			if(result.classList.contains('afterMinus'))
				currentNum -= +result.innerHTML

			if(result.classList.contains('afterDivide'))
				currentNum /= +result.innerHTML

			result.classList.add('afterHandler'); 
			if(!result.classList.contains('afterDivide'))
				result.classList.add('afterDivide');



	//REMOVE AND ADD EVENTLISTENERS
		divide.removeEventListener('click', divideFunc)
		minus.addEventListener('click', minusFunc)
		multiply.addEventListener('click', multiplyFunc)
		plus.addEventListener('click', plusFunc)
		dot.addEventListener('click', addDot)
	

	}




	//EQUALS
	function equalsFunc(){
		firstPrint = false;

		if(result.classList.contains('afterPlus')){
			currentNum += +result.innerHTML
			result.classList.remove('afterPlus')
			result.innerHTML = currentNum;
			// currentNum -= +result.innerHTML
		}

		if(result.classList.contains('afterMultiply')){
			currentNum *= +result.innerHTML
			result.classList.remove('afterMultiply')
			result.innerHTML = currentNum;
			// currentNum /= +result.innerHTML
		}

		if(result.classList.contains('afterMinus')){
			currentNum -= +result.innerHTML
			result.classList.remove('afterMinus')
			result.innerHTML = currentNum;
		}

		if(result.classList.contains('afterDivide')){
			result.classList.remove('afterDivide')
				currentNum /= +result.innerHTML
				result.innerHTML = currentNum;
		}




		//REMOVE AND ADD EVENTLISTENERS
		divide.addEventListener('click', divideFunc);
		multiply.addEventListener('click', multiplyFunc);
		plus.addEventListener('click', plusFunc);
		minus.addEventListener('click', minusFunc);
		dot.removeEventListener('click', addDot);
	}


//CLEAR
	function clear(){

		currentNum = 0;
		result.innerHTML = 0;
		result.className = '';
		firstPrint = true;

		divide.addEventListener('click', divideFunc);
		multiply.addEventListener('click', multiplyFunc);
		plus.addEventListener('click', plusFunc);
		minus.addEventListener('click', minusFunc);
		dot.addEventListener('click', addDot);

	}


//DOT
	function addDot(){
		result.innerHTML += this.innerHTML
		dot.removeEventListener('click', addDot)

	}

}