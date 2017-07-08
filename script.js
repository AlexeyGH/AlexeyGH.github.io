var cell = document.getElementsByClassName('cell'),
	reset = document.getElementsByClassName('btn btn-primary'),
	message = document.getElementsByClassName('message'),
	player = 'X',
	stepCount = 0,
	winCombination = [
		[1,2,3],
		[1,4,7],
		[1,5,9],
		[2,5,8],
		[3,6,9],
		[3,5,7],
		[4,5,6],
		[6,7,8]
	],
	dataX = [],
	dataO = [];


	for(var i = 0; i < cell.length; i++) {
		cell[i].addEventListener('click', currentStep);
	}

	function currentStep(){
		var num = this.getAttribute('cell');
		if(!this.textContent){
			this.innerText = player;
			changePlayer();
			stepCount++;
			(stepCount === 9) ? 
			(message.innerText = 'Ничья') : 
			(message.innerText = 'Ходит игрок ' + player)
		}
	}

	function changePlayer(){
		player === 'X' ? (player = 'O') : (player = 'X');
	}

	reset.addEventListener('click', function(){
			for(var i = 0; i < cell.length; i++) {
			cell[i].innerText = '';
		}
	});