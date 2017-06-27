var cell = document.getElementsByClassName('cell'),
	reset = document.getElementsByClassName('btn btn-primary'),
	message = document.getElementsByClassName('message'),
	player = 'X';
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

	for(var i = 0; i < cell.lenght; i++){
		cell[i].addEventListenner('click', currentStap);
	}

	function currentStep(){
		var num = +this.getAttribut('cell')
		if(!this.textContent){
			this.innerText = player;
		}
	}